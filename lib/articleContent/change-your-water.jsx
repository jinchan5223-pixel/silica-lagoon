import QuoteBlock from '../../components/QuoteBlock'

export default function ChangeYourWater() {
  return (
    <>
      <p className="sl-lead">
        高価なコスメを試す前に、<br />
        毎日15分間、全身で触れている<br />
        「お湯」を見直しましたか。
      </p>

      <img src="/images/bath-surface.jpg" alt="乳青色の水面" className="sl-section-img" />

      <p className="sl-article-lead-sub">
        肌に一番長く触れているのは、<br />
        スキンケアではなく、水。
      </p>

      <QuoteBlock text={"毎日触れるものほど、\n見直す価値がある。"} sub="SILICA LAGOON" />

      <section className="sl-article-section">
        <h2>お湯の質が、肌に影響する理由</h2>
        <p>
          入浴中、肌はお湯に15〜20分間さらされる。<br />
          その間に何が溶け込んでいるかで、<br />
          肌が受け取るものが変わる。<br /><br />
          普通のお湯は汚れを落とす。<br />
          シリカ入りのお湯は、同時に美容成分を届ける。<br /><br />
          同じ入浴時間なのに、<br />
          結果がまったく違う。
        </p>
      </section>

      <div className="sl-info-cards">
        <div className="sl-info-card">
          <div className="ic-icon">🚿</div>
          <div>
            <div className="ic-title">普通のお湯</div>
            <div className="ic-desc">汚れを落とすだけ。美容成分は何も届かない。</div>
          </div>
        </div>
        <div className="sl-info-card">
          <div className="ic-icon">💎</div>
          <div>
            <div className="ic-title">シリカ入りのお湯</div>
            <div className="ic-desc">コラーゲン生成をサポートする成分が、全身に届く。</div>
          </div>
        </div>
        <div className="sl-info-card">
          <div className="ic-icon">💧</div>
          <div>
            <div className="ic-title">保湿成分配合のお湯</div>
            <div className="ic-desc">ヒアルロン酸・コラーゲンが溶け込み、入浴中から浸透。</div>
          </div>
        </div>
      </div>

      <img src="/images/blue-bath.jpg" alt="SILICA LAGOONの青いお湯" className="sl-section-img" />

      <section className="sl-article-section">
        <h2>温泉の美肌効果の正体</h2>
        <p>
          美肌の湯として知られる温泉の多くは、<br />
          シリカ（ケイ素）を高濃度に含んでいる。<br /><br />
          そのお湯を、自宅で再現する。<br />
          それが、SILICA LAGOONが届けたい体験です。
        </p>
      </section>

      <QuoteBlock text={"スキンケアを変える前に、\nまずお湯を変えてみる。"} sub="SILICA LAGOON" />
    </>
  )
}
