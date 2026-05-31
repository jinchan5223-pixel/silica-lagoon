export default function ProductCTA({ lp = 'lp2' }) {
  const isLp1 = lp === 'lp1'
  const isLp3 = lp === 'lp3'

  if (isLp3) {
    return (
      <div className="sl-cta sl-cta-lp3">

        {/* 無音ゾーン — 乳青色の水面で余韻を作る */}
        <div className="sl-cta-silence">
          <img
            src="/images/cta-water-surface.png"
            alt=""
            aria-hidden="true"
            className="sl-cta-silence-img"
            loading="lazy"
          />
          <div className="sl-cta-silence-grad" />
        </div>

        {/* CTA本体 */}
        <div className="sl-cta-body sl-cta-body-lp3">
          <p className="sl-cta-eyebrow">SILICA LAGOON BATH SALT</p>
          <h3 className="sl-cta-name">
            あの乳青色を、<br />自宅のお風呂で。
          </h3>
          <p className="sl-cta-benefit">
            アイスランドの自然に着想を得た、<br />
            ミルキーブルーのバスソルト。
          </p>
          <a href="/lp3" className="sl-cta-btn sl-cta-btn-lp3">
            世界観を体験する
          </a>
        </div>

      </div>
    )
  }

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
        <a href={isLp1 ? '/' : '/lp2'} className="sl-cta-btn">
          {isLp1 ? 'SILICA LAGOONの世界を体験する' : 'SILICA LAGOONを見る'}
        </a>
      </div>
    </div>
  )
}
