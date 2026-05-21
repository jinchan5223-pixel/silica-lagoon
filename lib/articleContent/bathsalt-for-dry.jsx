import QuoteBlock from '../../components/QuoteBlock'

export default function BathsaltForDry() {
  return (
    <>
      <p className="sl-lead">
        入浴剤を選ぶとき、<br />
        何を基準にしていますか？
      </p>

      <img src="/images/blue-bath.jpg" alt="乾燥肌に向いた入浴剤のお湯" className="sl-section-img" />

      <QuoteBlock text={"乾燥肌の人ほど、\nお湯の質にこだわるべき。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        乾燥肌に悩む人が入浴剤を選ぶとき、<br />
        最初に見るべきは"保湿成分"ではなく、<br />
        お湯の性質そのものです。
      </p>

      <img src="/images/color-change.jpg" alt="バスソルトが溶け込む瞬間" className="sl-section-img" />

      <QuoteBlock text={"毎日触れるものを、\n丁寧に選ぶ。\nそれが肌を変える。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        乾燥肌向けの入浴剤を選ぶ際に注目したいのは、<br />
        シリカ（ケイ素）・ヒアルロン酸・スクワランなどの<br />
        保湿サポート成分。<br />
        お湯全体をやわらかくし、<br />
        入浴中から肌を整えていく働きをします。
      </p>

      <img src="/images/bath-surface.jpg" alt="やわらかなお湯の水面" className="sl-section-img" />

      <QuoteBlock text={"肌を変えたいなら、\nまずお湯を変えてみる。"} sub="SILICA LAGOON" />
    </>
  )
}
