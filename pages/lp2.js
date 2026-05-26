import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '../styles/lp2.module.css'

const STRIPE_URL = 'https://buy.stripe.com/4gMaEQ5l313Wfmg6n58k801'
const SUP_URL = 'https://mrcvwlaawmlfpoibxjec.supabase.co'
const SUP_KEY = 'sb_publishable_nONkmADAMLoZ1wxUrZqwug_F_Fm08yO'

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
// STICKY BAR — スマホ固定CTA（スクロール後に出現）
// ============================================================
function StickyBar({ shopUrl }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.85)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`${styles.stickyBar} ${show ? styles.stickyBarShow : ''}`}>
      <div className={styles.stickyInner}>
        <div className={styles.stickyInfo}>
          <span className={styles.stickyInfoTop}>720g　約12回分</span>
          <span className={styles.stickyInfoBot}>送料無料　¥3,300（税込）</span>
        </div>
        <a href={shopUrl} className={styles.stickyBtn}>
          青のスパ体験を始める
          <span className={styles.stickyBtnArrow}>›</span>
        </a>
      </div>
    </div>
  )
}

// ============================================================
// HERO — ガラスモーフィズム価格カード
// ============================================================
function HeroSection({ shopUrl }) {
  return (
    <section className={styles.hero} id="hero-top">
      <div className={styles.heroBg}>
        <img
          src="/images/hero-bath.png"
          alt="シリカラグーン 入浴シーン"
          loading="eager"
          fetchPriority="high"
        />
        <div className={styles.heroOverlay} />
      </div>

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
          自宅でスパ体験。<br />
          乳青色のお湯が、<br />
          肌をやさしく整える。
        </p>

        <ul className={styles.heroBullets}>
          <li>シリカ・保湿成分配合</li>
          <li>乳青色に変わる非日常感</li>
          <li>720g・約12回分</li>
        </ul>
      </div>

      <div className={styles.heroCtaWrap}>
        <a href={shopUrl} className={styles.heroCta}>
          自宅で青のスパ体験を始める
          <span className={styles.heroCtaArrow}>›</span>
        </a>

        {/* ガラスモーフィズム価格カード */}
        <div className={styles.heroPriceCard}>
          <p className={styles.heroPriceMain}>720g（約12回分）　送料無料</p>
          <p className={styles.heroPriceAmt}>
            ¥3,300<span className={styles.heroPriceTax}>&nbsp;税込</span>
          </p>
          <p className={styles.heroPricePer}>1回あたり約275円</p>
        </div>

        <p className={styles.heroNote}>* 自社調べ（シリカを配合した入浴剤として）</p>
      </div>
    </section>
  )
}

// ============================================================
// QUICK BENEFIT — FV直後の超短文ベネフィット
// ============================================================
function QuickBenefit() {
  return (
    <section className={styles.quickBenefit}>
      <p className={styles.quickBenefitMain}>
        自宅のお風呂が、<br />
        青のラグジュアリースパへ。
      </p>
      <p className={styles.quickBenefitSub}>
        美容成分を溶け込ませた、<br />
        乳青色のバスタイム。
      </p>
    </section>
  )
}

