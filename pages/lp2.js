import Head from 'next/head'
import Link from 'next/link'
import QuoteBlock from '../components/QuoteBlock'
import styles from '../styles/lp2.module.css'

// ============================================================
// Hero Section — FV
// ============================================================
function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <img
          src="/images/bath-surface.jpg"
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
        />
        <div className={styles.heroOverlay} />
      </div>

      <div className={styles.heroContent}>
        <p className={styles.heroEyebrow}>SILICA LAGOON BATH SALT</p>

        <h1 className={styles.heroHeadline}>
          何も塗らなくても、<br />
          潤う肌へ。
        </h1>

        <p className={styles.heroSub}>
          お湯に溶かすだけ。<br />
          入浴10分が、全身トリートメントに変わる。
        </p>

        <div className={styles.heroBadges}>
          <span>シリカ配合</span>
          <span>天然成分100%</span>
          <span>全国送料無料</span>
        </div>

        <a
          href="https://silica-lagoon.company/"
          className={styles.ctaBtn}
        >
          今すぐ試してみる
          <small>定期購入プランあり</small>
        </a>
      </div>
    </section>
  )
}

// ============================================================
// Pain Section — 悩み
// ============================================================
function PainSection() {
  const pains = [
    { icon: '💧', text: '冬になると、いくら保湿しても乾く' },
    { icon: '🪞', text: 'ファンデが粉浮きして、化粧ノリが悪い' },
    { icon: '😮‍💨', text: 'スキンケアを重ねても、なんとなく肌が暗い' },
    { icon: '😴', text: '毎晩コスメを塗るのが、正直しんどい' },
  ]

  return (
    <section className={styles.pain}>
      <div className={styles.inner}>
        <span className={styles.sectionLabel}>SKIN TROUBLE</span>

        <h2 className={styles.painHeadline}>
          その悩み、<br />
          お風呂時間で変わります。
        </h2>

        <ul className={styles.painList}>
          {pains.map((p) => (
            <li key={p.text} className={styles.painItem}>
              <span className={styles.painIcon}>{p.icon}</span>
              <span>{p.text}</span>
            </li>
          ))}
        </ul>

        <p className={styles.painResolve}>
          それ、<br />
          お湯の中で解決できます。
        </p>
      </div>
    </section>
  )
}

