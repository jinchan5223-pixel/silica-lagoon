export const articles = [
  {
    slug: 'dry-skin-bath',
    title: '乾燥肌を守る、\n"浸かる保湿"という考え方',
    catchphrase: '乾燥肌こそ、\nお風呂を変えるべき理由がある。',
    category: '乾燥肌ケア',
    tags: ['乾燥肌', '入浴法', '保湿'],
    heroImage: '/images/blue-bath.jpg',
    relatedSlugs: ['dry-after-bath', 'bath-salt-guide', 'bath-beauty-habit'],
  },
  {
    slug: 'dry-after-bath',
    title: 'お風呂上がり、\nなぜ肌は乾燥するのか？',
    catchphrase: '出た後の3分が、\n翌朝の肌を決める。',
    category: 'スキンケア',
    tags: ['乾燥', 'お風呂上がり', 'ケア'],
    heroImage: '/images/bath-surface.jpg',
    relatedSlugs: ['dry-skin-bath', 'skincare-prep', 'bath-salt-guide'],
  },
  {
    slug: 'bath-salt-guide',
    title: '後悔しない、\n美容入浴剤の選び方',
    catchphrase: '成分で選ぶ人だけが、\n手に入れる肌がある。',
    category: '入浴剤',
    tags: ['入浴剤', '成分', 'シリカ'],
    heroImage: '/images/butterfly-pea.jpg',
    relatedSlugs: ['change-your-water', 'bath-as-serum', 'dry-skin-bath'],
  },
  {
    slug: 'change-your-water',
    title: 'スキンケアより先に、\n"お湯"を変えてみる。',
    catchphrase: '毎日触れるものほど、\n見直す価値がある。',
    category: '美肌',
    tags: ['お湯', 'シリカ', '美肌'],
    heroImage: '/images/bath-surface.jpg',
    relatedSlugs: ['bath-salt-guide', 'bath-beauty-habit', '30s-moisturize'],
  },
  {
    slug: 'bath-beauty-habit',
    title: 'お風呂時間を、\n"整う美容時間"へ。',
    catchphrase: 'お風呂時間を、\nもっと整う時間へ。',
    category: '美容習慣',
    tags: ['習慣化', '肌変化', 'バス美容'],
    heroImage: '/images/blue-bath.jpg',
    relatedSlugs: ['beauty-women-bath', 'makeup-bath', '30s-moisturize'],
  },
  {
    slug: 'makeup-bath',
    title: '化粧ノリは、\nお風呂時間で変わる。',
    catchphrase: '翌朝の肌は、\n昨夜のバスタイムでできている。',
    category: 'メイク',
    tags: ['化粧ノリ', 'バスタイム', '肌ベース'],
    heroImage: '/images/bath-texture.jpg',
    relatedSlugs: ['skincare-prep', 'bath-beauty-habit', 'dry-after-bath'],
  },
  {
    slug: '30s-moisturize',
    title: '30代からの保湿は、\n"浸かる美容"が鍵。',
    catchphrase: '30代の肌変化に、\nお風呂という答え。',
    category: '年齢肌',
    tags: ['30代', '年齢肌', '保湿'],
    heroImage: '/images/blue-bath.jpg',
    relatedSlugs: ['change-your-water', 'bath-beauty-habit', 'beauty-women-bath'],
  },
  {
    slug: 'skincare-prep',
    title: 'スキンケア前に、\n肌を"整える"という習慣。',
    catchphrase: '塗る前に、\n肌を整える。',
    category: 'スキンケア理論',
    tags: ['スキンケア', '入浴', '浸透'],
    heroImage: '/images/bath-surface.jpg',
    relatedSlugs: ['makeup-bath', 'dry-after-bath', 'bath-as-serum'],
  },
  {
    slug: 'beauty-women-bath',
    title: '美容意識の高い女性ほど、\nお風呂時間を大切にしている。',
    catchphrase: '美容を知る女性ほど、\nバスタイムにこだわる。',
    category: '美容ライフスタイル',
    tags: ['バスタイム', '美容習慣', 'セルフケア'],
    heroImage: '/images/bath-texture.jpg',
    relatedSlugs: ['bath-beauty-habit', 'bath-as-serum', '30s-moisturize'],
  },
  {
    slug: 'bath-as-serum',
    title: '"浸かる美容液"という新習慣。',
    catchphrase: '"塗る"から"浸かる"へ。',
    category: 'トレンド美容',
    tags: ['浸かる美容液', '入浴剤', '全身スキンケア'],
    heroImage: '/images/color-change.jpg',
    relatedSlugs: ['bath-beauty-habit', 'bath-salt-guide', 'skincare-prep'],
  },
]

export function getArticleBySlug(slug) {
  const article = articles.find(a => a.slug === slug)
  if (!article) return null
  const related = article.relatedSlugs
    .map(s => articles.find(a => a.slug === s))
    .filter(Boolean)
    .map(({ slug, title, category }) => ({ slug, title, category }))
  return { ...article, relatedArticles: related }
}
