export const config = {
  api: {
    bodyParser: false,
  },
};

async function buffer(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

function formatAddress(addr) {
  if (!addr) return '住所未取得';
  return `〒${addr.postal_code || ''} ${addr.state || ''}${addr.city || ''}${addr.line1 || ''}${addr.line2 ? ' ' + addr.line2 : ''}`;
}

async function sendEmail({ name, email, addrStr, amount, mode, orderId }) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO_EMAIL = process.env.ORDER_NOTIFY_EMAIL || 'b3gam4df@gmail.com';
  const date = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });

  const html = `
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e0e0e0;border-radius:8px;">
  <h2 style="color:#2E3A8C;border-bottom:2px solid #D6E4FF;padding-bottom:12px;">📦 新規注文が入りました</h2>
  <table style="width:100%;border-collapse:collapse;margin-top:16px;">
    <tr style="background:#f5f8ff;">
      <td style="padding:10px 14px;font-weight:bold;width:35%;color:#555;">注文日時</td>
      <td style="padding:10px 14px;">${date}</td>
    </tr>
    <tr>
      <td style="padding:10px 14px;font-weight:bold;color:#555;">注文種別</td>
      <td style="padding:10px 14px;"><strong style="color:#2E3A8C;">${mode}</strong></td>
    </tr>
    <tr style="background:#f5f8ff;">
      <td style="padding:10px 14px;font-weight:bold;color:#555;">お名前</td>
      <td style="padding:10px 14px;">${name}</td>
    </tr>
    <tr>
      <td style="padding:10px 14px;font-weight:bold;color:#555;">メール</td>
      <td style="padding:10px 14px;">${email}</td>
    </tr>
    <tr style="background:#f5f8ff;">
      <td style="padding:10px 14px;font-weight:bold;color:#555;">配送先住所</td>
      <td style="padding:10px 14px;">${addrStr}</td>
    </tr>
    <tr>
      <td style="padding:10px 14px;font-weight:bold;color:#555;">金額</td>
      <td style="padding:10px 14px;">${amount}（税込・送料込）</td>
    </tr>
    <tr style="background:#f5f8ff;">
      <td style="padding:10px 14px;font-weight:bold;color:#555;">注文ID</td>
      <td style="padding:10px 14px;font-size:12px;color:#888;">${orderId}</td>
    </tr>
  </table>
  <div style="margin-top:24px;padding:16px;background:#E8F5E9;border-radius:6px;font-size:14px;color:#2E7D32;font-weight:bold;">
    ✅ このメールが届いたら発送をお願いします。
  </div>
  <div style="margin-top:12px;padding:12px;background:#FFF8E1;border-radius:6px;font-size:12px;color:#888;">
    このメールはSILICA LAGOONの注文自動通知です。
  </div>
</div>`;

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'SILICA LAGOON <onboarding@resend.dev>',
      to: [TO_EMAIL],
      subject: `【発送依頼】${mode} - ${name} 様`,
      html,
    }),
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
  const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  const buf = await buffer(req);
  const sig = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(buf, sig, STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).json({ error: `Webhook Error: ${err.message}` });
  }

  // ── 単発購入 & 定期購入の初回 ──
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const ref    = session.client_reference_id || session.metadata?.ref || 'direct';
    const name   = session.shipping_details?.name || session.customer_details?.name || '未取得';
    const email  = session.customer_details?.email || '未取得';
    const addr   = session.shipping_details?.address || session.customer_details?.address;
    const amount = session.amount_total ? `¥${session.amount_total.toLocaleString('ja-JP')}` : '不明';
    const mode   = session.mode === 'subscription' ? '定期購入（初回）' : '単発購入';

    // Supabaseに記録
    if (SUPABASE_URL && SUPABASE_KEY) {
      await fetch(`${SUPABASE_URL}/rest/v1/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`
        },
        body: JSON.stringify({ ref, amount: session.amount_total, status: 'completed' })
      }).catch(() => {});
    }

    try {
      await sendEmail({ name, email, addrStr: formatAddress(addr), amount, mode, orderId: session.id });
    } catch (e) { console.error('Email error:', e); }
  }

  // ── 定期購入の2回目以降 ──
  if (event.type === 'invoice.payment_succeeded') {
    const invoice = event.data.object;

    // 初回はcheckout.session.completedで処理済みなのでスキップ
    if (invoice.billing_reason === 'subscription_create') {
      return res.status(200).json({ received: true });
    }

    const name   = invoice.customer_shipping?.name || invoice.customer_name || '未取得';
    const email  = invoice.customer_email || '未取得';
    const addr   = invoice.customer_shipping?.address || invoice.customer_address;
    const amount = invoice.amount_paid ? `¥${invoice.amount_paid.toLocaleString('ja-JP')}` : '不明';
    const mode   = '定期購入（継続）';

    try {
      await sendEmail({ name, email, addrStr: formatAddress(addr), amount, mode, orderId: invoice.id });
    } catch (e) { console.error('Email error:', e); }
  }

  res.status(200).json({ received: true });
}
