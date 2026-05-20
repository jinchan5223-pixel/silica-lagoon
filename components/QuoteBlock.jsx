export default function QuoteBlock({ text, sub }) {
  return (
    <blockquote className="sl-quote">
      <p className="sl-quote-text">{text}</p>
      {sub && <p className="sl-quote-sub">{sub}</p>}
    </blockquote>
  )
}
