import QuoteBlock from '../../components/QuoteBlock'

export default function BathAsSerum() {
  return (
    <>
      <p className="sl-lead">
        美容液は、顔に塗るもの——<br />
        "浸かる美容液"という発想が、それを変える。
      </p>

      <img src="/images/color-change.jpg" alt="バスソルトがお湯に溶け込む瞬間" className="sl-section-img" />

      <QuoteBlock text={'"塗る"から"浸かる"へ。\nスキンケアが、変わる。'} sub="SILICA LAGOON" />

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

      <img src="/images/blue-bath.jpg" alt="SILICA LAGOONの青いお湯" className="sl-section-img" />

      <QuoteBlock text={"全身が美容液に包まれる、\nその20分が肌を変える。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        背中・ひじ・かかと・太もも——<br />
        塗るケアでは届かない場所まで、まるごと浸る。
      </p>

      <QuoteBlock text={"浸るほどに、\n肌は透明感を取り戻す。"} sub="SILICA LAGOON" />
    </>
  )
}
