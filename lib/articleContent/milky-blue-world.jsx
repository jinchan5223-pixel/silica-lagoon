import QuoteBlock from '../../components/QuoteBlock'

const NW = ({ children }) => <span className="nowrap">{children}</span>

export default function MilkyBlueWorld() {
  return (
    <>
      {/* ─── リード ─── */}
      <p className="sl-lead">
        深海の青でも、空の青でもない。<br />
        やわらかく白が溶け込んだ、<NW>乳青色</NW>の水。<br />
        見た瞬間に、気づけば息をのんでいる。<br />
        静かになれる色が、ここにある。
      </p>

      <QuoteBlock text={"乳青色に包まれた瞬間、\n静かになれる。"} sub="SILICA LAGOON" />

      {/* ─── ① ミルキーブルーとは ─── */}
      <div className="sl-article-section">
        <h2><NW>ミルキーブルー</NW>とは何か。</h2>

        <p><NW>ミルキーブルー</NW>とは、青に白が溶け込んだような、やわらかい<NW>乳青色</NW>のこと。</p>
        <p>深い青のような強さはなく、白のような無機質さもない。</p>
        <p>その中間にある、曖昧でやわらかい色が、見る人に不思議な安心感を与えます。</p>
        <p><NW>ブルーラグーン</NW>など北欧の<NW>青い温泉</NW>に多く見られ、世界中の人を惹きつけてきた色です。</p>
      </div>

      {/* ─── ② なぜ乳青色に惹かれるのか ─── */}
      <div className="sl-article-section">
        <h2>なぜ人は、<NW>乳青色</NW>に惹かれるのか。</h2>

        <p>青という色は、人の感覚に静かに働きかけます。</p>
        <p>空の青、海の青、水の青。人は古くから、青い何かに向かうと静かになってきました。</p>
        <p><NW>ミルキーブルー</NW>はその中でも、特別なやわらかさを持つ色です。</p>
        <p>強すぎず、冷たすぎない。その絶妙な中間性が、疲れた感覚にそっと届きます。</p>
        <p>見ているだけで深呼吸したくなる。そういう色が、<NW>乳青色</NW>です。</p>
      </div>

      <img
        src="/images/dissolving.png"
        alt="ミルキーブルーの乳青色バスソルトがお湯に溶ける瞬間"
        className="sl-section-img"
        loading="lazy"
      />
      <p className="sl-section-img-caption"><NW>乳青色</NW>が広がる、その瞬間。</p>

      <p className="sl-breath">
        青に触れると、<br />人は静かになれる。
      </p>

      {/* ─── ③ 色が体験を変える ─── */}
      <div className="sl-article-section">
        <h2>お湯の色が変わると、体験が変わる。</h2>

        <p>同じ浴室でも、お湯の色が変わるだけで、空気まで変わったように感じます。</p>
        <p>それは演出ではなく、色が本当に持っている力です。</p>
        <p>白いお湯が<NW>乳青色</NW>に変わる瞬間。浴室の空気が、静かになる気がする。</p>
        <p><NW>青いお風呂</NW>という体験は、湯温や香りとは別の次元で、心に届きます。</p>
        <p>お風呂の癒しを「待つ」のではなく、色によって「つくる」。そういう感覚です。</p>
      </div>

      <QuoteBlock text={"色が、空間をつくる。\n空間が、体験をつくる。"} sub="SILICA LAGOON" />

      {/* ─── ④ 自宅で味わう ─── */}
      <div className="sl-article-section">
        <h2>自宅で味わう、<NW>ミルキーブルー</NW>の世界。</h2>

        <p><NW>ブルーラグーン</NW>のような<NW>青い温泉</NW>は、特別な場所にしかないと思っていました。</p>
        <p>でも今は、自宅の浴室で<NW>ミルキーブルー</NW>を体験できます。</p>
        <p><NW>青い入浴剤</NW>をお湯に溶かすと、透明だったお湯が静かに<NW>乳青色</NW>へと変わっていく。</p>
        <p>その瞬間から、いつものお風呂が別の空間になります。</p>
        <p>リラックスしたい夜に、お風呂の癒しを少し特別にする。それだけでいい。</p>
      </div>

      <p className="sl-breath">
        あの<NW>乳青色</NW>を、<br />自宅のお風呂で。
      </p>

      <p className="sl-closing">
        毎日のお風呂を、少し特別な時間へ。
      </p>
    </>
  )
}
