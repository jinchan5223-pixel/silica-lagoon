import QuoteBlock from '../../components/QuoteBlock'

export default function SkincarePrep() {
  return (
    <>
      <p className="sl-lead">
        化粧水や美容液の効果が出にくいなら、<br />
        「塗り方」ではなく「塗る前の肌」を<br />
        見直す必要があるかもしれない。
      </p>

      <img src="/images/bath-surface.jpg" alt="乳青色の水面" className="sl-section-img" />

      <p className="sl-article-lead-sub">
        肌を整えてから塗る。<br />
        たったそれだけで、成分の届き方が変わる。
      </p>

      <section className="sl-article-section">
        <h2>スキンケアの効果を左右するもの</h2>
        <p>
          良い化粧水・美容液を使っていても、<br />
          肌の角質層が乱れていると成分が届きにくい。<br /><br />
          入浴で肌を柔らかく整えることが、<br />
          スキンケアの効果を最大化する「下準備」になる。
        </p>
      </section>

      <div className="sl-timeline">
        <div className="sl-tl-card">
          <span className="sl-tl-badge">In Bath</span>
          <div className="sl-tl-period">入浴中</div>
          <ul className="sl-tl-list">
            <li>温熱効果で角質が柔らかくなる</li>
            <li>毛穴が開き、成分を受け取りやすい状態に</li>
          </ul>
        </div>
        <div className="sl-tl-card">
          <span className="sl-tl-badge">Just After</span>
          <div className="sl-tl-period">直後</div>
          <ul className="sl-tl-list">
            <li>角質層が水分を含んだ状態</li>
            <li>浸透率が最も高いタイミング</li>
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

      <QuoteBlock text={"塗る前に、\n肌を整える。"} sub="SILICA LAGOON" />

      <img src="/images/color-change.jpg" alt="バスソルトが溶け込む瞬間" className="sl-section-img" />

      <section className="sl-article-section">
        <h2>入浴剤が「下準備」を強化する</h2>
        <p>
          保湿成分配合のバスソルトを使うと、<br />
          入浴中から肌に成分が届きはじめる。<br /><br />
          肌が整った状態でお風呂から上がれば、<br />
          その後のスキンケアの効果も変わる。<br /><br />
          バスソルトは、スキンケアの邪魔をしない。<br />
          むしろ、その効果を引き上げる。
        </p>
      </section>

      <QuoteBlock text={"スキンケアの効果は、\nお風呂の中で決まっている。"} sub="SILICA LAGOON" />
    </>
  )
}
