export default function ProductCTA() {
  return (
    <div className="sl-cta">
      <img
        src="/images/product-spill.jpg"
        alt="SILICA LAGOON BATH SALT"
        className="sl-cta-img"
      />
      <div className="sl-cta-body">
        <p className="sl-cta-label">Recommended</p>
        <h3 className="sl-cta-name">SILICA LAGOON BATH SALT</h3>
        <p className="sl-cta-benefit">
          お湯に溶かすだけで、全身が美容液に包まれる。
        </p>
        <p className="sl-cta-ingredients">
          シリカ · ヒアルロン酸 · コラーゲン · スクワラン
        </p>
        <p className="sl-cta-price">
          ¥3,300<small>（税込・送料込）</small>
        </p>
        <a
          href="https://silica-lagoon.company/"
          className="sl-cta-btn"
        >
          今すぐ、自宅でスパ体験をはじめる
        </a>
        <p className="sl-cta-note">定期購入プランあり ／ 全国送料無料</p>
      </div>
    </div>
  )
}
