import Head from 'next/head'
import Link from 'next/link'
import { articles } from '../../lib/articles'

// カテゴリ別テーマカラー（表示用）
const CATEGORY_META = {
  '乾燥肌ケア':       { eyebrow: 'DRY SKIN' },
  'スキンケア':       { eyebrow: 'SKINCARE' },
  'スキンケア理論':   { eyebrow: 'THEORY' },
  '入浴剤':           { eyebrow: 'BATH SALT' },
  '美肌':             { eyebrow: 'SKIN' },
  '美容習慣':         { eyebrow: 'HABIT' },
  'メイク':           { eyebrow: 'MAKEUP' },
  '年齢肌':           { eyebrow: 'AGING CARE' },
  '美容ライフスタイル':{ eyebrow: 'LIFESTYLE' },
  'トレンド美容':     { eyebrow: 'TREND' },
}

// 表示グループ定義
const groups = [
  {
    label: '乾燥・保湿ケア',
    eyebrow: 'DRY & MOISTURE',
    slugs: ['dry-skin-bath', 'dry-after-bath', 'bathsalt-for-dry', 'moisturizing-bathsalt', 'beyond-topical-care', 'dry-season-bath'],
  },
  {
    label: '美肌・浸かる美容',
    eyebrow: 'BATH BEAUTY',
    slugs: ['bath-as-serum', 'start-bath-beauty', 'change-your-water', 'transparency-bath', 'effortless-beauty'],
  },
  {
    label: 'メイク・スキンケア理論',
    eyebrow: 'SKIN & MAKEUP',
    slugs: ['makeup-bath', 'skincare-prep', 'night-beauty-routine', 'morning-skin-bath'],
  },
  {
    label: '習慣・ライフスタイル',
    eyebrow: 'LIFESTYLE',
    slugs: ['bath-beauty-habit', 'why-bath-beauty-works', '30s-moisturize', 'beauty-women-bath', 'bath-salt-guide'],
  },
]

export default function BlogIndex() {
  const articleMap = Object.fromEntries(articles.map(a => [a.slug, a]))

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>美肌コラム | SILICA LAGOON</title>
        <meta
          name="description"
          content="SILICA LAGOONの美肌コラム。乾燥肌ケア・保湿・化粧ノリ・透明感・浸かる美容など20記事。バスタイムで肌を整える新習慣。"
        />
        <link rel="canonical" href="https://silica-lagoon.company/blog" />
        <meta property="og:title" content="美肌コラム | SILICA LAGOON" />
        <meta property="og:description" content="乾燥・保湿・透明感。浸かる美容で整う肌へ。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://silica-lagoon.company/blog" />
      </Head>

      {/* Header */}
      <header className="sl-header">
        <Link href="/" className="sl-header-logo">SILICA LAGOON</Link>
        <nav className="sl-header-nav">
          <Link href="/lp2">商品を見る</Link>
          <Link href="/blog">美肌コラム</Link>
        </nav>
      </header>

      {/* Blog Hero */}
      <section className="sl-blog-hero">
        <span className="sl-blog-hero-eyebrow">Beauty Column</span>
        <h1 className="sl-blog-hero-title">美肌コラム</h1>
        <p className="sl-blog-hero-sub">
          "浸かる美容"から始まる、<br />
          肌を整える新しい習慣。
        </p>
      </section>

      {/* Article Groups */}
      <div className="sl-blog-list-wrap">
        {groups.map(group => (
          <section key={group.label} style={{ marginBottom: '64px' }}>
            <div style={{ marginBottom: '28px', paddingBottom: '12px', borderBottom: '1px solid rgba(125,162,255,0.15)' }}>
              <span style={{ fontSize: '9px', letterSpacing: '4px', color: '#7da2ff', display: 'block', marginBottom: '6px' }}>
                {group.eyebrow}
              </span>
              <p style={{ fontSize: '15px', fontFamily: 'var(--font-serif)', color: '#0a0f1e', letterSpacing: '0.05em' }}>
                {group.label}
              </p>
            </div>

            <div className="sl-article-list">
              {group.slugs.map(slug => {
                const a = articleMap[slug]
                if (!a) return null
                const meta = CATEGORY_META[a.category] || { eyebrow: a.category }
                return (
                  <Link key={slug} href={`/blog/${slug}`} className="sl-article-list-card">
                    <span className="sl-article-list-cat">{meta.eyebrow}</span>
                    <div className="sl-article-list-title" style={{ whiteSpace: 'pre-line' }}>
                      {a.title}
                    </div>
                    <div className="sl-article-list-desc" style={{ marginTop: '6px', fontSize: '11.5px', color: '#aaa', letterSpacing: '0.02em', lineHeight: '1.7' }}>
                      {a.catchphrase}
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        ))}

        {/* LP2 CTA Banner */}
        <div style={{
          marginTop: '80px',
          background: 'linear-gradient(160deg, #f0f5ff 0%, white 100%)',
          border: '1px solid rgba(125,162,255,0.15)',
          borderRadius: '20px',
          padding: '52px 28px',
          textAlign: 'center',
        }}>
          <span style={{ fontSize: '9px', letterSpacing: '4px', color: '#7da2ff', display: 'block', marginBottom: '16px', textTransform: 'uppercase' }}>
            SILICA LAGOON BATH SALT
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 400, color: '#0a0f1e', lineHeight: 1.8, letterSpacing: '0.05em', marginBottom: '14px' }}>
            美容液のようなお湯で、<br />
            毎日整う。
          </h2>
          <p style={{ fontSize: '12.5px', color: '#888', lineHeight: '2', marginBottom: '32px', letterSpacing: '0.02em' }}>
            シリカ・ヒアルロン酸・コラーゲン・スクワラン配合<br />
            浸かるだけで、全身の肌が応えはじめる。
          </p>
          <Link href="/lp2" className="sl-cta-btn">
            今すぐ、うるおう体験をはじめる
          </Link>
        </div>
      </div>

      <footer className="sl-footer">
        <Link href="/">SILICA LAGOON</Link>
        &nbsp;|&nbsp;
        <Link href="/blog">美肌コラム</Link>
        &nbsp;|&nbsp;
        <Link href="/lp2">商品を見る</Link>
      </footer>
    </>
  )
}
