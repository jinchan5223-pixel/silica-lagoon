import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '../styles/lp2.module.css'

const STRIPE_URL = 'https://buy.stripe.com/4gMaEQ5l313Wfmg6n58k801'
const SUP_URL = 'https://mrcvwlaawmlfpoibxjec.supabase.co'
const SUP_KEY = 'sb_publishable_nONkmADAMLoZ1wxUrZqwug_F_Fm08yO'

// ?ref= パラメータを読み取り、クリック記録 + Stripeのclient_reference_idに引き継ぐ
function useShopUrl() {
  const [shopUrl, setShopUrl] = useState(STRIPE_URL)
  useEffect(() => {
    const ref = new URLSearchParams(window.location.search).get('ref')
    if (!ref) return
    setShopUrl(`${STRIPE_URL}?client_reference_id=${encodeURIComponent(ref)}`)
    fetch(`${SUP_URL}/rest/v1/clicks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUP_KEY,
        'Authorization': `Bearer ${SUP_KEY}`,
      },
      body: JSON.stringify({ ref, lp: 'lp2' }),
    }).catch(() => {})
  }, [])
  return shopUrl
}

// ============================================================
// HEADER
// ============================================================
function LpHeader({ shopUrl }) {
  return (
    <header className={styles.lpHeader}>
      <span className={styles.lpLogo}>SILICA LAGOON</span>
      <a href={shopUrl} className={styles.headerCta}>
        今すぐ購入する
      </a>
    </header>
  )
}

// ============================================================
// HERO — 女性 × コピー × CTA のみ
// ============================================================
function HeroSection({ shopUrl }) {
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

      {/* コピーのみ */}
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
      </div>

      {/* Hero底部CTA — 半透明ガラス */}
      <div className={styles.heroCtaWrap}>
        <a href={shopUrl} className={styles.heroCta}>
          今すぐ、うるおう体験をはじめる
          <span className={styles.heroCtaArrow}>›</span>
        </a>
        <p className={styles.heroNote}>* 自社調べ（シリカを配合した入浴剤として）</p>
      </div>
    </section>
  )
}

// ============================================================
// TRUST STRIP
// ============================================================
function TrustStrip() {
  const items = [
    { icon: '💎', label: '日本初*', note: 'シリカ×温泉発想' },
    { icon: '✨', label: '美容成分', note: '贅沢配合' },
    { icon: '♨️', label: '温泉発想', note: '美肌の湯' },
  ]
  return (
    <div className={styles.trustStrip}>
      {items.map((i) => (
        <div key={i.label} className={styles.trustItem}>
          <span className={styles.trustIcon}>{i.icon}</span>
          <span className={styles.trustLabel}>{i.label}</span>
          <span className={styles.trustNote}>{i.note}</span>
        </div>
      ))}
    </div>
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
// BENEFIT
// ============================================================
function BenefitSection() {
  const benefits = [
    { img: '/images/neck-skin.png',        alt: 'お湯の中のうるおい肌',   label: 'しっとり続く',   strong: '潤い肌'  },
    { img: '/images/after-bath-towel.png', alt: 'お風呂上がりの肌',      label: '化粧ノリが変わる', strong: '朝の肌'  },
    { img: '/images/calm-time-2.png',      alt: '目を閉じて肌を確かめる', label: '触りたくなる',   strong: '肌質感'  },
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
        <p className={styles.quoteText}>{`何を塗るかではなく、\nどう整えるか。`}</p>
        <p className={styles.quoteSub}>SILICA LAGOON</p>
      </div>
    </section>
  )
}

// ============================================================
// ATMOSPHERE
// ============================================================
function AtmosphereSection() {
  return (
    <section className={styles.atmosphereSection}>
      <div className={styles.atmosphereBg}>
        <img src="/images/quiet-bath.png" alt="キャンドルの光の中で静かに浸かる" loading="lazy" />
        <div className={styles.atmosphereOverlay} />
      </div>
      <div className={styles.atmosphereText}>
        <p className={styles.atmosphereCopy}>
          毎日のお風呂が、<br />
          整う時間になる。
        </p>
        <span className={styles.atmosphereSub}>SILICA LAGOON</span>
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
      <div className={styles.productImgWrap}>
        <img src="/images/dissolving.png" alt="シリカが水中で溶け広がる瞬間" loading="lazy" />
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
            <span key={b} className={styles.ingredientBadge} style={{ whiteSpace: 'pre-line', textAlign: 'center', lineHeight: 1.5 }}>
              {b}
            </span>
          ))}
        </div>

        <span className={styles.forWhomTitle}>FOR WHOM</span>
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
// REVIEW — 美容誌スタイル
// ============================================================
function ReviewSection() {
  const reviews = [
    {
      name: 'M.K さん', attr: '30代・乾燥肌',
      title: 'お風呂上がりの\n肌が違います',
      text: '乾燥しやすい肌が、しっとり潤って驚きました。翌朝の化粧ノリも良くなりました。',
    },
    {
      name: 'Y.T さん', attr: '30代・敏感肌',
      title: 'まるで美容液に\n浸かっているみたい',
      text: 'お湯がやわらかくて驚きます。使い続けるほどに肌の調子が変わってきた気がします。',
    },
    {
      name: 'R.S さん', attr: '20代・混合肌',
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
              <div className={styles.reviewStars}>★★★★★</div>
              <p className={styles.reviewTitle}>{r.title}</p>
              <p className={styles.reviewText}>{r.text}</p>
              <div className={styles.reviewByline}>
                <span className={styles.reviewName}>{r.name}</span>
                <span className={styles.reviewAttr}>{r.attr}</span>
              </div>
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
function CtaSection({ shopUrl }) {
  const trust = [
    { icon: '🚚', text: '迅速発送' },
    { icon: '↩️', text: '30日間返金保証' },
    { icon: '🇯🇵', text: '国内製造' },
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

        <a href={shopUrl} className={styles.ctaMainBtn}>
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
// PAGE
// ============================================================
export default function Lp2() {
  const shopUrl = useShopUrl()

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
        <meta property="og:description" content="&ldquo;塗る&rdquo;から&ldquo;浸かる&rdquo;へ。美容液のようなお湯で肌を整える新習慣。" />
        <meta property="og:image" content="https://silica-lagoon.company/images/hero-bath.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://silica-lagoon.company/lp2" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <LpHeader shopUrl={shopUrl} />

      <main>
        <HeroSection shopUrl={shopUrl} />
        <TrustStrip />
        <PainSection />
        <BenefitSection />
        <QuoteSection />
        <AtmosphereSection />
        <ProductSection />
        <ReviewSection />
        <CtaSection shopUrl={shopUrl} />
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
