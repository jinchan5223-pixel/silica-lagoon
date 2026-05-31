import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import ProductCTA from './ProductCTA'

const SUP_URL = 'https://mrcvwlaawmlfpoibxjec.supabase.co'
const SUP_KEY = 'sb_publishable_nONkmADAMLoZ1wxUrZqwug_F_Fm08yO'

export default function ArticleLayout({
  title,
  catchphrase,
  heroImage,
  heroAlt = '',
  category,
  tags = [],
  slug,
  lp = 'lp2',
  description = '',
  relatedArticles = [],
  children,
}) {
  const canonicalUrl = `https://silica-lagoon.company/blog/${slug}`
  const ogTitle = `${title} | SILICA LAGOON`
  const metaDesc = description || catchphrase?.replace(/\n/g, '') || ''

  useEffect(() => {
    const key = `pv_${slug}`
    if (sessionStorage.getItem(key)) return
    sessionStorage.setItem(key, '1')
    fetch(`${SUP_URL}/rest/v1/clicks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUP_KEY,
        'Authorization': `Bearer ${SUP_KEY}`,
      },
      body: JSON.stringify({ ref: slug, lp: 'pv' }),
    }).catch(() => {})
  }, [slug])

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{ogTitle}</title>
        <link rel="canonical" href={canonicalUrl} />
        {metaDesc && <meta name="description" content={metaDesc} />}
        <meta property="og:title" content={ogTitle} />
        {metaDesc && <meta property="og:description" content={metaDesc} />}
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://silica-lagoon.company/images/ogp.jpg" />
      </Head>

      {/* Header */}
      <header className="sl-header">
        <Link href="/" className="sl-header-logo">SILICA LAGOON</Link>
        <nav className="sl-header-nav">
          <Link href="/">商品トップ</Link>
          <Link href="/blog">美容コラム</Link>
        </nav>
      </header>

      {/* Breadcrumb */}
      <nav className="sl-breadcrumb">
        <Link href="/">TOP</Link>
        <span>›</span>
        <Link href="/blog">美容コラム</Link>
        <span>›</span>
        <span>{title}</span>
      </nav>

      {/* Hero */}
      <section className="sl-hero">
        <img
          src={heroImage}
          alt={heroAlt || title}
          className="sl-hero-img"
        />
        <div className="sl-hero-overlay" />
        <div className="sl-hero-content">
          <span className="sl-hero-category">{category}</span>
          <p className="sl-hero-catchphrase">{catchphrase}</p>
          <div className="sl-hero-tags">
            {tags.map(tag => (
              <span key={tag} className="sl-hero-tag">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Article */}
      <div className="sl-article-wrap">
        <h1 className="sl-article-title">{title}</h1>

        <article className="sl-body">
          {children}
        </article>

        <ProductCTA lp={lp} />

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <aside className="sl-related">
            <p className="sl-related-title">Related Articles</p>
            <div className="sl-related-grid">
              {relatedArticles.map(r => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="sl-related-card">
                  <div className="sl-related-card-cat">{r.category}</div>
                  <div className="sl-related-card-title">{r.title}</div>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </div>

      <footer className="sl-footer">
        <Link href="/">SILICA LAGOON</Link>
        &nbsp;|&nbsp;
        <Link href="/blog">美容コラム</Link>
      </footer>
    </>
  )
}
