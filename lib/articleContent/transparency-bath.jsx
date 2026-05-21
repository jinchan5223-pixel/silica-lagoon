import QuoteBlock from '../../components/QuoteBlock'

export default function TransparencyBath() {
  return (
    <>
      <p className="sl-lead">
        透明感のある肌は、<br />
        塗るものだけで作れない。
      </p>

      <img src="/images/bath-surface.jpg" alt="透明感のある水面" className="sl-section-img" />

      <QuoteBlock text={"透明感は、\n外から塗るのではなく、\n内側から整えるもの。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        くすみの原因のひとつは、<br />
        肌表面の古い角質が滞ること。<br />
        温浴効果でやわらかくなった角質層は、<br />
        ターンオーバーをサポートし、<br />
        肌本来の透明感を取り戻す準備を整えます。
      </p>

      <img src="/images/blue-bath.jpg" alt="透き通るような乳青色のお湯" className="sl-section-img" />

      <QuoteBlock text={"浸かるたびに、\n肌の奥から明るくなる。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        透明感を目指す人が<br />
        お風呂時間を大切にする理由は、<br />
        シンプルです。<br />
        毎日20分のバスタイムが、<br />
        全身の肌を整えるもっとも効率的な時間だから。
      </p>

      <QuoteBlock text={"くすみのない肌は、\nお湯の中で育つ。"} sub="SILICA LAGOON" />
    </>
  )
}
