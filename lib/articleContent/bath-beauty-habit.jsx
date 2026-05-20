import QuoteBlock from '../../components/QuoteBlock'

export default function BathBeautyHabit() {
  return (
    <>
      <p className="sl-lead">
        スキンケアを変えるより、<br />
        毎日のお風呂を変える方が、<br />
        肌への影響は大きい。
      </p>

      <img src="/images/blue-bath.jpg" alt="SILICA LAGOONの青いお湯" className="sl-section-img" />

      <p className="sl-article-lead-sub">
        習慣は、積み重なる。<br />
        お風呂時間を整えるだけで、<br />
        肌は少しずつ、確実に変わっていく。
      </p>

      <section className="sl-article-section">
        <h2>1週間・1ヶ月・3ヶ月で変わること</h2>
        <p>
          美容習慣の効果は、すぐには現れない。<br />
          しかし積み重ねることで、確実に変化する。
        </p>
      </section>

      <div className="sl-timeline">
        <div className="sl-tl-card">
          <span className="sl-tl-badge">Week 1</span>
          <div className="sl-tl-period">1<small>週間</small></div>
          <ul className="sl-tl-list">
            <li>お風呂上がりのつっぱり感が和らぐ</li>
            <li>肌が柔らかくなったと感じはじめる</li>
          </ul>
        </div>
        <div className="sl-tl-card">
          <span className="sl-tl-badge">Month 1</span>
          <div className="sl-tl-period">1<small>ヶ月</small></div>
          <ul className="sl-tl-list">
            <li>肌のキメが整ってくる</li>
            <li>化粧ノリが変わったと気づく</li>
          </ul>
        </div>
        <div className="sl-tl-card">
          <span className="sl-tl-badge">Month 3</span>
          <div className="sl-tl-period">3<small>ヶ月</small></div>
          <ul className="sl-tl-list">
            <li>乾燥が気になる季節でも肌が安定</li>
            <li>スキンケアの量が自然と減っていく</li>
          </ul>
        </div>
      </div>

      <QuoteBlock text={"お風呂時間を、\n整う美容時間へ。"} sub="SILICA LAGOON" />

      <img src="/images/bath-surface.jpg" alt="乳青色の水面" className="sl-section-img" />

      <section className="sl-article-section">
        <h2>続けやすい習慣をつくる</h2>
        <p>
          特別なことをする必要はない。<br />
          毎日のお風呂に、バスソルトを入れるだけ。<br /><br />
          それだけで、入浴が「整う時間」に変わる。<br />
          その積み重ねが、3ヶ月後の肌をつくる。
        </p>
      </section>

      <QuoteBlock text={"毎晩続けられることが、\n最強の美容習慣。"} sub="SILICA LAGOON" />
    </>
  )
}
