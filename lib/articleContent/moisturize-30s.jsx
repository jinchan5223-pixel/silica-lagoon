import QuoteBlock from '../../components/QuoteBlock'

export default function Moisturize30s() {
  return (
    <>
      <p className="sl-lead">
        30代に入ると、肌の変化を感じる機会が増える。<br />
        乾燥・くすみ・毛穴の目立ち。<br /><br />
        それは、保湿の方法を変えるサインかもしれない。
      </p>

      <img src="/images/blue-bath.jpg" alt="SILICA LAGOONの青いお湯" className="sl-section-img" />

      <p className="sl-article-lead-sub">
        20代と同じケアでは、もう足りない。<br />
        30代の肌には、浸かる保湿が合っている。
      </p>

      <section className="sl-article-section">
        <h2>30代で起こる肌変化</h2>
        <p>
          30代になると、肌のターンオーバーが遅くなり、<br />
          コラーゲンの生成も低下しはじめる。<br /><br />
          この変化に、塗るケアだけで対応するには限界がある。<br />
          全身をまるごとケアできる入浴が、解決策になる。
        </p>
      </section>

      <div className="sl-info-cards">
        <div className="sl-info-card">
          <div className="ic-icon">💧</div>
          <div>
            <div className="ic-title">水分保持力の低下</div>
            <div className="ic-desc">肌が水分を保ちにくくなり、乾燥・小じわが目立ちはじめる。</div>
          </div>
        </div>
        <div className="sl-info-card">
          <div className="ic-icon">✨</div>
          <div>
            <div className="ic-title">コラーゲン減少</div>
            <div className="ic-desc">ハリ・弾力の低下。表情じわが定着しやすくなる。</div>
          </div>
        </div>
        <div className="sl-info-card">
          <div className="ic-icon">🌀</div>
          <div>
            <div className="ic-title">ターンオーバーの遅れ</div>
            <div className="ic-desc">くすみ・色ムラが出やすくなる。代謝促進が必要。</div>
          </div>
        </div>
      </div>

      <QuoteBlock text={"30代の肌変化に、\nお風呂という答え。"} sub="SILICA LAGOON" />

      <img src="/images/butterfly-pea.jpg" alt="バタフライピーの花" className="sl-section-img" />

      <section className="sl-article-section">
        <h2>浸かる保湿という考え方</h2>
        <p>
          シリカ・コラーゲン・ヒアルロン酸が溶け込んだお湯に浸かることで、<br />
          全身の肌に同時にアプローチできる。<br /><br />
          背中・ひじ・かかと——<br />
          塗るケアでは後回しになる部位も、まるごとケアできる。<br /><br />
          30代のスキンケアは、お風呂から始まる。
        </p>
      </section>

      <QuoteBlock text={"毎晩のバスタイムが、\n30代の肌への投資になる。"} sub="SILICA LAGOON" />
    </>
  )
}
