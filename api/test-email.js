// デバッグ用 — テスト後は削除
export default async function handler(req, res) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO_EMAIL = process.env.ORDER_NOTIFY_EMAIL || 'b3gam4df@gmail.com';

  if (!RESEND_API_KEY) {
    return res.status(500).json({ error: 'RESEND_API_KEY not set' });
  }

  const result = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'SILICA LAGOON <onboarding@resend.dev>',
      to: [TO_EMAIL],
      subject: '【接続テスト】SILICA LAGOON',
      html: '<p>Resend接続テスト成功！このメールが届けばOKです。</p>',
    }),
  });

  const body = await result.json();
  return res.status(result.status).json({
    resend_status: result.status,
    resend_body: body,
    api_key_prefix: RESEND_API_KEY.substring(0, 8) + '...',
    to: TO_EMAIL,
  });
}
