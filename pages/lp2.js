import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/lp2.module.css'

// ============================================================
// HEADER
// ============================================================
function LpHeader() {
  return (
    <header className={styles.lpHeader}>
      <span className={styles.lpLogo}>SILICA LAGOON</span>
      <a href="https://silica-lagoon.company/" className={styles.headerCta}>
        今すぐ購入する 🛒
      </a>
    </header>
  )
}

// ============================================================
// HERO
// ============================================================
function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* 背景画像 */}
      <div className={styles.heroBg}>
        <img
          src="/images/hero-bath.png"
          alt="シリカラグーン 入浴シーン"
          loading="eager"
          fetchPriority="high"
        />
        <div className={styles.heroOverlay} />
      </div>

      {/* テキストコンテンツ */}
      <div className={styles.heroContent}>
        <span className={styles.heroEyebrow}>SILICA LAGOON BATH SALT</span>

        <p className={styles.heroLeadSmall}>お風呂上がり、</p>
        <h1 className={styles.heroHeadline}>
          何も塗らなくても<br />
          <em>潤う</em>肌へ。
        </h1>

        <div className={styles.heroDivider} />
        <p className={styles.heroSubCopy}>"塗る"から"浸かる"へ。</p>

        <p className={styles.heroSub}>
          美容液のようなお湯で、<br />
          肌を整える新習慣。
        </p>

        {/* 信頼バッジ */}
        <div className={styles.heroBadges}>
          {[
            { icon: '💎', text: '日本初*\nシリカ×\n温泉発想' },
            { icon: '✨', text: '美容成分\n配合' },
            { icon: '♨️', text: '温泉\n発想' },
          ].map((b) => (
            <div key={b.text} className={styles.heroBadge}>
              <span className={styles.badgeIcon}>{b.icon}</span>
              <span className={styles.badgeText} style={{ whiteSpace: 'pre-line' }}>{b.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero底部CTA */}
      <div className={styles.heroCtaWrap}>
        <a href="https://silica-lagoon.company/" className={styles.heroCta}>
          今すぐ、うるおう体験をはじめる
          <span className={styles.heroCtaArrow}>›</span>
        </a>
        <p className={styles.heroNote}>* 自社調べ（シリカを配合した入浴剤として）</p>
      </div>
    </section>
  )
}

// ============================================================
// PAIN — 悩み共感
// ============================================================
function PainSection() {
  const pains = [
    { icon: '😮‍💨', text: 'お風呂上がりに\nすぐ乾燥して\nしまう' },
    { icon: '💧', text: 'スキンケアを\nしても\n追いつかない' },
    { icon: '🪞', text: '化粧ノリが悪く\nメイクが\n決まらない' },
    { icon: '🌫️', text: '透明感がなく\nくすみが\n気になる' },
  ]

  return (
    <section className={styles.painSection}>
      <div className={styles.sectionInner}>
        <span className={styles.sectionEyebrow}>SKIN TROUBLE</span>
        <h2 className={styles.sectionTitle}>こんなお悩み<br />ありませんか？</h2>
        <div className={styles.sectionDivider} />

        <div className={styles.painGrid}>
          {pains.map((p) => (
            <div key={p.text} className={styles.painCard}>
              <span className={styles.painCardIcon}>{p.icon}</span>
              <p className={styles.painCardText} style={{ whiteSpace: 'pre-line' }}>{p.text}</p>
            </div>
          ))}
        </div>

        <p className={styles.painResolve}>
          そのお悩み、<br />
          <em>お風呂時間で変わります。</em>
        </p>
      </div>
    </section>
  )
}

// ============================================================
// BENEFIT — ベネフィット
// ============================================================
function BenefitSection() {
  const benefits = [
    {
      img: '/images/bath-surface.jpg',
      alt: '水面',
      label: 'しっとり続く',
      strong: '潤い肌',
    },
    {
      img: '/images/bath-texture.jpg',
      alt: '入浴イメージ',
      label: '化粧ノリが変わる',
      strong: '朝の肌',
    },
    {
      img: '/images/blue-bath.jpg',
      alt: 'シリカのお湯',
      label: '触りたくなる',
      strong: '肌質感',
    },
  ]

  return (
    <section className={styles.benefitSection}>
      <div className={styles.sectionInner}>
        <span className={styles.sectionEyebrow}>BEAUTY CHANGE</span>
        <h2 className={styles.benefitLead}>
          浸かるだけで、<br />うれしい変化を。
        </h2>
        <p className={styles.benefitSub}>毎日10分のバスタイムで、肌が応えはじめる。</p>

        <div className={styles.benefitGrid}>
          {benefits.map((b) => (
            <div key={b.strong} className={styles.benefitItem}>
              <div className={styles.benefitCircle}>
                <img src={b.img} alt={b.alt} loading="lazy" />
              </div>
              <div className={styles.benefitLabel}>
                {b.label}
                <strong className={styles.benefitLabelStrong}>{b.strong}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================
// QUOTE
// ============================================================
function QuoteSection() {
  return (
    <section className={styles.quoteSection}>
      <div className={styles.quoteInner}>
        <span className={styles.quoteMark}>"</span>
        <p className={styles.quoteText}>
          {`何を塗るかではなく、\nどう整えるか。`}
        </p>
        <p className={styles.quoteSub}>SILICA LAGOON</p>
      </div>
    </section>
  )
}

// ============================================================
// PRODUCT — 美容液のようなお湯
// ============================================================
function ProductSection() {
  const forWhom = [
    '乾燥が気になる方',
    '透明感のある肌を目指したい方',
    'スキンケアの効果を高めたい方',
    '肌にやさしいケアを求める方',
  ]

  return (
    <section className={styles.productSection}>
      {/* 画像 */}
      <div className={styles.productImgWrap}>
        <img src="/images/color-change.jpg" alt="バスソルトが溶ける瞬間" loading="lazy" />
        <div className={styles.productImgOverlay} />
      </div>

      <div className={styles.productCopy}>
        <span className={styles.sectionEyebrow}>THE SCIENCE</span>
        <h2 className={styles.productHeadline}>
          美容液のようなお湯で、<br />
          肌をやさしく整える。
        </h2>
        <p className={styles.productBody}>
          メタケイ酸（温泉法基準の美肌成分）に着想。<br />
          "美肌の湯"と呼ばれる温泉の<br />
          成分基準をヒントに設計しました。
        </p>

        <div className={styles.ingredientBadges}>
          {['メタケイ酸\n(温泉法基準美肌成分)', 'シリカ\n(保湿サポート)', '厳選した\n美容成分'].map((b) => (
            <span key={b} className={styles.ingredientBadge} style={{ whiteSpace: 'pre-line', textAlign: 'center', lineHeight: 1.4, fontSize: '10px' }}>
              {b}
            </span>
          ))}
        </div>

        <span className={styles.forWhomTitle}>こんな方に選ばれています</span>
        <ul className={styles.forWhomList}>
          {forWhom.map((item) => (
            <li key={item} className={styles.forWhomItem}>
              <span className={styles.forWhomCheck}>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className={styles.forWhomNote}>
          ※個人の感想であり、効果を保証するものではありません。
        </p>
      </div>
    </section>
  )
}

// ============================================================
// REVIEW — 口コミ
// ============================================================
function ReviewSection() {
  const reviews = [
    {
      emoji: '🧖‍♀️',
      name: 'M.K さん',
      attr: '30代・乾燥肌',
      title: 'お風呂上がりの肌が違います！',
      text: '乾燥しやすい肌が、しっとり潤って驚きました。翌朝の化粧ノリも良くなりました。',
    },
    {
      emoji: '🛁',
      name: 'Y.T さん',
      attr: '30代・敏感肌',
      title: 'まるで美容液に\n浸かっているみたい',
      text: 'お湯がやわらかくて驚きます。使い続けるほどに肌の調子が変わってきた気がします。',
    },
    {
      emoji: '💆‍♀️',
      name: 'R.S さん',
      attr: '20代・混合肌',
      title: '透明感が出て、\nすっぴんに自信が持てる',
      text: 'くすみが抜けて、肌が明るくなった気がします。もう手放せません！',
    },
  ]

  return (
    <section className={styles.reviewSection}>
      <div className={styles.sectionInner}>
        <span className={styles.sectionEyebrow}>CUSTOMER VOICE</span>
        <h2 className={styles.sectionTitle}>お客様の声</h2>
        <div className={styles.sectionDivider} />

        <div className={styles.reviewGrid}>
          {reviews.map((r) => (
            <div key={r.name} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <div className={styles.reviewAvatar}>
                  <span style={{ fontSize: 24 }}>{r.emoji}</span>
                </div>
                <div className={styles.reviewMeta}>
                  <div className={styles.reviewStars}>★★★★★</div>
                  <div className={styles.reviewName}>{r.name}</div>
                  <div className={styles.reviewAttr}>{r.attr}</div>
                </div>
              </div>
              <p className={styles.reviewTitle} style={{ whiteSpace: 'pre-line' }}>{r.title}</p>
              <p className={styles.reviewText}>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================
// CTA — 最下部
// ============================================================
function CtaSection() {
  const trust = [
    { icon: '🚚', text: '迅速製商' },
    { icon: '↩️', text: '30日間返金保証' },
    { icon: '🇯🇵', text: '安心の国内製造' },
  ]

  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaInner}>
        <span className={styles.ctaEyebrow}>今日のお風呂から、肌は変えられる。</span>

        <img
          src="/images/product-720g-front.jpg"
          alt="SILICA LAGOON BATH SALT"
          className={styles.ctaProductImg}
          loading="lazy"
        />

        <h2 className={styles.ctaHeadline}>
          自宅で、うるおい整う<br />
          新しい美容習慣をはじめませんか？
        </h2>

        <a href="https://silica-lagoon.company/" className={styles.ctaMainBtn}>
          今すぐ、うるおう体験をはじめる
          <span className={styles.ctaMainBtnArrow}>›</span>
        </a>

        <div className={styles.ctaTrustRow}>
          {trust.map((t) => (
            <div key={t.text} className={styles.ctaTrustItem}>
              <span className={styles.ctaTrustIcon}>{t.icon}</span>
              <span>{t.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================
// PAGE — Lp2
// ============================================================
export default function Lp2() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>何も塗らなくても潤う肌へ — SILICA LAGOON BATH SALT</title>
        <meta
          name="description"
          content="乾燥・化粧ノリ・くすみ。美容液のようなお湯に浸かるだけで、全身の肌が整う。シリカ・ヒアルロン酸・コラーゲン配合バスソルト。"
        />
        <link rel="canonical" href="https://silica-lagoon.company/lp2" />
        <meta property="og:title" content="何も塗らなくても潤う肌へ — SILICA LAGOON BATH SALT" />
        <meta property="og:description" content=""塗る"から"浸かる"へ。美容液のようなお湯で肌を整える新習慣。" />
        <meta property="og:image" content="https://silica-lagoon.company/images/hero-bath.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://silica-lagoon.company/lp2" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <LpHeader />

      <main>
        <HeroSection />
        <PainSection />
        <BenefitSection />
        <QuoteSection />
        <ProductSection />
        <ReviewSection />
        <CtaSection />
      </main>

      <footer className={styles.lpFooter}>
        <span className={styles.lpFooterLogo}>SILICA LAGOON</span>
        <Link href="/privacy">プライバシーポリシー</Link>
        &nbsp;|&nbsp;
        <Link href="/tokushoho">特定商取引法に基づく表記</Link>
      </footer>
    </>
  )
}
