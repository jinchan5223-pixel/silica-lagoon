import QuoteBlock from '../../components/QuoteBlock'

export default function DrySkinBath() {
  return (
    <>
      <p className="sl-lead">
        乾燥肌の人ほど、<br />
        お風呂に入るたびに肌を傷めている——<br /><br />
        それは入浴法の問題ではなく、<br />
        "お湯そのもの"が問題かもしれない。
      </p>

      <img src="/images/blue-bath.jpg" alt="SILICA LAGOONの青いお湯" className="sl-section-img" />

      <p className="sl-article-lead-sub">
        高価な保湿クリームを塗るより先に、<br />
        毎日15分間浸かっている「お湯」を変える。
      </p>

      <QuoteBlock text={"お風呂は、洗う場所から\n整える場所へ。"} sub="SILICA LAGOON" />

      <section className="sl-article-section">
        <h2>乾燥肌とお湯の関係</h2>
        <p>
          入浴後の「つっぱり感」は、<br />
          お湯によって肌の天然保湿因子が流れ出るサイン。<br /><br />
          熱いお湯・長時間入浴・洗いすぎ——<br />
          これが重なるほど、バリア機能は低下する。<br /><br />
          でも、もうひとつの視点がある。<br />
          お湯に保湿成分が溶け込んでいれば、<br />
          同じ入浴時間が、補給の時間に変わる。
        </p>
      </section>

      <img src="/images/color-change.jpg" alt="バスソルトが青く広がる瞬間" className="sl-section-img" />

      <section className="sl-article-section">
        <h2>浸かる保湿という発想</h2>
        <p>
          シリカ・ヒアルロン酸・コラーゲン・スクワランが<br />
          溶け込んだお湯に全身で浸かること。<br /><br />
          背中、ひじ、かかと、太もも——<br />
          塗るケアでは届かない場所まで、<br />
          まるごと同時にケアできる。<br /><br />
          これが「浸かる保湿」という考え方。
        </p>
      </section>

      <QuoteBlock text={"頑張らなくていい美容を。\nお風呂の時間が、それを叶える。"} sub="SILICA LAGOON" />
    </>
  )
}
