import QuoteBlock from '../../components/QuoteBlock'

export default function DrySkinBath() {
  return (
    <>
      <p className="sl-lead">
        お風呂後、<br />
        肌がちゃんと<br />
        落ち着いてる。<br />
        <br />
        そんな夜がある。
      </p>

      <p className="sl-breath">
        乾燥してない夜は、<br />
        肌のことが<br />
        気にならない。<br />
        <br />
        気にならない分だけ、<br />
        気持ちまでラク。
      </p>

      <img src="/images/stress-free.png" alt="お風呂上がりの静かな安心感" className="sl-section-img" loading="lazy" />

      <QuoteBlock text={"乾燥しない夜は、\n気持ちまで少し静か。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        シリカが溶けた<br />
        お湯に浸かると、<br />
        <br />
        お風呂後の肌が<br />
        少し呼吸しやすい。
      </p>

      <img src="/images/dry-zero-skin.png" alt="肌がちゃんとラクな夜" className="sl-section-img" loading="lazy" />

      <QuoteBlock text={"お風呂後、\n肌がちゃんとラク。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        つっぱらない肌で<br />
        眠れる夜は、<br />
        <br />
        眠りまで<br />
        やさしい気がする。
      </p>

      <img src="/images/stress-free-night.png" alt="乾燥ストレスのない静かな夜" className="sl-section-img" loading="lazy" />

      <QuoteBlock text={"肌がラクな夜は、\n眠りまでやさしい。"} sub="SILICA LAGOON" />

      <p className="sl-closing">
        乾燥しない夜は、<br />
        眠る時間まで<br />
        少しやさしい。
      </p>
    </>
  )
}
