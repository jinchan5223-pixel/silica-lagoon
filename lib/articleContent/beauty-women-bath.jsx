import QuoteBlock from '../../components/QuoteBlock'

export default function BeautyWomenBath() {
  return (
    <>
      <p className="sl-lead">
        美容を知る女性ほど、<br />
        お風呂時間を丁寧に過ごしている。
      </p>

      <img src="/images/bath-texture.jpg" alt="乳青色の水面テクスチャー" className="sl-section-img" />

      <QuoteBlock text={"美容を知る女性ほど、\nバスタイムにこだわる。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        20分で、全身の肌に美容成分が届く。<br />
        入浴は、もっともコスパの高い全身美容。
      </p>

      <img src="/images/blue-bath.jpg" alt="SILICA LAGOONの青いお湯" className="sl-section-img" />

      <QuoteBlock text={"高級スパに行かなくても、\n自宅の浴室が整う場所になる。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        バスソルトを溶かすと、浴槽がミルキーブルーに染まる。<br />
        視覚から非日常が始まる、そのひととき。
      </p>

      <QuoteBlock text={"毎晩のお風呂を、\n自分への贈り物にする。"} sub="SILICA LAGOON" />
    </>
  )
}
