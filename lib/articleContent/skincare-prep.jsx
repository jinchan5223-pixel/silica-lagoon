import QuoteBlock from '../../components/QuoteBlock'

export default function SkincarePrep() {
  return (
    <>
      <p className="sl-lead">
        塗る前に、肌を整える。<br />
        それだけで、成分の届き方が変わる。
      </p>

      <img src="/images/bath-surface.jpg" alt="乳青色の水面" className="sl-section-img" />

      <QuoteBlock text={"塗る前に、\n肌を整える。"} sub="SILICA LAGOON" />

      <div className="sl-timeline">
        <div className="sl-tl-card">
          <span className="sl-tl-badge">In Bath</span>
          <div className="sl-tl-period">入浴中</div>
          <ul className="sl-tl-list">
            <li>温熱効果で角質がやわらかくなる</li>
            <li>毛穴が開き、成分を受け取りやすい状態に</li>
          </ul>
        </div>
        <div className="sl-tl-card">
          <span className="sl-tl-badge">Just After</span>
          <div className="sl-tl-period">直後</div>
          <ul className="sl-tl-list">
            <li>角質層が水分を含んだ状態</li>
            <li>浸透率がもっとも高いタイミング</li>
          </ul>
        </div>
        <div className="sl-tl-card">
          <span className="sl-tl-badge">3 Minutes</span>
          <div className="sl-tl-period">3分以内</div>
          <ul className="sl-tl-list">
            <li>保湿で水分を閉じ込める</li>
            <li>このタイミングを逃さない</li>
          </ul>
        </div>
      </div>

      <img src="/images/color-change.jpg" alt="バスソルトが溶け込む瞬間" className="sl-section-img" />

      <QuoteBlock text={"スキンケアの効果は、\nお風呂の中で決まっている。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        バスソルトは、スキンケアの邪魔をしない。<br />
        むしろ、その効果を引き上げる。
      </p>

      <QuoteBlock text={"静かに整う時間が、\n肌をつくっている。"} sub="SILICA LAGOON" />
    </>
  )
}
