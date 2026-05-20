import QuoteBlock from '../../components/QuoteBlock'

export default function MakeupBath() {
  return (
    <>
      <p className="sl-lead">
        化粧ノリが悪い日は、<br />
        その朝ではなく、前の夜に原因がある。<br /><br />
        お風呂時間が、翌朝のベースを作っている。
      </p>

      <img src="/images/bath-texture.jpg" alt="乳青色の水面テクスチャー" className="sl-section-img" />

      <p className="sl-article-lead-sub">
        肌の土台は、スキンケアではなく<br />
        入浴中につくられる。
      </p>

      <QuoteBlock text={"翌朝の肌は、\n昨夜のバスタイムでできている。"} sub="SILICA LAGOON" />

      <section className="sl-article-section">
        <h2>化粧ノリを決める「肌の土台」</h2>
        <p>
          ファンデーションの仕上がりは、<br />
          肌の水分量・キメ・毛穴の状態で決まる。<br /><br />
          これらはすべて、入浴中のケアで変えられる。<br />
          化粧ノリに悩むなら、夜のバスタイムを見直してほしい。
        </p>
      </section>

      <div className="sl-check-box">
        <p className="sl-check-box-title">化粧ノリを上げるバスタイム習慣</p>
        <ul className="sl-check-list">
          <li>38〜40度のぬるめのお湯でゆっくり浸かる</li>
          <li>保湿成分入りのバスソルトを使う</li>
          <li>洗顔は最後に、ぬるま湯で</li>
          <li>上がったら3分以内に保湿する</li>
        </ul>
      </div>

      <img src="/images/blue-bath.jpg" alt="SILICA LAGOONの青いお湯" className="sl-section-img" />

      <section className="sl-article-section">
        <h2>入浴剤が、翌朝の肌を変える</h2>
        <p>
          シリカ・ヒアルロン酸配合のバスソルトを使うと、<br />
          入浴後の肌のもちもち感が違う。<br /><br />
          翌朝、化粧ノリが明らかに変わった——<br />
          そう感じる方が多い理由がここにある。
        </p>
      </section>

      <QuoteBlock text={"今夜のバスタイムが、\n明日の顔をつくる。"} sub="SILICA LAGOON" />
    </>
  )
}
