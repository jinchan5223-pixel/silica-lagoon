import QuoteBlock from '../../components/QuoteBlock'

export default function WhyBathTurnsBlue() {
  return (
    <>
      {/* ② Hero直下 — まず答えを提示 */}
      <div className="sl-answer">
        <p className="sl-answer-q">なぜ、お湯は乳青色に見えるのか。</p>
        <p className="sl-answer-a">
          シリカが光を拡散させ、<br />
          お湯を乳青色に変えます。
        </p>
        <p className="sl-answer-desc">
          この記事では、お湯が青くなる理由と、幻想的な世界観を解説します。
        </p>
      </div>

      {/* ③ 青く見える3つの理由 — 理解優先 */}
      <div className="sl-article-section">
        <h2>お湯が青く見える、3つの理由。</h2>
      </div>

      <img
        src="/images/blue-reason.png"
        alt="お湯が青く見える3つの理由"
        className="sl-reason-diagram"
        loading="lazy"
      />

      {/* ④ なぜ幻想的に見えるのか — 感情・没入へ */}
      <div className="sl-article-section">
        <h2>なぜ、あの青は幻想的に見えるのか。</h2>

        <p>透明なお湯が青く変わる瞬間、人は息をのむ。</p>
        <p>それはただの色の変化ではない。</p>
        <p>光が水中で拡散し、お湯全体がやわらかく輝く。その乳青色は、空を映しているのではない。水の中のシリカが、光そのものを変えている。</p>
      </div>

      <img
        src="/images/color-changing.jpg"
        alt="お湯が乳青色に変わる瞬間"
        className="sl-section-img"
        loading="lazy"
      />
      <p className="sl-section-img-caption">透明だったお湯が、静かに青へと変わる。</p>

      <QuoteBlock text={"光が水の中で変わる瞬間、\nそれが青になる。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        青く輝くお湯の前に立つと、<br />言葉より先に、体に届く。
      </p>

      {/* ⑤ ブルーラグーンとの接続 */}
      <div className="sl-article-section">
        <h2>青い温泉が、<br />世界中の人を惹きつける理由。</h2>

        <p>アイスランドのブルーラグーンが、世界中から人を集めるのは、その乳青色に理由がある。</p>
        <p>地熱で温まった水が、大量のシリカを溶かし込む。シリカが光を散乱させることで、お湯全体が乳青色に輝く。</p>
        <p>「ブルーラグーンがなぜ青いのか」。</p>
        <p>その答えが、シリカによる光の拡散にある。あの青は、空や海を映しているのではない。大地のミネラルが、光そのものを変えていく。</p>
      </div>

      {/* ⑥ 自然がつくり出す、やさしい青の世界 */}
      <div className="sl-world-section">
        <img
          src="/images/blue-steam-lagoon.jpg"
          alt="自然の青い世界"
          className="sl-world-img"
          loading="lazy"
        />
        <div className="sl-world-overlay" />
        <div className="sl-world-content">
          <h2 className="sl-world-title">
            自然がつくり出す、<br />やさしい青の世界。
          </h2>
          <p className="sl-world-text">
            アイスランドのブルーラグーンや、シリカを含む温泉で見られる青。<br />
            それは自然が生み出す光であり、光とミネラルの芸術です。
          </p>
          <a href="/blog/blue-lagoon-world" className="sl-world-btn">
            ブルーラグーンの世界を見る　→
          </a>
        </div>
      </div>

      {/* ⑦ 自宅で体験する — CTA前のブリッジ */}
      <div className="sl-article-section">
        <h2>自宅のお風呂で、青いお湯を体験する。</h2>

        <p>シリカ温泉の乳青色は、成分的に再現できる。</p>
        <p>バスソルトをお湯に溶かすと、透明だったお湯が静かに青へと変わっていく。その瞬間が、バスタイムを特別にする。</p>
        <p>青いお風呂に浸かる体験は、ブルーラグーンまで行かなくても、今夜から始められる。</p>
      </div>

      <p className="sl-closing">
        その青を、今夜のお風呂で。
      </p>
    </>
  )
}
