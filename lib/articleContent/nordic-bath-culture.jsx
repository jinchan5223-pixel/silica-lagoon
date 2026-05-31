import QuoteBlock from '../../components/QuoteBlock'

const NW = ({ children }) => <span className="nowrap">{children}</span>

export default function NordicBathCulture() {
  return (
    <>
      {/* ─── リード ─── */}
      <p className="sl-lead">
        ちゃんと休めた日の<br />
        翌朝は、少し違う。<br />
        <br />
        北欧の人は、<br />
        それを知っている。
      </p>

      <QuoteBlock text={"何もしない時間が、\n一番贅沢だ。"} sub="NORDIC SPA CULTURE" />

      {/* ─── 北欧のスパ文化 ─── */}
      <div className="sl-article-section">
        <h2>静けさが、文化になっている国。</h2>
        <p>
          <NW>フィンランド</NW>のサウナは、<br />
          世界で最も知られた<NW>入浴文化</NW>のひとつです。
        </p>
        <p>
          蒸気の中で、ただ座る。<br />
          汗をかく。静かにする。
        </p>
        <p>特別なことは何もしない。</p>
        <p>それだけで、人は整っていく。</p>
        <p>
          <NW>アイスランド</NW>では、<br />
          冷たい外気の中で温かい湯に浸かります。
        </p>
        <p>
          冷と温の対比が、<br />
          人を「今この瞬間」に引き戻してくれる。
        </p>
        <p>
          北欧の<NW>お風呂文化</NW>に共通するのは、<br />
          「何もしない時間」を大切にしていることです。
        </p>
      </div>

      {/* ─── なぜ回復する時間を大切にするのか ─── */}
      <div className="sl-article-section">
        <h2>
          なぜ北欧の人は、<br />
          回復する時間を大切にするのか。
        </h2>
        <p>北欧の冬は長い。</p>
        <p>
          日照時間は短く、<br />
          気温も低い。
        </p>
        <p>
          だからこそ彼らは、<br />
          意識的に心と体を整える時間を<br />
          作ってきました。
        </p>
        <p>それは贅沢ではありません。</p>
        <p>
          毎日を気持ちよく生きるための、<br />
          <NW>リラックス</NW>の習慣です。
        </p>
        <p>
          北欧の<NW>ライフスタイル</NW>の中心にあるのは、<br />
          「回復」への敬意。
        </p>
        <p>
          静かな時間の中でこそ、<br />
          本当の力が戻ってくると<br />
          知っているからです。
        </p>
      </div>

      <img
        src="/images/bath-surface.jpg"
        alt="静かな水面に光が揺れる"
        className="sl-section-img"
        loading="lazy"
      />
      <p className="sl-section-img-caption">静かな時間が、人を回復させる。</p>

      <QuoteBlock text={"静かな空間にいることが、\n何かを取り戻させてくれる。"} sub="SILICA LAGOON" />

      {/* ─── 私たちにも必要かもしれない ─── */}
      <div className="sl-article-section">
        <h2>
          実は、私たちにも<br />
          必要かもしれない。
        </h2>
        <p>仕事。通知。SNS。</p>
        <p>
          現代の暮らしは、<br />
          静かな時間を奪いやすい。
        </p>
        <p>
          気づかないうちに、<br />
          心は情報でいっぱいになっています。
        </p>
        <p>
          だからこそ、<br />
          何もしない時間が<br />
          必要なのかもしれない。
        </p>
        <p>
          北欧の人が大切にしてきたものは、<br />
          遠い文化の話ではありません。
        </p>
        <p>
          私たちの毎日にも必要な、<br />
          静かに回復する<NW>入浴習慣</NW>です。
        </p>
      </div>

      {/* ─── 浴室から始められる ─── */}
      <div className="sl-article-section">
        <h2>
          静かな回復は、<br />
          浴室から始められる。
        </h2>
        <p>遠くの北欧へ行かなくてもいい。</p>
        <p>高級スパへ行かなくてもいい。</p>
        <p>灯りを少し落とす。</p>
        <p>深呼吸する。</p>
        <p>
          そして、<br />
          静かなお湯に浸かる。
        </p>
        <p>
          それだけでも、<br />
          空気は少し変わります。
        </p>
        <p>
          今夜の<NW>お風呂時間</NW>を、<br />
          少しだけ丁寧に過ごしてみる。
        </p>
        <p>
          自宅の浴室が、<br />
          静かな<NW>スパ</NW>の空間に変わる瞬間です。
        </p>
      </div>

      <img
        src="/images/bath-pov.png"
        alt="キャンドルの灯りと乳青色のお湯に浸かる"
        className="sl-section-img"
        loading="lazy"
      />
      <p className="sl-section-img-caption">静けさが、空間をつくる。</p>

      {/* ─── CTA前 ─── */}
      <p className="sl-breath">
        遠く離れた北欧と、<br />
        私たちの日常。
      </p>

      <p className="sl-breath">
        環境は違っても、<br />
        求めているものは<br />
        同じかもしれない。
      </p>

      <p className="sl-breath">
        静かな回復。
      </p>

      <p className="sl-breath">
        それを、<br />
        今日の浴室から始めてみる。
      </p>

      <p className="sl-closing">
        静かに回復する時間を、今夜。
      </p>
    </>
  )
}