// ============================================================
// TRUST STRIP — 価格・内容量・送料
// ============================================================
function TrustStrip() {
  const items = [
    { icon: '💙', label: '約12回分', note: '720g入り' },
    { icon: '💎', label: '¥3,300', note: '税込・送料無料' },
    { icon: '🇯🇵', label: '国内製造', note: '品質安心' },
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
// INLINE CTA — ガラス感・高級ホテルUI
// ============================================================
function InlineCta({ shopUrl, text }) {
  return (
    <div className={styles.inlineCtaWrap}>
      <a href={shopUrl} className={styles.inlineCtaBtn}>
        {text}
        <span className={styles.inlineCtaArrow}>›</span>
      </a>
      <p className={styles.inlineCtaPrice}>
        720g・約12回分　¥3,300（税込）　送料無料
      </p>
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
        <h2 className={styles.sectionTitle}>こんな夜、<br />ありませんか。</h2>
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
          その悩み、<br />
          <em>お湯から変えられる。</em>
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
    { img: '/images/neck-skin.png',        alt: 'お湯の中のうるおい肌',   label: 'お風呂上がりの',   strong: 'しっとりが続く'  },
    { img: '/images/after-bath-towel.png', alt: 'お風呂上がりの肌',       label: '翌朝になって',    strong: '肌の違いに気づく' },
    { img: '/images/calm-time-2.png',      alt: '目を閉じて肌を確かめる', label: 'つい触りたくなる', strong: '肌の感触'         },
  ]

  return (
    <section className={styles.benefitSection}>
      <div className={styles.sectionInner}>
        <span className={styles.sectionEyebrow}>BEAUTY CHANGE</span>
        <h2 className={styles.benefitLead}>
          浸かるだけで、<br />肌が変わる。
        </h2>
        <p className={styles.benefitSub}>毎晩のお湯が、肌の返事を変える。</p>

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
// TRANSFORM — 青く変化する瞬間の演出
// ============================================================
function TransformSection() {
  return (
    <section className={styles.transformSection}>
      <div className={styles.transformImgWrap}>
        <img
          src="/images/dissolving.png"
          alt="乳青色に変わる瞬間"
          className={styles.transformImg}
          loading="lazy"
        />
        <div className={styles.transformGrad} />
        <div className={styles.transformRipple} />
      </div>
      <div className={styles.transformCopy}>
        <span className={styles.transformEye}>THE MOMENT</span>
        <p className={styles.transformText}>
          粉が溶ける瞬間、<br />
          お湯が青く染まる。
        </p>
        <p className={styles.transformSub}>
          視界が変わると、<br />
          気持ちまで変わる。
        </p>
      </div>
    </section>
  )
}

// ============================================================
// ATMOSPHERE — 乳青色のお湯ビジュアル
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
// PRODUCT — 体験言語で伝える
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
          包み込まれるような湯あたり。<br />
          しっとりと続く、湯上がりの感触。<br />
          "美肌の湯"と呼ばれる温泉から、<br />
          ヒントを得て設計しました。
        </p>

        <div className={styles.ingredientBadges}>
          {['湯上がり\nしっとり感', '乾燥しにくい\n柔らかい湯', '深呼吸したくなる\n温泉発想'].map((b) => (
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
// VALUE — 720g / 約12回分 / 価格説明
// ============================================================
function ValueSection() {
  return (
    <section className={styles.valueSection}>
      <div className={styles.valueInner}>
        <span className={styles.sectionEyebrow}>THE VALUE</span>

        <div className={styles.valueItems}>
          <div className={styles.valueItem}>
            <span className={styles.valueNum}>720g</span>
            <span className={styles.valueSub}>内容量</span>
          </div>
          <div className={styles.valueDivider} />
          <div className={styles.valueItem}>
            <span className={styles.valueNum}>約12回分</span>
            <span className={styles.valueSub}>1回60g目安</span>
          </div>
          <div className={styles.valueDivider} />
          <div className={styles.valueItem}>
            <span className={styles.valueNum}>¥3,300</span>
            <span className={styles.valueSub}>税込・送料無料</span>
          </div>
        </div>

        <p className={styles.valueNote}>
          1回あたり約275円。<br />
          毎日のお風呂が、<br />
          少し特別になる。
        </p>
      </div>
    </section>
  )
}

// ============================================================
// REVIEW — Instagram カード風（写真付き）
// ============================================================
function ReviewSection() {
  const reviews = [
    {
      name: 'M.K',
      attr: '30代・乾燥肌',
      img: '/images/calm-time.png',
      tag: '#乾燥肌改善',
      title: 'お風呂上がりの\n肌が違います',
      text: '乾燥しやすい肌が、しっとり潤って驚きました。翌朝の化粧ノリも変わりました。',
    },
    {
      name: 'Y.T',
      attr: '30代・敏感肌',
      img: '/images/quiet-bath-2.png',
      tag: '#美容液みたい',
      title: 'まるで美容液に\n浸かっているみたい',
      text: 'お湯がやわらかくて驚きます。使い続けるほどに肌の調子が変わってきた気がします。',
    },
    {
      name: 'R.S',
      attr: '20代・混合肌',
      img: '/images/clear-skin-morning.png',
      tag: '#透明感UP',
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
            <div key={r.name} className={styles.reviewPostCard}>
              <div className={styles.reviewPostImg}>
                <img src={r.img} alt="" loading="lazy" />
                <div className={styles.reviewPostImgGrad} />
                <span className={styles.reviewPostTag}>{r.tag}</span>
              </div>
              <div className={styles.reviewPostBody}>
                <div className={styles.reviewStars}>★★★★★</div>
                <p className={styles.reviewTitle} style={{ whiteSpace: 'pre-line' }}>{r.title}</p>
                <p className={styles.reviewText}>{r.text}</p>
                <div className={styles.reviewByline}>
                  <span className={styles.reviewName}>{r.name}</span>
                  <span className={styles.reviewAttr}>{r.attr}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================
// CTA — 最下部・大型
// ============================================================
function CtaSection({ shopUrl }) {
  const trust = [
    { icon: '🚚', text: '迅速発送' },
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
          今日のお風呂から、<br />
          肌を変えてみる。
        </h2>

        <p className={styles.ctaPrice}>
          ¥3,300<span className={styles.ctaPriceSub}>（税込・送料無料）</span>
        </p>
        <p className={styles.ctaPriceDetail}>720g・約12回分</p>

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
      <StickyBar shopUrl={shopUrl} />

      <main>
        {/* FV */}
        <HeroSection shopUrl={shopUrl} />

        {/* 何が凄いか一瞬で伝える */}
        <QuickBenefit />

        {/* 価格・内容量・送料 */}
        <TrustStrip />

        {/* CTA ① — FV直後：世界観で刺さった人向け */}
        <InlineCta shopUrl={shopUrl} text="自宅で青のスパ体験を始める" />

        {/* 悩み共感 → 変化の提示 */}
        <PainSection />
        <BenefitSection />
        <QuoteSection />

        {/* 青く変化する瞬間 — 最重要演出 */}
        <TransformSection />

        {/* 乳青色ビジュアル */}
        <AtmosphereSection />

        {/* CTA ② — 視覚で欲しくなった人向け */}
        <InlineCta shopUrl={shopUrl} text="乳青色のバスタイムを体験する" />

        {/* 体験言語で伝える成分説明 */}
        <ProductSection />

        {/* CTA ③ — 美容目的ユーザー向け */}
        <InlineCta shopUrl={shopUrl} text="湯上がりのしっとり感を体験する" />

        {/* 価格・内容量の丁寧な説明 */}
        <ValueSection />

        {/* CTA ④ — コスパ納得層向け */}
        <InlineCta shopUrl={shopUrl} text="送料無料で試してみる" />

        {/* Instagram風レビュー */}
        <ReviewSection />

        {/* CTA ⑤ — 信頼で購入する人向け */}
        <InlineCta shopUrl={shopUrl} text="自分へのご褒美時間を始める" />

        {/* 最終CTA */}
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
