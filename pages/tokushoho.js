export async function getServerSideProps({ res }) {
  res.writeHead(302, { Location: '/tokushoho.html' })
  res.end()
  return { props: {} }
}

export default function Tokushoho() { return null }
