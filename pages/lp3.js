import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '../styles/lp3.module.css'

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
      body: JSON.stringify({ ref, lp: 'lp3' }),
    }).catch(() => {})
  }, [])
  return shopUrl
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
// HERO — 没入感・余白・動画対応
// ============================================================
function HeroSection({ shopUrl }) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        {/* 動画ファイルが存在すれば表示、なければposterの静止画にフォールバック */}
        <video
          className={styles.heroBgVideo}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/blue-bath.jpg"
        >
          <source src="/videos/hero-water.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroGrad} />
      </div>

      <div className={styles.heroBody}>
        <h1 className={styles.heroH1}>
          自宅で、<br />
          Blue Lagoon体験。
        </h1>
        <p className={styles.heroSub}>
          青に包まれる、<br />
          静かな20分。
        </p>
        <a href={shopUrl} className={styles.heroBtn}>
          体験をはじめる
          <span className={styles.heroBtnArrow}>↓</span>
        </a>
      </div>
    </section>
  )
}

// ============================================================
// EXPERIENCE — 物語・最小限のテキスト
// ============================================================
function ExperienceSection() {
  return (
    <section className={styles.experience}>
      <div className={styles.expInner}>
        <span className={styles.expEye}>BLUE LAGOON EXPERIENCE</span>
        <h2 className={styles.expH2}>
          白く青い、<br />
          静かな温泉体験。
        </h2>
        <p className={styles.expBody}>
          アイスランドで出会った、白く青い温泉。<br />
          その静けさを、今日の浴室へ。
        </p>
        <p className={styles.expStory}>
          ミルキーブルーのお湯が広がる瞬間、<br />
          遠い旅先の静けさが戻ってくる。<br />
          <br />
          それが、SILICA LAGOON。
        </p>
      </div>
    </section>
  )
}

// ============================================================
// VISUAL 1 — 全画面インパクト・溶ける瞬間
// ============================================================
function DissolvingVisual() {
  return (
    <div className={styles.fullVisual}>
      <img
        src="/images/dissolving.png"
        alt="バスソルトがお湯に溶け込む"
        loading="lazy"
      />
      <div className={styles.fullVisualOverlay} />
    </div>
  )
}

// ============================================================
// JOURNEY — 暗背景・旅の詩
// ============================================================
function JourneySection() {
  return (
    <section className={styles.journey}>
      <p className={styles.journeyText}>
        遠くへ行かなくても、<br />
        お風呂は旅になる。
      </p>
    </section>
  )
}

// ============================================================
// QUOTE
// ============================================================
function QuoteSection() {
  return (
    <section className={styles.quote}>
      <div className={styles.quoteInner}>
        <span className={styles.quoteMark}>"</span>
        <p className={styles.quoteText}>
          お風呂が、<br />
          旅になる。
        </p>
        <div className={styles.quoteLine} />
        <p className={styles.quoteSub}>SILICA LAGOON</p>
      </div>
    </section>
  )
}

// ============================================================
// LUXURY — 体験の3項目
// ============================================================
function LuxurySection() {
  const items = [
    {
      num: '01',
      title: '青に包まれる',
      desc: 'ミルキーブルーの湯が、視界を静かに染める。',
    },
    {
      num: '02',
      title: '音が消える',
      desc: '湯気と光だけが残る、静かな時間。',
    },
    {
      num: '03',
      title: '旅の余韻',
      desc: '遠くへ行かなくても、心だけ旅に出る。',
    },
  ]

  return (
    <section className={styles.luxury}>
      <div className={styles.luxInner}>
        <span className={styles.luxEye}>THE EXPERIENCE</span>
        <h2 className={styles.luxH2}>
          ただ浸かる、<br />
          その贅沢。
        </h2>
        <div className={styles.luxItems}>
          {items.map(item => (
            <div key={item.num} className={styles.luxItem}>
              <span className={styles.luxNum}>{item.num}</span>
              <h3 className={styles.luxTitle}>{item.title}</h3>
              <p className={styles.luxDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================
// VISUAL 2 — 後ろ姿・青いお湯
// ============================================================
function ImmersionVisual() {
  return (
    <section className={styles.immersion}>
      <div className={styles.immersionImgWrap}>
        <img src="/images/back-figure.png" alt="青いお湯に浸かる" loading="lazy" />
        <div className={styles.immersionOverlay} />
      </div>
      <div className={styles.immersionCopy}>
        <p className={styles.immersionText}>
          青に包まれる、<br />
          静かな時間。
        </p>
        <p className={styles.immersionSub}>毎晩を、特別にする。</p>
      </div>
    </section>
  )
}

// ============================================================
// CTA — 世界観の入口
// ============================================================
function CtaSection({ shopUrl }) {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <span className={styles.ctaEye}>START YOUR EXPERIENCE</span>
        <h2 className={styles.ctaH2}>
          いつもの浴室を、<br />
          少し遠い場所へ。
        </h2>

        <div className={styles.ctaVisual}>
          <img
            src="/images/bath-salt-crystal.png"
            alt="SILICA LAGOON BATH SALT"
            loading="lazy"
          />
        </div>

        <p className={styles.ctaName}>SILICA LAGOON BATH SALT</p>

        <a href={shopUrl} className={styles.ctaBtn}>
          自宅で体験をはじめる
          <span className={styles.ctaBtnArrow}>›</span>
        </a>

        <div className={styles.ctaTrust}>
          <span>迅速発送</span>
          <span>国内製造</span>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// PAGE
// ============================================================
export default function Lp3() {
  const shopUrl = useShopUrl()

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>自宅で、Blue Lagoon体験。— SILICA LAGOON BATH SALT</title>
        <meta
          name="description"
          content="遠い旅先で出会うような静けさを、今日のお風呂に。ミルキーブルーのお湯に包まれる、静かな20分。SILICA LAGOON BATH SALT。"
        />
        <link rel="canonical" href="https://silica-lagoon.company/lp3" />
        <meta property="og:title" content="自宅で、Blue Lagoon体験。— SILICA LAGOON BATH SALT" />
        <meta property="og:description" content="遠い旅先で出会うような静けさを、今日のお風呂に。" />
        <meta property="og:image" content="https://silica-lagoon.company/images/blue-bath.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://silica-lagoon.company/lp3" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Lp3Header shopUrl={shopUrl} />

      <main>
        <HeroSection shopUrl={shopUrl} />
        <ExperienceSection />
        <DissolvingVisual />
        <JourneySection />
        <QuoteSection />
        <LuxurySection />
        <ImmersionVisual />
        <CtaSection shopUrl={shopUrl} />
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
