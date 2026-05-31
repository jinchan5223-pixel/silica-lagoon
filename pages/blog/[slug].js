import { articles, getArticleBySlug } from '../../lib/articles'
import ArticleLayout from '../../components/ArticleLayout'
import { articleContents } from '../../lib/articleContent/index'

export default function BlogArticle({ articleData }) {
  const Content = articleContents[articleData.slug]

  return (
    <ArticleLayout
      title={articleData.title}
      catchphrase={articleData.catchphrase}
      heroImage={articleData.heroImage}
      category={articleData.category}
      tags={articleData.tags}
      slug={articleData.slug}
      lp={articleData.lp}
      description={articleData.description || ''}
      relatedArticles={articleData.relatedArticles}
    >
      {Content ? <Content /> : <p>コンテンツを準備中です。</p>}
    </ArticleLayout>
  )
}

export async function getStaticPaths() {
  const paths = articles.map(a => ({ params: { slug: a.slug } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const articleData = getArticleBySlug(params.slug)
  if (!articleData) return { notFound: true }
  return { props: { articleData } }
}
