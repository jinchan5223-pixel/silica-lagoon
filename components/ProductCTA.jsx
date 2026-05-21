import Link from 'next/link'

export default function ProductCTA({ lp = 'lp2' }) {
  const isLp1 = lp === 'lp1'
  const href = isLp1 ? '/' : '/lp2'
  const btnText = isLp1
    ? 'SILICA LAGOONの世界を体験する'
    : '今すぐ、うるおう体験をはじめる'

  return (
    <div className="sl-cta">
      <p className="sl-cta-eyebrow">SILICA LAGOON BATH SALT</p>
      <img
        src="/images/product-720g-front.jpg"
        alt="SILICA LAGOON BATH SALT"
        className="sl-cta-img"
        loading="lazy"
      />
      <div className="sl-cta-body">
        <h3 className="sl-cta-name">
          美容液のようなお湯で、<br />
          毎日整う。
        </h3>
        <p className="sl-cta-benefit">
          シリカ・ヒアルロン酸・コラーゲン・スクワランが溶け込んだお湯。<br />
          浸かるだけで、全身の肌が応えはじめる。
        </p>
        <Link href={href} className="sl-cta-btn">
          {btnText}
        </Link>
        <p className="sl-cta-note">30日間返金保証 ／ 全国送料無料</p>
      </div>
    </div>
  )
}
