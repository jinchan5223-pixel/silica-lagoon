import QuoteBlock from '../../components/QuoteBlock'

export default function BenefitsOfBathBeauty() {
  return (
    <>
      <p className="sl-lead">
        お風呂上がり、<br />
        肌だけじゃなく<br />
        気持ちまで軽くなる<br />
        日がある。
      </p>

      <p className="sl-breath">
        うまく説明できないけれど、<br />
        なんか調子いい。<br />
        <br />
        その感覚が、<br />
        続く理由だった。
      </p>

      <img src="/images/totonou-woman.png" alt="お風呂上がりの静かな朝" className="sl-section-img" loading="lazy" />

      <QuoteBlock text={"肌だけじゃなく、\n気持ちまで整っていく。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        シリカが溶けた<br />
        お湯に浸かると、<br />
        <br />
        入浴中から<br />
        肌が静かに整う。
      </p>

      <img src="/images/totonou-woman-2.png" alt="バスルームで自然体の朝" className="sl-section-img" loading="lazy" />

      <QuoteBlock text={"お風呂時間が、\n毎日の余白になる。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        お風呂時間が変わると、<br />
        夜の過ごし方まで<br />
        変わっていく。<br />
        <br />
        深呼吸したくなる<br />
        お風呂時間へ。
      </p>

      <img src="/images/bath-lifestyle.png" alt="整う生活の静かな時間" className="sl-section-img" loading="lazy" />

      <QuoteBlock text={"整う時間は、\n夜につくられる。"} sub="SILICA LAGOON" />

      <p className="sl-closing">
        肌が整う夜は、<br />
        気持ちまで<br />
        少し軽くなる。
      </p>
    </>
  )
}
