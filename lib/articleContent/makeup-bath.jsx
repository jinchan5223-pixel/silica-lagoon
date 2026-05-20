import QuoteBlock from '../../components/QuoteBlock'

export default function MakeupBath() {
  return (
    <>
      <p className="sl-lead">
        化粧ノリが悪い日の原因は、<br />
        その朝ではなく、前の夜にある。
      </p>

      <img src="/images/bath-texture.jpg" alt="乳青色の水面テクスチャー" className="sl-section-img" />

      <QuoteBlock text={"翌朝の肌は、\n昨夜のバスタイムでできている。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        肌の水分量、キメ、毛穴の状態——<br />
        これらはすべて、入浴中に整えられる。
      </p>

      <img src="/images/blue-bath.jpg" alt="SILICA LAGOONの青いお湯" className="sl-section-img" />

      <QuoteBlock text={"浸かるほどに、\n肌が静かに整っていく。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        シリカ・ヒアルロン酸が溶け込んだお湯に浸かると、<br />
        入浴後の肌のもちもち感が、明らかに違う。
      </p>

      <QuoteBlock text={"今夜のバスタイムが、\n明日の顔をつくる。"} sub="SILICA LAGOON" />
    </>
  )
}
