import QuoteBlock from '../../components/QuoteBlock'

export default function DrySkinBath() {
  return (
    <>
      <p className="sl-lead">
        お風呂は、洗う場所だと思っていた。<br />
        でも今夜から、整える場所になる。
      </p>

      <img src="/images/blue-bath.jpg" alt="乳青色のお湯" className="sl-section-img" />

      <QuoteBlock text={"乾燥肌に必要なのは、\nもっと塗ることではなく、\n浸かることだった。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        バスソルトが溶け込んだお湯に、ただ浸かる。<br />
        それだけで、肌の感触が変わっていく。
      </p>

      <img src="/images/color-change.jpg" alt="バスソルトが溶け込む瞬間" className="sl-section-img" />

      <QuoteBlock text={"整う、という感覚を\n肌で知っている。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        シリカ・ヒアルロン酸・スクワランが溶け込んだお湯。<br />
        入浴中から、全身の肌に成分が届きはじめる。
      </p>

      <QuoteBlock text={"頑張らなくていい美容を。\nお風呂の時間が、それを叶える。"} sub="SILICA LAGOON" />
    </>
  )
}
