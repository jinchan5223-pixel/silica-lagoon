import QuoteBlock from '../../components/QuoteBlock'

export default function ChangeYourWater() {
  return (
    <>
      <p className="sl-lead">
        肌にいちばん長く触れているのは、<br />
        スキンケアではなく、お湯。
      </p>

      <img src="/images/bath-surface.jpg" alt="乳青色の水面" className="sl-section-img" />

      <QuoteBlock text={"毎日触れるものほど、\n見直す価値がある。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        美肌の湯として知られる温泉の多くに、<br />
        シリカ（ケイ素）が高濃度に含まれている。<br /><br />
        そのお湯を、自宅で再現する。
      </p>

      <img src="/images/blue-bath.jpg" alt="SILICA LAGOONの青いお湯" className="sl-section-img" />

      <QuoteBlock text={"透明感は、\n浸かるお湯の質から生まれる。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        同じ入浴時間なのに、<br />
        お湯に何が溶け込んでいるかで、<br />
        肌が受け取るものは変わる。
      </p>

      <QuoteBlock text={"スキンケアを変える前に、\nまずお湯を変えてみる。"} sub="SILICA LAGOON" />
    </>
  )
}
