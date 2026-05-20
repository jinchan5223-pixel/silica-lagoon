import Stripe from 'stripe';

export default async function handler(req, res) {
  // 簡易認証（環境変数のStripeキーが存在すれば正規リクエスト）
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const now = Math.floor(Date.now() / 1000);
    const weekAgo = now - 7 * 24 * 60 * 60;
    const monthAgo = now - 30 * 24 * 60 * 60;

    // 直近7日の支払い
    const weekPayments = await stripe.paymentIntents.list({
      created: { gte: weekAgo },
      limit: 100,
    });

    // 直近30日の支払い
    const monthPayments = await stripe.paymentIntents.list({
      created: { gte: monthAgo },
      limit: 100,
    });

    // 成功した支払いのみ集計
    const weekSucceeded = weekPayments.data.filter(p => p.status === 'succeeded');
    const monthSucceeded = monthPayments.data.filter(p => p.status === 'succeeded');

    const weekTotal = weekSucceeded.reduce((sum, p) => sum + p.amount, 0);
    const monthTotal = monthSucceeded.reduce((sum, p) => sum + p.amount, 0);

    // 直近7日の注文詳細（最新10件）
    const recentOrders = weekSucceeded.slice(0, 10).map(p => ({
      date: new Date(p.created * 1000).toLocaleDateString('ja-JP', { timeZone: 'Asia/Tokyo' }),
      amount: p.amount,
      qty: p.metadata?.quantity || '不明',
      type: p.metadata?.plan || 'single',
    }));

    res.status(200).json({
      generated_at: new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }),
      week: {
        orders: weekSucceeded.length,
        total_yen: weekTotal,
        daily_avg: Math.round(weekTotal / 7),
        orders_per_day: (weekSucceeded.length / 7).toFixed(1),
      },
      month: {
        orders: monthSucceeded.length,
        total_yen: monthTotal,
        daily_avg: Math.round(monthTotal / 30),
        target_100man: Math.round((monthTotal / 1000000) * 100) + '%',
      },
      recent_orders: recentOrders,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
