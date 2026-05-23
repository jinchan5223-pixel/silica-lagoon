import QuoteBlock from '../../components/QuoteBlock'

export default function NightBeautyRoutine() {
  return (
    <>
      <p className="sl-lead">
        夜、お風呂の湯気が<br />
        残る部屋で、<br />
        やっと一日が<br />
        終わる。
      </p>

      <p className="sl-breath">
        美容より先に、<br />
        気持ちをほどく夜が<br />
        あっていい。<br />
        <br />
        ちゃんと休めた夜ほど、<br />
        翌朝の肌が<br />
        やわらかい。
      </p>

      <img src="/images/relax-night.png" alt="夜のやわらかな光の中でくつろぐ" className="sl-section-img" loading="lazy" />

      <QuoteBlock text={"美容より先に、\nちゃんと休む。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        シリカが溶けた<br />
        お湯に浸かると、<br />
        <br />
        眠りながら<br />
        肌が静かに<br />
        整っていく。
      </p>

      <img src="/images/relax-night-2.png" alt="眠る前の静かな夜の時間" className="sl-section-img" loading="lazy" />

      <QuoteBlock text={"夜のお風呂が、\n明日の肌を整える。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        一日を静かに<br />
        終える時間。<br />
        <br />
        それだけで、<br />
        十分だった。
      </p>

      <img src="/images/relax-night-3.png" alt="白い寝具の中で深く眠る夜" className="sl-section-img" loading="lazy" />

      <QuoteBlock text={"眠る前の肌が、\n明日の朝になる。"} sub="SILICA LAGOON" />

      <p className="sl-closing">
        夜のお風呂が、<br />
        明日の自分を<br />
        静かに整えていく。
      </p>
    </>
  )
}
