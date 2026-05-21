export default function ProductCTA({ lp = 'lp2' }) {
  const isLp1 = lp === 'lp1'

  return (
    <div className="sl-cta">
      <p className="sl-cta-eyebrow">SILICA LAGOON BATH SALT</p>
      <img
        src={isLp1 ? '/images/bath-salt-crystal.png' : '/images/product-720g-front.jpg'}
        alt="SILICA LAGOON BATH SALT"
        className="sl-cta-img"
        loading="lazy"
      />
      <div className="sl-cta-body">
        <h3 className="sl-cta-name">
          {isLp1 ? (
            <>美容液のようなお湯で、<br />毎日整う。</>
          ) : (
            <>今日のお風呂を、<br />うるおいの時間へ。</>
          )}
        </h3>
        <p className="sl-cta-benefit">
          シリカ・ヒアルロン酸が溶け込んだ、<br />
          やわらかなお湯。
        </p>
        {/* LP1はres.end()でHTMLを返すページのため<a>でフルリロード */}
        <a href={isLp1 ? '/' : '/lp2'} className="sl-cta-btn">
          {isLp1 ? 'SILICA LAGOONの世界を体験する' : 'SILICA LAGOONを見る'}
        </a>
      </div>
    </div>
  )
}
