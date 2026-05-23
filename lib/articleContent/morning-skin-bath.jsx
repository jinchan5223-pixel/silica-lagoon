import QuoteBlock from '../../components/QuoteBlock'

export default function MorningSkinBath() {
  return (
    <>
      <p className="sl-lead">
        カーテンの隙間から<br />
        光が差し込む朝。<br />
        <br />
        起き上がる前に、<br />
        ふと頬に触れてみた。
      </p>

      <p className="sl-breath">
        やわらかい。<br />
        <br />
        昨夜のお風呂が、<br />
        朝の肌に<br />
        残っていた。
      </p>

      <img src="/images/makeup-before.png" alt="朝の窓際で肌に触れる" className="sl-section-img" loading="lazy" />

      <QuoteBlock text={"昨夜のお風呂が、\n今朝の肌になっている。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        シリカとヒアルロン酸が<br />
        溶けたお湯に浸かると、<br />
        <br />
        眠っている間も、<br />
        肌が静かに整い続ける。
      </p>

      <img src="/images/skin-check.png" alt="朝の光の中で肌を確かめる" className="sl-section-img" loading="lazy" />

      <QuoteBlock text={"眠っている間も、\n肌は整い続ける。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        鏡を見るのが、<br />
        少し楽しみになった。<br />
        <br />
        朝の光の中で、<br />
        自分の肌が<br />
        好きになれる。
      </p>

      <img src="/images/skin-check-2.png" alt="朝の素肌、やわらかな手触り" className="sl-section-img" loading="lazy" />

      <QuoteBlock text={"朝の肌が、\n少し好きになる。"} sub="SILICA LAGOON" />

      <p className="sl-closing">
        今夜のお風呂を、<br />
        明日の朝への<br />
        贈りものにする。
      </p>
    </>
  )
}
