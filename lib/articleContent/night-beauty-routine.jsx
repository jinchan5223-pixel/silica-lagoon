import QuoteBlock from '../../components/QuoteBlock'

export default function NightBeautyRoutine() {
  return (
    <>
      <p className="sl-lead">
        朝のメイクが、<br />
        昨夜のお風呂で変わっていた。
      </p>

      <img src="/images/bath-texture.jpg" alt="夜のお風呂タイム" className="sl-section-img" />

      <QuoteBlock text={"夜の美容習慣が、\n翌朝の化粧ノリを決める。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        化粧ノリの悪さは、<br />
        メイク技術の問題より<br />
        「下地の肌状態」の問題であることがほとんど。<br />
        乾燥・ざらつき・毛穴——<br />
        これらはすべて、夜の肌ケアで変えられます。
      </p>

      <img src="/images/blue-bath.jpg" alt="保湿成分が溶けたお湯" className="sl-section-img" />

      <QuoteBlock text={"朝のメイクを変えたいなら、\n夜のお風呂から始める。"} sub="SILICA LAGOON" />

      <p className="sl-breath">
        入浴で体温が上がり毛穴が開いた状態は、<br />
        スキンケアの浸透がもっとも高まるタイミング。<br />
        さらに、シリカやヒアルロン酸が溶けたお湯に浸かることで<br />
        角質層が十分な水分を抱えた状態になります。<br />
        その夜の肌が、翌朝の化粧ノリをつくります。
      </p>

      <QuoteBlock text={"夜に整う肌が、\n朝のメイクを楽にする。"} sub="SILICA LAGOON" />
    </>
  )
}
