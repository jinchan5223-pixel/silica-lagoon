import QuoteBlock from '../../components/QuoteBlock'

const NW = ({ children }) => <span className="nowrap">{children}</span>

export default function WhyBlueWater() {
  return (
    <>
      {/* ─── ① リード ─── */}
      <p className="sl-lead">
        なぜ水は、<br />
        青く見えるのか。
      </p>

      {/* ─── ② 検索意図へ即答（SEO・感情なし・簡潔に） ─── */}
      <div className="sl-answer">
        <p className="sl-answer-a">
          水が青く見える主な理由は、<br />
          <NW>光の散乱</NW>です。
        </p>
        <p className="sl-answer-desc">
          水は青い光を比較的残しやすいため、<br />
          私たちの目には青く見えます。
        </p>
      </div>

      {/* ─── 前半：SEO（物理現象のみ・感情を混ぜない） ─── */}
      <div className="sl-article-section">
        <h2>水が青く見える仕組み。</h2>
        <p>太陽光には、さまざまな色の光が含まれています。</p>
        <p>
          水は赤い光を吸収しやすく、<br />
          青い光を残しやすい性質があります。
        </p>
        <p>
          水中での<NW>光の反射</NW>も加わり、<br />
          より鮮やかな青として認識されます。
        </p>
        <p>
          海や湖が深いほど赤や黄の光が吸収され、<br />
          青だけが残る。
        </p>
        <p>これが「<NW>青い水</NW>の理由」です。</p>
      </div>

      {/* ─── ③ 世界観への橋渡し ─── */}
      <div className="sl-article-section">
        <p>
          しかし、<br />
          人が<NW>青い水</NW>に惹かれる理由は、<br />
          物理現象だけではありません。
        </p>
      </div>

      {/* ─── ④ なぜ人は青い水に惹かれるのか ─── */}
      <div className="sl-article-section">
        <h2>なぜ人は、<NW>青い水</NW>に惹かれるのか。</h2>
        <p>海。湖。温泉。</p>
        <p>人は昔から、<NW>青い水</NW>に惹かれてきました。</p>
        <p><NW>青い水</NW>の前に立つと、思考が静かになる。</p>
        <p>呼吸が、自然と深くなる。</p>
        <p>
          それは、青という色が<br />
          感覚に直接働きかけているからです。
        </p>
        <p>静けさ。透明感。安心感。</p>
        <p>
          どこか現実から離れたような非日常。<br />
          そして、深呼吸したくなる感覚。
        </p>
        <p>
          赤や黄が感情を高ぶらせるのに対して、<br />
          青は心を鎮めます。
        </p>
        <p>
          だから私たちは、<NW>青い水</NW>を見ると、<br />
          入りたくなるのです。
        </p>
      </div>

      <img
        src="/images/cand-sunlight-water.jpg"
        alt="光が差し込む青い水面"
        className="sl-section-img"
        loading="lazy"
      />
      <p className="sl-section-img-caption">青い水の前で、息がゆっくりになる。</p>

      <QuoteBlock text={"青い水に浸かることは、\n自分に戻ることだ。"} sub="SILICA LAGOON" />

      {/* ─── ⑤ ブルーラグーンが美しく見える理由 ─── */}
      <div className="sl-article-section">
        <h2>
          <NW>ブルーラグーン</NW>が、<br />
          美しく見える理由。
        </h2>
        <p>
          世界中の人を惹きつける、<br />
          アイスランドの<NW>ブルーラグーン</NW>。
        </p>
        <p>その美しさの秘密は、<NW>乳青色</NW>にあります。</p>
        <p>
          地熱で温められた水にシリカが溶け込み、<br />
          光が拡散されることで<NW>乳青色</NW>が生まれる。
        </p>
        <p>
          深い青でも、白でもない。<br />
          <NW>ミルキーブルー</NW>と呼ばれるやわらかい色。
        </p>
        <p>その幻想的な色が、見る人の気持ちを静かにさせます。</p>
      </div>

      <img
        src="/images/blue-lagoon.jpg"
        alt="アイスランド ブルーラグーンの乳青色の湯"
        className="sl-section-img"
        loading="lazy"
      />
      <p className="sl-section-img-caption">
        <NW>ブルーラグーン</NW>の<NW>乳青色</NW>。光とシリカが生み出す色。
      </p>

      {/* ─── ⑥ 青い水が空間を変える ─── */}
      <div className="sl-article-section">
        <h2><NW>青い水</NW>が、空間を変える。</h2>
        <p>透明だったお湯が、<NW>乳青色</NW>へ変わる。</p>
        <p>それだけで、いつもの浴室は少し違う場所になります。</p>
        <p><NW>青い水</NW>には、空間そのものを変える力があります。</p>
        <p>
          湯温でも、香りでも、照明でもなく、<br />
          色が空間の印象をつくる。
        </p>
        <p>それが<NW>青い水</NW>の持つ、静かな力です。</p>
      </div>

      {/* ─── ⑦ 自宅で味わう青の世界 ─── */}
      <div className="sl-article-section">
        <h2>自宅で味わう、青の世界。</h2>
        <p>
          <NW>ブルーラグーン</NW>のような<NW>青い温泉</NW>は、<br />
          遠い場所にあると思っていました。
        </p>
        <p>
          でも今は、お湯に溶かすだけで、<br />
          浴室が<NW>乳青色</NW>の空間に変わります。
        </p>
        <p>
          <NW>青いお風呂</NW>に浸かる体験は、<br />
          入った瞬間から空気が変わる感覚があります。
        </p>
        <p>
          <NW>青い水</NW>が持つ静けさを、<br />
          今夜のお風呂で味わってみてください。
        </p>
      </div>

      <img
        src="/images/model-bath.jpg"
        alt="乳青色のお湯に浸かる入浴シーン"
        className="sl-section-img"
        loading="lazy"
      />
      <p className="sl-section-img-caption">自宅の浴室が、静かな空間に変わる。</p>

      {/* ─── ⑧ CTA ─── */}
      <p className="sl-breath">
        青い水がつくる、<br />静かな時間を。
      </p>

      <p className="sl-closing">
        いつもの浴室を、少し特別な空間へ。
      </p>
    </>
  )
}
