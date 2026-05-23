import QuoteBlock from '../../components/QuoteBlock'

export default function MakeupBath() {
  return (
    <>
      <p className="sl-lead">
        朝、鏡を見て<br />
        ため息をついた<br />
        ことがありますか？
      </p>

      <p className="sl-breath">
        肌がくすんでいる。<br />
        ファンデが<br />
        のりにくい。<br />
        <br />
        その原因は、<br />
        昨夜のお風呂に<br />
        あるかもしれない。
      </p>

      <img src="/images/makeup-bath.png" alt="バスタイムと朝の肌の関係" className="sl-section-img" loading="lazy" />

      <QuoteBlock text={"翌朝の肌は、\n昨夜のバスタイムで\nできている。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        シリカとヒアルロン酸が<br />
        溶け込んだお湯に浸かると、<br />
        <br />
        肌のキメが整い、<br />
        翌朝の素肌が<br />
        少し変わる。
      </p>

      <img src="/images/makeup.png" alt="素肌感のあるメイクアップ" className="sl-section-img" loading="lazy" />

      <QuoteBlock text={"浸かるほどに、\n肌が静かに整っていく。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        ファンデを薄くしても、<br />
        自信が持てる朝へ。<br />
        <br />
        スキンケアの前に、<br />
        まずお湯を変える。
      </p>

      <img src="/images/morning-glow.png" alt="朝の柔らかな光の中の肌" className="sl-section-img" loading="lazy" />

      <QuoteBlock text={"メイク前の肌が、\n少し好きになる。"} sub="SILICA LAGOON" />

      <p className="sl-closing">
        今夜のバスタイムを、<br />
        明日の顔への<br />
        投資にする。
      </p>
    </>
  )
}
