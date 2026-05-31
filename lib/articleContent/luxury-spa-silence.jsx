import QuoteBlock from '../../components/QuoteBlock'

const NW = ({ children }) => <span className="nowrap">{children}</span>

export default function LuxurySpasilence() {
  return (
    <>
      {/* ─── リード ─── */}
      <p className="sl-lead">
        静けさの中に、<br />
        身を置いたことがありますか。
      </p>

      <QuoteBlock text={"贅沢とは、静かに\n何かに包まれることだ。"} sub="SILICA LAGOON" />

      {/* ─── 静けさ ─── */}
      <div className="sl-article-section">
        <h2>一流のスパに共通するもの。</h2>
        <p>バリ、アイスランド、モルディブ。</p>
        <p>
          場所は違っても、<br />
          一流のスパには共通する空気があります。
        </p>
        <p>それは、静けさです。</p>
        <p>音が消えると、人は現実から離れる。</p>
        <p>静けさがあると、人は自分に戻れる。</p>
        <p>一流のスパは、それを知っています。</p>
      </div>

      {/* ─── 光 ─── */}
      <div className="sl-article-section">
        <h2>光が、時間をつくる。</h2>
        <p>柔らかな光は、時間の流れを遅くします。</p>
        <p>強い光は現実を見せる。</p>
        <p>柔らかな光は、感覚を解放する。</p>
        <p>水面に揺れる光の反射。細く差し込む自然光。</p>
        <p>
          一流のスパが間接照明を選ぶのは、<br />
          光で「別の時間」をつくっているからです。
        </p>
      </div>

      {/* ─── 余白 ─── */}
      <div className="sl-article-section">
        <h2>引き算の贅沢。</h2>
        <p>一流のスパは、何かを足すのではない。</p>
        <p>何かを減らしています。</p>
        <p>音を減らす。</p>
        <p>光を減らす。</p>
        <p>情報を減らす。</p>
        <p>だから、心に余白が生まれる。</p>
        <p>
          <NW>ラグジュアリー</NW>とは、<br />
          余白を管理することでもあります。
        </p>
      </div>

      <QuoteBlock text={"静かな空間が、\n人を変える。"} sub="SILICA LAGOON" />

      {/* ─── なぜ人は静かな空間に癒されるのか ─── */}
      <div className="sl-article-section">
        <h2>なぜ人は、静かな空間に癒されるのか。</h2>
        <p>
          私たちは毎日、<br />
          たくさんの音と情報に囲まれています。
        </p>
        <p>通知。会話。SNS。</p>
        <p>
          静かな空間に入ると、<br />
          そのすべてが少し遠くなる。
        </p>
        <p>思考が静かになる。呼吸が深くなる。</p>
        <p>だから人は、静寂に癒されるのです。</p>
      </div>

      <img
        src="/images/quiet-bath.png"
        alt="静かな乳青色のお湯"
        className="sl-section-img"
        loading="lazy"
      />
      <p className="sl-section-img-caption">静けさが、空間をつくる。</p>

      {/* ─── LP3橋渡し ─── */}
      <div className="sl-article-section">
        <h2>静けさは、つくれる。</h2>
        <p>
          海外の<NW>ラグジュアリースパ</NW>へ行かなくても、<br />
          静けさを感じることはできます。
        </p>
        <p>光を整える。</p>
        <p>音を整える。</p>
        <p>そして、色を整える。</p>
        <p>
          <NW>乳青色</NW>のお湯は、<br />
          浴室の空気を静かに変えてくれます。
        </p>
        <p>
          自宅の浴室も、光と音と色を整えれば、<br />
          静かな<NW>ラグジュアリー</NW>の空間になれます。
        </p>
      </div>

      <img
        src="/images/dissolving-scene.png"
        alt="乳青色に溶けていく入浴剤"
        className="sl-section-img"
        loading="lazy"
      />
      <p className="sl-section-img-caption">色が、空間の空気を変える。</p>

      {/* ─── CTA ─── */}
      <p className="sl-breath">
        静けさは、<br />
        遠くへ行かなくても手に入る。
      </p>

      <p className="sl-breath">
        今夜の浴室を、<br />
        少しだけ特別な場所へ。
      </p>

      <p className="sl-closing">
        あの<NW>乳青色</NW>を、自宅のお風呂で。
      </p>
    </>
  )
}
