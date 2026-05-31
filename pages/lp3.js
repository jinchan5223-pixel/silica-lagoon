import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '../styles/lp3.module.css'

const STRIPE_URL      = 'https://buy.stripe.com/4gMaEQ5l313Wfmg6n58k801'
const STRIPE_TEIKI_URL = 'https://buy.stripe.com/00wfZacNv9Asa1W5j18k800'
const SUP_URL = 'https://mrcvwlaawmlfpoibxjec.supabase.co'
const SUP_KEY = 'sb_publishable_nONkmADAMLoZ1wxUrZqwug_F_Fm08yO'

function useShopUrls() {
  const [shopUrl, setShopUrl] = useState(STRIPE_URL)
  const [teikiUrl, setTeikiUrl] = useState(STRIPE_TEIKI_URL)
  useEffect(() => {
    const ref = new URLSearchParams(window.location.search).get('ref')
    if (!ref) return
    setShopUrl(`${STRIPE_URL}?client_reference_id=${encodeURIComponent(ref)}`)
    setTeikiUrl(`${STRIPE_TEIKI_URL}?client_reference_id=${encodeURIComponent(ref)}`)
    fetch(`${SUP_URL}/rest/v1/clicks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUP_KEY,
        'Authorization': `Bearer ${SUP_KEY}`,
      },
      body: JSON.stringify({ ref, lp: 'lp3' }),
    }).catch(() => {})
  }, [])
  return { shopUrl, teikiUrl }
}

// ============================================================
// HEADER
// ============================================================
function Lp3Header({ shopUrl }) {
  return (
    <header className={styles.header}>
      <span className={styles.headerLogo}>SILICA LAGOON</span>
      <a href={shopUrl} className={styles.headerBtn}>体験をはじめる</a>
    </header>
  )
}

// ============================================================
// HERO
// ============================================================
function HeroSection({ shopUrl }) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <img src="/images/hero-lp3.png" alt="" className={styles.heroBgImg} />
        <div className={styles.heroGrad} />
        <div className={styles.heroWaterLight} aria-hidden="true" />
        <div className={styles.heroMist} aria-hidden="true" />
        <div className={styles.heroVignette} aria-hidden="true" />
      </div>

      <div className={styles.heroBody}>
        <span className={styles.heroEyebrow}>北欧の大地が育んだ、青の癒し</span>
        <p className={styles.heroBrand}>
          Silica Lagoon<sup className={styles.heroBrandSup}>®</sup>
        </p>
        <p className={styles.heroBrandSub}>Bath Salt</p>
        <div className={styles.heroDivider} />
        <h1 className={styles.heroH1}>
          青に包まれる、<br />
          静かな夜時間。
        </h1>
        <p className={styles.heroSub}>
          火山の恵みから生まれたミネラル入浴料で、<br />
          自宅が北欧のスパに。
        </p>
      </div>

      <div className={styles.heroScrollCircle} aria-hidden="true">
        <span className={styles.heroScrollText}>SCROLL</span>
        <span className={styles.heroScrollArrow}>↓</span>
      </div>
    </section>
  )
}

// ============================================================
// INGREDIENT — 成分・スペック
// ============================================================
function IngredientSection() {
  return (
    <section className={styles.ingredientSection}>
      <div className={styles.ingredientInner}>
        <div className={styles.ingredientMain}>
          <p className={styles.ingredientLabel}>美肌の湯</p>
          <p className={styles.ingredientSpec}>
            メタケイ酸Na 250mg以上<sup className={styles.ingredientNote}>*1</sup>
          </p>
          <p className={styles.ingredientFoot}>*1 温泉に匹敵、湯出し1回分あたり</p>
        </div>
        <div className={styles.ingredientBadge}>
          <p className={styles.ingredientBadgeLabel}>保湿成分</p>
          <p className={styles.ingredientBadgeItems}>
            スクワラン<br />コラーゲン<br />ヒアルロン酸
          </p>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// DISSOLVE — 乳青色に変わる瞬間
// ============================================================
function DissolveSection() {
  return (
    <section className={styles.dissolveSection}>
      <div className={styles.dissolveImgWrap}>
        <img src="/images/dissolving.png" alt="" loading="lazy" />
        <div className={styles.dissolveOverlay} />
      </div>
      <div className={styles.dissolveCopy}>
        <h2 className={styles.dissolveH2}>
          透明なお湯が、<br />
          乳青色に変わる瞬間。
        </h2>
        <p className={styles.dissolveBody}>
          まるでアイスランドのラグーンに<br />
          身をゆだねるような、特別な体験を。
        </p>
      </div>
    </section>
  )
}

// ============================================================
// BENEFIT — 3つの体験
// ============================================================
function BenefitSection() {
  const benefits = [
    {
      img: '/images/hand-detail.png',
      title: 'やさしく、とろける湯ざわり',
      desc: 'ミネラルを含んだやわらかなお湯が、全身をやさしく包み込む。',
    },
    {
      img: '/images/quiet-bath-2.png',
      title: '深く、からだをゆるめる',
      desc: '温かいお湯の中で、ゆっくりと力が抜けていく静かな時間。',
    },
    {
      img: '/images/bath-scene-3.png',
      title: '青いお湯に、ただ浸かる。',
      desc: 'ミルキーブルーの湯面が広がる。それだけで、体験が始まる。',
    },
  ]
  return (
    <section className={styles.benefitSection}>
      <div className={styles.benefitGrid}>
        {benefits.map((b, i) => (
          <div key={i} className={styles.benefitItem}>
            <div className={styles.benefitImgWrap}>
              <img src={b.img} alt="" loading="lazy" />
            </div>
            <div className={styles.benefitText}>
              <p className={styles.benefitTitle}>{b.title}</p>
              <p className={styles.benefitDesc}>{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ============================================================
// JOURNEY END — 今日の終わりに
// ============================================================
function JourneyEndSection() {
  return (
    <section className={styles.journeyEndSection}>
      <div className={styles.journeyEndImgWrap}>
        <img src="/images/quiet-bath.png" alt="" loading="lazy" />
        <div className={styles.journeyEndOverlay} />
      </div>
      <div className={styles.journeyEndCopy}>
        <h2 className={styles.journeyEndH2}>
          今日の終わりに、<br />
          自分をととのえる。
        </h2>
        <p className={styles.journeyEndBody}>
          スマホを置いて、深く息をつく。<br />
          静かな青が、心まで満たしていく。<br />
          それは、自分だけのスパ時間。
        </p>
      </div>
    </section>
  )
}

// ============================================================
// REVIEW — 誰かの夜時間の断片
// ============================================================
function ReviewSection() {
  const reviews = [
    {
      name: 'M.K',
      img: '/images/calm-time.png',
      tag: '#バスタイム記録',
      quote: '夜が、少し楽しみになった。',
    },
    {
      name: 'Y.T',
      img: '/images/quiet-bath-2.png',
      tag: '#自宅スパ',
      quote: 'このヌルヌル感が効いてる感じ。',
    },
    {
      name: 'R.S',
      img: '/images/honninmesen.png',
      tag: '#夜の楽しみ',
      quote: '静かな青に、包まれる感じ。',
    },
  ]

  return (
    <section className={styles.reviewSection}>
      <div className={styles.reviewInner}>
        <span className={styles.reviewEye}>CUSTOMER VOICE</span>
        <p className={styles.reviewTitle}>誰かの、夜時間。</p>
        <div className={styles.reviewGrid}>
          {reviews.map((r) => (
            <div key={r.name} className={styles.reviewCard}>
              <div className={styles.reviewStoryBar} />
              <div className={styles.reviewImgWrap}>
                <img
                  src={r.img}
                  alt=""
                  loading="lazy"
                  style={r.imgPosition ? { objectPosition: r.imgPosition } : undefined}
                />
                <div className={styles.reviewImgGrad} />
                <div className={styles.reviewOverlay}>
                  <span className={styles.reviewTag}>{r.tag}</span>
                  <p className={styles.reviewQuote}>「{r.quote}」</p>
                  <div className={styles.reviewMeta}>
                    <div className={styles.reviewAvatar}>{r.name.charAt(0)}</div>
                    <span className={styles.reviewName}>{r.name}</span>
                  </div>
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
// NIGHT ENDING — 感情の締め
// ============================================================
function NightEndingSection() {
  return (
    <section className={styles.nightSection}>
      <div className={styles.nightGlow} aria-hidden="true" />
      <div className={styles.nightMist} aria-hidden="true" />
      <div className={styles.nightInner}>
        <span className={styles.nightEye}>TONIGHT</span>
        <p className={styles.nightMain}>
          今夜、<br />
          青に包まれる。
        </p>
        <div className={styles.nightDivider} />
        <p className={styles.nightSub}>
          スマホを置いて、深く息をつく。<br />
          静かな青が、一日を洗い流していく。<br />
          それだけで、今夜が変わる。
        </p>
        <div className={styles.nightBreath} aria-hidden="true" />
      </div>
    </section>
  )
}

// ============================================================
// CTA BAR — 横並びCTA
// ============================================================
function CtaBarSection({ shopUrl, teikiUrl }) {
  const [plan, setPlan] = useState('teiki')
  const icons = [
    { key: 'a', label: 'アイスランドの\n自然に着想' },
    { key: 'b', label: '美肌の湯\nメタケイ酸Na配合' },
    { key: 'c', label: '弱アルカリ性\nやさしい処方' },
    { key: 'd', label: '国内製造\n品質安心' },
  ]
  const selectedUrl = plan === 'teiki' ? teikiUrl : shopUrl
  return (
    <section className={styles.ctaBar}>
      <div className={styles.ctaBarInner}>
        <div className={styles.ctaBarImgWrap}>
          <div className={styles.ctaBarImgAura} aria-hidden="true" />
          <img
            src="/images/product-package.png"
            alt="SILICA LAGOON BATH SALT"
            className={styles.ctaBarImg}
            loading="lazy"
          />
        </div>
        <div className={styles.ctaBarInfo}>
          <p className={styles.ctaBarBrand}>
            Silica Lagoon<sup className={styles.ctaBarBrandSup}>®</sup>
          </p>
          <p className={styles.ctaBarBrandSub}>Bath Salt</p>
          <p className={styles.ctaBarTagline} style={{ whiteSpace: 'pre-line' }}>
            {'ミネラル豊富な乳青色のお湯を、\nあなたの毎日に。'}
          </p>
        </div>
      </div>

      {/* プラン選択 */}
      <div className={styles.ctaBarPlans}>
        <button
          className={`${styles.ctaBarPlanCard} ${plan === 'teiki' ? styles.ctaBarPlanCardActive : ''}`}
          onClick={() => setPlan('teiki')}
          type="button"
        >
          <span className={styles.ctaBarPlanBadge}>おすすめ</span>
          <span className={styles.ctaBarPlanName}>定期購入</span>
          <span className={styles.ctaBarPlanPrice}>¥2,970<span className={styles.ctaBarPlanUnit}>/月</span></span>
          <span className={styles.ctaBarPlanNote}>送料無料・いつでも解約可</span>
        </button>
        <button
          className={`${styles.ctaBarPlanCard} ${plan === 'ippan' ? styles.ctaBarPlanCardActive : ''}`}
          onClick={() => setPlan('ippan')}
          type="button"
        >
          <span className={styles.ctaBarPlanBadgeEmpty} />
          <span className={styles.ctaBarPlanName}>通常購入</span>
          <span className={styles.ctaBarPlanPrice}>¥3,300</span>
          <span className={styles.ctaBarPlanNote}>送料無料・1回限り</span>
        </button>
      </div>

      <div className={styles.ctaBarBtnWrap}>
        <a href={selectedUrl} className={styles.ctaBarBtn}>
          {plan === 'teiki' ? '定期購入をはじめる ›' : '通常購入をはじめる ›'}
        </a>
        <p className={styles.ctaBarBtnNote}>税込・送料無料</p>
      </div>

      <div className={styles.ctaBarIcons}>
        {icons.map((ic) => (
          <div key={ic.key} className={styles.ctaBarIcon}>
            <span className={styles.ctaBarIconLabel} style={{ whiteSpace: 'pre-line' }}>
              {ic.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

// ============================================================
// STICKY NAV — 静かなブランド導線
// ============================================================
function StickyNav({ shopUrl }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const winH   = window.innerHeight
      const docH   = document.documentElement.scrollHeight
      // ヒーロー通過後に表示、最終CTAの手前200pxで消える
      const pastHero   = scrollY > winH * 0.72
      const nearBottom = scrollY + winH > docH - 220
      setVisible(pastHero && !nearBottom)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`${styles.stickyNav} ${visible ? styles.stickyNavVisible : ''}`} aria-hidden={!visible}>
      <div className={styles.stickyNavInner}>
        <div className={styles.stickyNavInfo}>
          <p className={styles.stickyNavBrand}>
            Silica Lagoon<sup className={styles.stickyNavSup}>®</sup>
          </p>
          <p className={styles.stickyNavSub}>bath salt</p>
        </div>
        <a href={shopUrl} className={styles.stickyNavBtn} tabIndex={visible ? 0 : -1}>
          夜に、青を。
        </a>
      </div>
    </div>
  )
}

// ============================================================
// PAGE
// ============================================================
export default function Lp3() {
  const { shopUrl, teikiUrl } = useShopUrls()

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <title>青に包まれる、静かな夜時間。— SILICA LAGOON BATH SALT</title>
        <meta
          name="description"
          content="アイスランドのスパ文化に着想を受けた、乳青色のバスタイム。ブルーラグーンのような静けさを、今夜の浴室へ。ミルキーブルー温泉体験。SILICA LAGOON。"
        />
        <link rel="canonical" href="https://silica-lagoon.company/lp3" />
        <meta property="og:title" content="青に包まれる、静かな夜時間。— SILICA LAGOON BATH SALT" />
        <meta property="og:description" content="アイスランドのスパ文化に着想を受けた、乳青色のバスタイム。北欧ラグジュアリースパのような静けさを、今夜の浴室で。" />
        <meta property="og:image" content="https://silica-lagoon.company/images/hero-lp3.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://silica-lagoon.company/lp3" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Lp3Header shopUrl={shopUrl} />
      <StickyNav shopUrl={shopUrl} />

      <main>
        <HeroSection shopUrl={shopUrl} />
        <IngredientSection />
        <DissolveSection />
        <BenefitSection />
        <JourneyEndSection />
        <ReviewSection />
        <NightEndingSection />
        <CtaBarSection shopUrl={shopUrl} teikiUrl={teikiUrl} />
      </main>

      <footer className={styles.footer}>
        <span className={styles.footerLogo}>SILICA LAGOON</span>
        <nav className={styles.footerNav}>
          <Link href="/privacy">プライバシーポリシー</Link>
          <span>|</span>
          <Link href="/tokushoho">特定商取引法に基づく表記</Link>
        </nav>
      </footer>
    </>
  )
}
