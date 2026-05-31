import QuoteBlock from '../../components/QuoteBlock'

const NW = ({ children }) => <span className="nowrap">{children}</span>

export default function NordicBathCulture() {
  return (
    <>
      {/* ─── リード ─── */}
      <p className="sl-lead">
        最近、<br />
        ちゃんと休めていますか。
      </p>

      <QuoteBlock text={"回復する時間を持つことが、\n最も贅沢な習慣だ。"} sub="NORDIC SPA CULTURE" />

      {/* ─── 北欧の回復文化（30%） ─── */}
      <div className="sl-article-section">
        <h2>
          回復する時間を、<br />
          文化にした国がある。
        </h2>
        <p>
          <NW>フィンランド</NW>には、<br />
          世界で最も知られた<NW>サウナ文化</NW>があります。
        </p>
        <p>
          蒸気の中で座り、汗をかき、<br />
          何も考えない時間を過ごす。
        </p>
        <p>
          <NW>アイスランド</NW>では、<br />
          一日の終わりに温かい湯に浸かることが<br />
          当たり前の習慣です。
        </p>
        <p>
          北欧の<NW>お風呂文化</NW>の本質は、<br />
          清潔さではありません。
        </p>
        <p>回復です。</p>
        <p>
          長い冬、短い日照時間。<br />
          厳しい環境だからこそ、<br />
          意識的に心と体を整える時間を<br />
          習慣にしてきました。
        </p>
        <p>
          それは贅沢ではなく、<br />
          毎日を気持ちよく生きるための<br />
          <NW>ウェルネス</NW>の習慣です。
        </p>
      </div>

      <img
        src="/images/bath-surface.jpg"
        alt="穏やかな水面に光が揺れる"
        className="sl-section-img"
        loading="lazy"
      />
      <p className="sl-section-img-caption">回復は、習慣になる。</p>

      {/* ─── 私たちにも必要（70%開始） ─── */}
      <div className="sl-article-section">
        <h2>
          実は、<br />
          私たちにも必要かもしれない。
        </h2>
        <p>
          北欧の人だけが、<br />
          疲れているわけではありません。
        </p>
        <p>
          私たちもまた、<br />
          たくさんの情報の中で生きています。
        </p>
        <p>仕事。</p>
        <p>通知。</p>
        <p>SNS。</p>
        <p>考えることは、増え続ける。</p>
        <p>
          気づかないうちに、<br />
          頭の中は常に何かで埋まっています。
        </p>
        <p>
          だからこそ、<br />
          意識的に何もしない時間が<br />
          必要なのかもしれない。
        </p>
        <p>
          北欧の人たちが<br />
          <NW>ライフスタイル</NW>の中心に置いてきたもの。
        </p>
        <p>
          それは、遠い国の文化ではなく、<br />
          私たちにも必要な<NW>リラックス</NW>の習慣です。
        </p>
      </div>

      <QuoteBlock text={"疲れに気づいた日が、\n回復の始まりだ。"} sub="SILICA LAGOON" />

      {/* ─── 回復とは ─── */}
      <div className="sl-article-section">
        <h2>
          回復とは、<br />
          何かをすることではない。
        </h2>
        <p>もっと頑張ること。</p>
        <p>もっと学ぶこと。</p>
        <p>もっと効率化すること。</p>
        <p>そうではなく、</p>
        <p>立ち止まること。</p>
        <p>深呼吸すること。</p>
        <p>温かいお湯に、浸かること。</p>
        <p>
          回復とは、<br />
          足すことではなく、<br />
          取り戻すことなのかもしれません。
        </p>
        <p>
          何かを始めなくていい。<br />
          何かを変えなくていい。
        </p>
        <p>
          ただ、今日の<NW>お風呂時間</NW>を<br />
          少しだけ大切にしてみる。
        </p>
        <p>
          それだけで、<br />
          明日の自分が少し違うかもしれません。
        </p>
      </div>

      {/* ─── 浴室から始められる ─── */}
      <div className="sl-article-section">
        <h2>
          今日の浴室から、<br />
          始められる。
        </h2>
        <p>
          遠くの北欧<NW>スパ</NW>へ<br />
          行かなくてもいい。
        </p>
        <p>
          回復する時間は、<br />
          どこか特別な場所にあるのではなく、<br />
          毎日の暮らしの中にあります。
        </p>
        <p>
          今夜のお風呂を、<br />
          少しだけ丁寧に過ごしてみる。
        </p>
        <p>
          それだけで、<br />
          いつもの浴室が<br />
          回復の場所に変わります。
        </p>
        <p>
          自宅の浴室を、<br />
          自分だけの<NW>自宅スパ</NW>にする。
        </p>
        <p>
          大げさなことではありません。<br />
          今夜からできる、小さな習慣です。
        </p>
      </div>

      <img
        src="/images/bath-pov.png"
        alt="キャンドルの灯りと乳青色のお湯に浸かる"
        className="sl-section-img"
        loading="lazy"
      />
      <p className="sl-section-img-caption">回復は、今夜から始められる。</p>

      {/* ─── CTA前 ─── */}
      <p className="sl-breath">
        遠い北欧の話ではない。
      </p>

      <p className="sl-breath">
        回復する時間は、<br />
        今日から始められる。
      </p>

      <p className="sl-breath">
        灯りを少し落とす。<br />
        スマホを置く。<br />
        そして、お湯に浸かる。
      </p>

      <p className="sl-breath">
        その時間が、<br />
        明日の自分を<br />
        整えてくれるかもしれない。
      </p>

      <p className="sl-closing">
        回復する時間を、今夜のお風呂で。
      </p>
    </>
  )
}
