// 一時的なデバッグ用エンドポイント — 使用後削除
export default async function handler(req, res) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  const NEW_URL = 'https://silica-lagoon.company/api/webhook';

  try {
    const endpoints = await stripe.webhookEndpoints.list();
    const target = endpoints.data.find(ep => ep.url.includes('silica-lagoon.vercel.app'));

    if (!target) {
      return res.json({ message: 'Already updated or not found', endpoints: endpoints.data.map(e => e.url) });
    }

    const updated = await stripe.webhookEndpoints.update(target.id, { url: NEW_URL });
    return res.json({ success: true, old: target.url, new: updated.url });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
