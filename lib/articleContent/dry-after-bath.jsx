import QuoteBlock from '../../components/QuoteBlock'

export default function DryAfterBath() {
  return (
    <>
      <p className="sl-lead">
        お風呂から出た直後、<br />
        肌はもっとも無防備な状態にある。
      </p>

      <img src="/images/bath-surface.jpg" alt="乳青色の水面" className="sl-section-img" />

      <QuoteBlock text={"出た後の3分が、\n翌朝の肌を決める。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        入浴中から保湿成分が溶け込んでいれば、<br />
        お風呂上がりの肌は、もう変わっている。
      </p>

      <img src="/images/blue-bath.jpg" alt="SILICA LAGOONの青いお湯" className="sl-section-img" />

      <QuoteBlock text={"お湯が変われば、\nお風呂上がりが変わる。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        スキンケアを頑張る前に、<br />
        まずお湯を変えてみる。
      </p>

      <QuoteBlock text={"深呼吸するように、\n肌を整える時間。"} sub="SILICA LAGOON" />
    </>
  )
}
