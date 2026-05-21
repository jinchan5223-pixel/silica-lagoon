export async function getServerSideProps({ req, res }) {
  const qs = req.url.includes('?') ? '?' + req.url.split('?')[1] : ''
  res.writeHead(302, { Location: '/influencer.html' + qs })
  res.end()
  return { props: {} }
}

export default function Influencer() { return null }
