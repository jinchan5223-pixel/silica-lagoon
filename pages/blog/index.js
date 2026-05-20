import Head from 'next/head'
import Link from 'next/link'
import { articles } from '../../lib/articles'

const categories = [
  {
    label: '乾燥・保湿ケア',
    slugs: ['dry-skin-bath', 'dry-after-bath', 'bath-salt-guide'],
    descs: {
      'dry-skin-bath': '乾燥肌をさらに悪化させない入浴法。温度・時間・入浴剤の選び方まで。',
      'dry-after-bath': '入浴後に肌が乾燥するのはなぜ？原因を知って正しいケアを。',
      'bath-salt-guide': 'シリカ・ヒアルロン酸・コラーゲン配合の入浴剤、どう選ぶか。',
    },
  },
  {
    label: '美肌・バスタイム',
    slugs: ['change-your-water', 'bath-as-serum', 'bath-beauty-habit'],
    descs: {
      'change-your-water': 'スキンケアを変える前に、毎日触れる「お湯」を見直す。',
      'bath-as-serum': '全身を美容液に浸す新しいスキンケア習慣とは。',
      'bath-beauty-habit': '1週間・1ヶ月・3ヶ月のスパンで起こる肌変化を時系列で解説。',
    },
  },
  {
    label: 'メイク・スキンケア理論',
    slugs: ['makeup-bath', 'skincare-prep'],
    descs: {
      'makeup-bath': '翌朝の化粧ノリは前夜のお風呂で決まる。',
      'skincare-prep': '化粧水・美容液の効果を最大化するには、塗る前の肌を整えること。',
    },
  },
  {
    label: '年齢肌・ライフスタイル',
    slugs: ['30s-moisturize', 'beauty-women-bath'],
    descs: {
      '30s-moisturize': '30代から始まる肌変化にはお風呂ケアで対応。',
      'beauty-women-bath': '美容賢者がバスタイムにこだわる理由と実践習慣。',
    },
  },
]

export default function BlogIndex() {
  const articleMap = Object.fromEntries(articles.map(a => [a.slug, a]))

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>美容コラム | SILICA LAGOON</title>
        <meta name="description" content="SILICA LAGOONの美容コラム。バスタイム・スキンケア・乾燥肌ケアの専門情報をお届け。" />
        <link rel="canonical" href="https://silica-lagoon.company/blog" />
      </Head>

      <header className="sl-header">
        <Link href="/" className="sl-header-logo">SILICA LAGOON</Link>
        <nav className="sl-header-nav">
          <Link href="/">商品トップ</Link>
          <Link href="/blog">美容コラム</Link>
        </nav>
      </header>

      <nav className="sl-breadcrumb">
        <Link href="/">TOP</Link>
        <span>›</span>
        <span>美容コラム</span>
      </nav>

      <section className="sl-blog-hero">
        <span className="sl-blog-hero-eyebrow">Beauty Column</span>
        <h1 className="sl-blog-hero-title">美容コラム</h1>
        <p className="sl-blog-hero-sub">
          バスタイム・スキンケア・乾燥肌ケアに関する<br />
          専門的な美容情報をお届けします
        </p>
      </section>

      <div className="sl-blog-list-wrap">
        {categories.map(cat => (
          <section key={cat.label}>
            <p className="sl-category-label">{cat.label}</p>
            <div className="sl-article-list">
              {cat.slugs.map(slug => {
                const a = articleMap[slug]
                if (!a) return null
                return (
                  <Link key={slug} href={`/blog/${slug}`} className="sl-article-list-card">
                    <span className="sl-article-list-cat">{a.category}</span>
                    <div>
                      <div className="sl-article-list-title">{a.title}</div>
                      <div className="sl-article-list-desc">{cat.descs[slug]}</div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        ))}

        {/* CTA Banner */}
        <div style={{
          marginTop: '80px',
          background: 'linear-gradient(135deg, var(--primary-soft), white)',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          padding: '48px 32px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '10px', letterSpacing: '4px', color: 'var(--accent)', marginBottom: '12px', textTransform: 'uppercase' }}>
            Recommended
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--text-dark)', marginBottom: '10px' }}>
            SILICA LAGOON BATH SALT
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '28px' }}>
            シリカ・ヒアルロン酸・コラーゲン・スクワラン配合<br />
            お湯に入れるだけで、全身が美容液に包まれる入浴剤
          </p>
          <a
            href="https://silica-lagoon.company/"
            className="sl-cta-btn"
          >
            今すぐ、自宅でスパ体験をはじめる
          </a>
        </div>
      </div>

      <footer className="sl-footer">
        <Link href="/">SILICA LAGOON</Link>
        &nbsp;|&nbsp;
        <Link href="/blog">美容コラム</Link>
      </footer>
    </>
  )
}
