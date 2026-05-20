import QuoteBlock from '../../components/QuoteBlock'

export default function BathSaltGuide() {
  return (
    <>
      <p className="sl-lead">
        このコバルトブルーの花が、<br />
        お湯をミルキーブルーに変える。
      </p>

      <img src="/images/butterfly-pea.jpg" alt="バタフライピーの花" className="sl-section-img" />

      <QuoteBlock text={"成分で選ぶ人だけが、\n手に入れる肌がある。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        バタフライピー——植物由来の天然の青。<br />
        合成着色料ではなく、自然がつくった色で浸かる。
      </p>

      <img src="/images/color-change.jpg" alt="バスソルトが青く溶け込む瞬間" className="sl-section-img" />

      <div className="sl-info-cards">
        <div className="sl-info-card">
          <div className="ic-icon">💎</div>
          <div>
            <div className="ic-title">シリカ（ケイ素）</div>
            <div className="ic-desc">コラーゲン生成をサポート。美肌温泉の主成分と同じ。</div>
          </div>
        </div>
        <div className="sl-info-card">
          <div className="ic-icon">💧</div>
          <div>
            <div className="ic-title">ヒアルロン酸</div>
            <div className="ic-desc">水分を引きつけ、肌のハリを保つ。入浴中から浸透。</div>
          </div>
        </div>
        <div className="sl-info-card">
          <div className="ic-icon">✨</div>
          <div>
            <div className="ic-title">コラーゲン</div>
            <div className="ic-desc">肌の弾力を支える成分。入浴中から全身に届く。</div>
          </div>
        </div>
        <div className="sl-info-card">
          <div className="ic-icon">🌿</div>
          <div>
            <div className="ic-title">スクワラン</div>
            <div className="ic-desc">皮脂と近い構造。乾燥を防ぐ保護膜として働く。</div>
          </div>
        </div>
      </div>

      <QuoteBlock text={"香りだけで選ぶ時代は、\nもう終わっている。"} sub="SILICA LAGOON" />
    </>
  )
}
