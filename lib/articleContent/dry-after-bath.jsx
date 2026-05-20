import QuoteBlock from '../../components/QuoteBlock'

export default function DryAfterBath() {
  return (
    <>
      <p className="sl-lead">
        お風呂から出た直後、<br />
        肌はもっとも無防備な状態にある。<br /><br />
        この3分をどう過ごすかで、<br />
        翌朝の肌がまったく変わる。
      </p>

      <img src="/images/bath-surface.jpg" alt="乳青色の水面" className="sl-section-img" />

      <p className="sl-article-lead-sub">
        入浴後の乾燥は、保湿が「遅い」のではなく<br />
        お湯自体に原因があることが多い。
      </p>

      <section className="sl-article-section">
        <h2>なぜお風呂上がりに乾燥するのか</h2>
        <p>
          入浴中、肌は水分を吸収すると同時に、<br />
          天然保湿因子（NMF）もお湯に溶け出している。<br /><br />
          お風呂から出ると水分が急速に蒸発し、<br />
          NMFまで失った肌は、入浴前より乾燥する——<br />
          これが「お風呂上がりに乾く」メカニズム。
        </p>
      </section>

      <div className="sl-info-cards">
        <div className="sl-info-card">
          <div className="ic-icon">⏱</div>
          <div>
            <div className="ic-title">入浴直後</div>
            <div className="ic-desc">水分蒸発がはじまる。肌がもっとも乾燥しやすい状態。</div>
          </div>
        </div>
        <div className="sl-info-card">
          <div className="ic-icon">✨</div>
          <div>
            <div className="ic-title">3分以内</div>
            <div className="ic-desc">保湿のゴールデンタイム。このタイミングに成分を届ける。</div>
          </div>
        </div>
        <div className="sl-info-card">
          <div className="ic-icon">⚠️</div>
          <div>
            <div className="ic-title">10分後</div>
            <div className="ic-desc">水分蒸発がほぼ完了。このタイミングでは遅い。</div>
          </div>
        </div>
      </div>

      <QuoteBlock text={"出た後の3分が、\n翌朝の肌を決める。"} sub="SILICA LAGOON" />

      <img src="/images/blue-bath.jpg" alt="SILICA LAGOONの青いお湯と製品" className="sl-section-img" />

      <section className="sl-article-section">
        <h2>お湯から変えるという発想</h2>
        <p>
          保湿成分が溶け込んだお湯に浸かれば、<br />
          入浴中から全身に成分が届く。<br /><br />
          お風呂上がりのスキンケアを「頑張る」より先に、<br />
          お湯そのものを変えてみる。<br />
          それだけで、乾燥の感じ方が変わる。
        </p>
      </section>

      <QuoteBlock text={"お湯が変われば、\nお風呂上がりが変わる。"} sub="SILICA LAGOON" />
    </>
  )
}
