import Head from 'next/head'
import Link from 'next/link'
import ProductCTA from './ProductCTA'

export default function ArticleLayout({
  title,
  catchphrase,
  heroImage,
  heroAlt = '',
  category,
  tags = [],
  slug,
  lp = 'lp2',
  relatedArticles = [],
  children,
}) {
  const canonicalUrl = `https://silica-lagoon.company/blog/${slug}`
  const ogTitle = `${title} | SILICA LAGOON`

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{ogTitle}</title>
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={ogTitle} />
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