// ============================================================
// Benefit Section — ベネフィット
// ============================================================
function BenefitSection() {
  const benefits = [
    '入浴中に、全身の角質が柔らかくなる',
    '翌朝、スキンケアが肌にすっと入るようになる',
    '重ねなくてもいい、本当に潤った肌になる',
  ]

  return (
    <section className={styles.benefit}>
      <div className={styles.inner}>
        <span className={styles.sectionLabel}>WHY IT WORKS</span>

        <h2 className={styles.benefitHeadline}>
          浸かるだけで、<br />
          肌が変わる理由。
        </h2>

        <ul className={`sl-check-list ${styles.benefitCheckList}`}>
          {benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <QuoteBlock
          text={"美容液を塗るより、\nお湯ごと美容液にする。"}
          sub="SILICA LAGOON の考え方"
        />
      </div>
    </section>
  )
}

// ============================================================
// World Section — 世界観・ブランドストーリー
// ============================================================
function WorldSection() {
  return (
    <section className={styles.world}>
      <div className={styles.worldImgWrap}>
        <img
          src="/images/blue-bath.jpg"
          alt="青く輝くシリカバスのお湯"
          loading="lazy"
        />
      </div>

      <div className={styles.worldText}>
        <p className={styles.worldLead}>
          バタフライピーが溶けた瞬間、<br />
          お湯は深い青に変わる。
        </p>
        <p className={styles.worldBody}>
          SILICA LAGOON は「毎晩のお風呂を、美容の時間に変えたい」という
          シンプルな想いから生まれました。<br /><br />
          忙しい日常の中で、スキンケアに費やす時間を減らしながら、
          肌の状態は上げていく。<br /><br />
          その答えが、入浴剤ではなく、<br />
          "浸かる美容液" でした。
        </p>
      </div>
    </section>
  )
}

// ============================================================
// Onsen Section — 温泉発想・成分訴求
// ============================================================
function OnsenSection() {
  const ingredients = [
    {
      img: '/images/color-change.jpg',
      alt: 'バスソルトが溶ける瞬間',
      name: 'Silica / メタケイ酸',
      desc: '温泉地で「美肌の湯」と呼ばれる水質に共通して含まれる成分。角質を柔らかくし、肌のきめを整える作用があるとされています。',
    },
    {
      img: '/images/butterfly-pea.jpg',
      alt: 'バタフライピーの花',
      name: 'Butterfly Pea / バタフライピー',
      desc: 'タイ原産のハーブ由来の青色色素。抗酸化作用のあるアントシアニンを含み、お湯を鮮やかな青に変える。使うたびに、非日常。',
    },
  ]

  return (
    <section className={styles.onsen}>
      <div className={styles.inner}>
        <span className={styles.onsenLabel}>THE SCIENCE</span>

        <h2 className={styles.onsenHeadline}>
          美肌の湯に、<br />
          科学的な根拠がある。
        </h2>

        <div className={styles.onsenGrid}>
          {ingredients.map((item) => (
            <div key={item.name} className={styles.onsenCard}>
              <img src={item.img} alt={item.alt} loading="lazy" />
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <p className={styles.onsenNote}>
          シリカ · ヒアルロン酸 · コラーゲン · スクワラン — 4つの美容成分
        </p>
      </div>
    </section>
  )
}

// ============================================================
// CTA Mid — CTA②
// ============================================================
function CtaMid() {
  return (
    <section className={styles.ctaMid}>
      <div className={styles.ctaMidInner}>
        <img
          src="/images/product-720g-front.jpg"
          alt="SILICA LAGOON BATH SALT 720g"
          className={styles.ctaMidImg}
          loading="lazy"
        />
        <p className={styles.ctaMidName}>SILICA LAGOON BATH SALT</p>
        <p className={styles.ctaMidPrice}>
          ¥3,300<small>（税込・送料込）</small>
        </p>
        <a
          href="https://silica-lagoon.company/"
          className={styles.ctaBtn}
        >
          自宅で、美肌の湯をはじめる
          <small>30日間使用量・全国送料無料</small>
        </a>
      </div>
    </section>
  )
}

// ============================================================
// Review Section — 口コミ
// ============================================================
function ReviewSection() {
  const reviews = [
    {
      attr: '30代 / 乾燥肌',
      text: '冬は腕がガサガサで諦めていたんですが、1週間でしっとりしてきました。お風呂上がりに何も塗らなくていい日が出てきた。',
    },
    {
      attr: '28歳 / 混合肌',
      text: 'ファンデの粉浮きが気になっていたのが、使い始めて2週間くらいからなくなってきた気がします。朝の化粧ノリが全然違う。',
    },
    {
      attr: '35歳 / 敏感肌',
      text: 'においも刺激もなくて敏感肌でも安心して使えました。お風呂が青くなるのが毎日の楽しみになっています。',
    },
  ]

  return (
    <section className={styles.review}>
      <div className={styles.inner}>
        <span className={styles.sectionLabel}>CUSTOMER VOICE</span>

        <h2 className={styles.reviewHeadline}>使った人の声</h2>

        <div className={styles.reviewGrid}>
          {reviews.map((r) => (
            <div key={r.attr} className={styles.reviewCard}>
              <p className={styles.reviewText}>「{r.text}」</p>
              <p className={styles.reviewAttr}>{r.attr}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================
// CTA Bottom — CTA③
// ============================================================
function CtaBottom() {
  return (
    <section className={styles.ctaBottom}>
      <div className={styles.ctaBottomInner}>
        <p className={styles.ctaBottomEyebrow}>SILICA LAGOON</p>

        <h2 className={styles.ctaBottomHeadline}>
          今夜から、お風呂が<br />
          スキンケアになる。
        </h2>

        <p className={styles.ctaBottomSub}>
          毎日10分。それだけで、<br />
          肌の手触りが変わっていく。
        </p>

        <div className={styles.ctaBottomImgRow}>
          <img
            src="/images/product-720g-front.jpg"
            alt="SILICA LAGOON BATH SALT"
            loading="lazy"
          />
          <img
            src="/images/product-spill.jpg"
            alt="バスソルトのテクスチャー"
            loading="lazy"
          />
        </div>

        <p className={styles.ctaBottomPrice}>
          ¥3,300<small>（税込・送料込）</small>
        </p>

        <a
          href="https://silica-lagoon.company/"
          className={styles.ctaBtnWhite}
        >
          今すぐ購入する
          <small>定期購入プランあり / 全国送料無料</small>
        </a>
      </div>
    </section>
  )
}

// ============================================================
// Page — Lp2
// ============================================================
export default function Lp2() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>浸かる美容液 — SILICA LAGOON BATH SALT</title>
        <meta
          name="description"
          content="乾燥・化粧ノリ・肌くすみ。お風呂の10分が、全身美容液になる。シリカ・ヒアルロン酸・コラーゲン配合バスソルト。"
        />
        <link rel="canonical" href="https://silica-lagoon.company/lp2" />
        <meta property="og:title" content="浸かる美容液 — SILICA LAGOON BATH SALT" />
        <meta property="og:description" content="何も塗らなくても、潤う肌へ。" />
        <meta
          property="og:image"
          content="https://silica-lagoon.company/images/ogp.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://silica-lagoon.company/lp2" />
      </Head>

      {/* Header — ロゴのみ（LP離脱防止） */}
      <header className={styles.lpHeader}>
        <span className={styles.lpLogo}>SILICA LAGOON</span>
      </header>

      <main>
        <HeroSection />
        <PainSection />
        <BenefitSection />
        <WorldSection />
        <OnsenSection />
        <CtaMid />
        <ReviewSection />
        <CtaBottom />
      </main>

      {/* Footer — 法的リンクのみ */}
      <footer className={styles.lpFooter}>
        <Link href="/privacy">プライバシーポリシー</Link>
        &nbsp;|&nbsp;
        <Link href="/tokushoho">特定商取引法に基づく表記</Link>
      </footer>
    </>
  )
}
