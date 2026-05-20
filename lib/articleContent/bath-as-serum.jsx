import QuoteBlock from '../../components/QuoteBlock'

export default function BathAsSerum() {
  return (
    <>
      <p className="sl-lead">
        美容液は、顔に塗るもの——<br />
        そう思っていませんか。<br /><br />
        "浸かる美容液"という発想が、<br />
        全身のスキンケアを変えつつある。
      </p>

      <img src="/images/color-change.jpg" alt="バスソルトがお湯に溶け込む瞬間" className="sl-section-img" />

      <p className="sl-article-lead-sub">
        "塗る"から"浸かる"へ。<br />
        スキンケアの新しい常識。
      </p>

      <QuoteBlock text={'"塗る"から"浸かる"へ。\nスキンケアが、変わる。'} sub="SILICA LAGOON" />

      <section className="sl-article-section">
        <h2>浸かる美容液とは</h2>
        <p>
          シリカ・ヒアルロン酸・コラーゲン・スクワランが<br />
          溶け込んだお湯に全身で浸かることで、<br />
          顔だけでなく、全身の肌に成分が届く。<br /><br />
          これが「浸かる美容液」という新しい習慣。<br />
          全身美容液に20分、まるごと浸かる。
        </p>
      </section>

      <div className="sl-info-cards">
        <div className="sl-info-card">
          <div className="ic-icon">💎</div>
          <div>
            <div className="ic-title">シリカ</div>
            <div className="ic-desc">コラーゲン生成をサポート。美肌温泉の主成分と同じ。</div>
          </div>
        </div>
        <div className="sl-info-card">
          <div className="ic-icon">💧</div>
          <div>
            <div className="ic-title">ヒアルロン酸</div>
            <div className="ic-desc">水分を引きつけ、肌にハリと潤いをもたらす。</div>
          </div>
        </div>
        <div className="sl-info-card">
          <div className="ic-icon">✨</div>
          <div>
            <div className="ic-title">コラーゲン</div>
            <div className="ic-desc">肌の弾力を保つ成分。全身から補給できる。</div>
          </div>
        </div>
        <div className="sl-info-card">
          <div className="ic-icon">🌿</div>
          <div>
            <div className="ic-title">スクワラン</div>
            <div className="ic-desc">乾燥を防ぐ保護膜。入浴後のなめらかさが続く。</div>
          </div>
        </div>
      </div>

      <img src="/images/blue-bath.jpg" alt="SILICA LAGOONの青いお湯と製品" className="sl-section-img" />

      <section className="sl-article-section">
        <h2>なぜ全身に届くのか</h2>
        <p>
          入浴中、体温が上がることで毛穴が開く。<br />
          その状態で美容成分が溶け込んだお湯に浸かると、<br />
          全身の皮膚から成分が届きやすくなる。<br /><br />
          背中・ひじ・かかと・太もも——<br />
          塗るケアでは届かない場所まで、まるごとケア。
        </p>
      </section>

      <QuoteBlock text={"全身が美容液に包まれる、\nその20分が肌を変える。"} sub="SILICA LAGOON" />
    </>
  )
}
