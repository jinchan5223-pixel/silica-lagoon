import QuoteBlock from '../../components/QuoteBlock'

export default function BathBeautyHabit() {
  return (
    <>
      <p className="sl-lead">
        習慣は、積み重なる。<br />
        毎日のお風呂を整えるだけで、<br />
        肌は少しずつ変わっていく。
      </p>

      <img src="/images/blue-bath.jpg" alt="SILICA LAGOONの青いお湯" className="sl-section-img" />

      <QuoteBlock text={"お風呂時間を、\n整う美容時間へ。"} sub="SILICA LAGOON" />

      <div className="sl-timeline">
        <div className="sl-tl-card">
          <span className="sl-tl-badge">Week 1</span>
          <div className="sl-tl-period">1<small>週間</small></div>
          <ul className="sl-tl-list">
            <li>お風呂上がりのつっぱり感が和らぐ</li>
            <li>肌がやわらかくなったと感じはじめる</li>
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
            <li>乾燥の季節でも肌が安定している</li>
            <li>スキンケアの量が自然と減っていく</li>
          </ul>
        </div>
      </div>

      <img src="/images/bath-surface.jpg" alt="静かな水面" className="sl-section-img" />

      <QuoteBlock text={"非日常は、\n自宅の浴室にある。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        特別なことはいらない。<br />
        毎晩のお風呂に、バスソルトを溶かすだけ。
      </p>

      <QuoteBlock text={"毎晩続けられることが、\n最強の美容習慣。"} sub="SILICA LAGOON" />
    </>
  )
}
