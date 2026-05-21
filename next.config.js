/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  // 旧URL → 新URL（SEO最適化スラッグ変更分）301リダイレクト
  async redirects() {
    return [
      { source: '/blog/bathsalt-for-dry',    destination: '/blog/dry-skin-bathsalt',        permanent: true },
      { source: '/blog/start-bath-beauty',   destination: '/blog/bath-beauty-for-skin',     permanent: true },
      { source: '/blog/transparency-bath',   destination: '/blog/clear-skin-bath',          permanent: true },
      { source: '/blog/beyond-topical-care', destination: '/blog/bath-vs-topical-skincare', permanent: true },
      { source: '/blog/effortless-beauty',   destination: '/blog/effortless-bath-beauty',   permanent: true },
      { source: '/blog/why-bath-beauty-works', destination: '/blog/benefits-of-bath-beauty', permanent: true },
    ]
  },
}

module.exports = nextConfig
