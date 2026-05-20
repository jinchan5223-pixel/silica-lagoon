import QuoteBlock from '../../components/QuoteBlock'

export default function BeautyWomenBath() {
  return (
    <>
      <p className="sl-lead">
        美容に詳しい女性ほど、<br />
        お風呂時間を丁寧に過ごしている。<br /><br />
        それは、肌が変わることを<br />
        知っているから。
      </p>

      <img src="/images/bath-texture.jpg" alt="乳青色の水面" className="sl-section-img" />

      <p className="sl-article-lead-sub">
        スキンケアの前に、入浴を整える。<br />
        それが、美容賢者たちの共通習慣。
      </p>

      <section className="sl-article-section">
        <h2>バスタイムにこだわる理由</h2>
        <p>
          顔だけでなく、全身の肌を同時にケアできる。<br />
          そのことに気づいている女性ほど、<br />
          お風呂時間を大切にしている。<br /><br />
          入浴は、全身美容でもっともコスパが高い習慣。<br />
          20分で、全身の肌に美容成分が届く。
        </p>
      </section>

      <QuoteBlock text={"美容を知る女性ほど、\nバスタイムにこだわる。"} sub="SILICA LAGOON" />

      <div className="sl-check-box">
        <p className="sl-check-box-title">美容賢者が実践するバスタイム</p>
        <ul className="sl-check-list">
          <li>38〜40度のお湯に20分ゆっくり浸かる</li>
          <li>シリカ・保湿成分入りのバスソルトを使う</li>
          <li>スマホを置いて、リラックスに集中する</li>
          <li>上がったら3分以内にスキンケアをする</li>
        </ul>
      </div>

      <img src="/images/blue-bath.jpg" alt="SILICA LAGOONの青いお湯" className="sl-section-img" />

      <section className="sl-article-section">
        <h2>日常の中の、贅沢な時間</h2>
        <p>
          高級スパに行かなくても、<br />
          自宅のお風呂を「整う場所」にできる。<br /><br />
          SILICA LAGOONのバスソルトを溶かすと、<br />
          浴槽がミルキーブルーに染まる。<br />
          視覚から非日常が始まる、<br />
          そのひとときが、肌と気持ちを整える。
        </p>
      </section>

      <QuoteBlock text={"毎晩のお風呂を、\n自分への贈り物にする。"} sub="SILICA LAGOON" />
    </>
  )
}
