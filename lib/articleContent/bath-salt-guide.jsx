import QuoteBlock from '../../components/QuoteBlock'

export default function BathSaltGuide() {
  return (
    <>
      <p className="sl-lead">
        今日は、<br />
        お風呂がちょっと楽しみ。<br />
        <br />
        そんな夜がある。
      </p>

      <p className="sl-breath">
        お湯を変えるだけで、<br />
        夜の空気まで<br />
        変わることがある。<br />
        <br />
        それを知ってから、<br />
        お風呂の時間が<br />
        少し好きになった。
      </p>

      <img src="/images/butterfly-pea.jpg" alt="バタフライピーの青がお湯に溶け込む" className="sl-section-img" loading="lazy" />

      <QuoteBlock text={"今日のお風呂、\nちょっと楽しみ。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        ミルキーブルーのお湯に<br />
        浸かると、<br />
        <br />
        肌より先に、<br />
        気持ちがほどける。
      </p>

      <img src="/images/quiet-bath-2.png" alt="キャンドルの光に包まれたミルキーなお湯" className="sl-section-img" loading="lazy" />

      <QuoteBlock text={"深呼吸したくなる、\nお風呂へ。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        お風呂上がりの静けさが、<br />
        一日の空気を<br />
        整えてくれる。<br />
        <br />
        そんな夜を、<br />
        毎日にする。
      </p>

      <img src="/images/after-bath-night.png" alt="入浴後の静かな夜の余韻" className="sl-section-img" loading="lazy" />

      <QuoteBlock text={"お湯が変わると、\n夜の静けさまで変わる。"} sub="SILICA LAGOON" />

      <p className="sl-closing">
        お湯を変えるだけで、<br />
        夜は少し<br />
        やさしくなる。
      </p>
    </>
  )
}
