import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '../styles/lp3.module.css'

const STRIPE_URL = 'https://buy.stripe.com/4gMaEQ5l313Wfmg6n58k801'
const SUP_URL = 'https://mrcvwlaawmlfpoibxjec.supabase.co'
const SUP_KEY = 'sb_publishable_nONkmADAMLoZ1wxUrZqwug_F_Fm08yO'

// ?ref= を読み取り、クリック記録 + Stripe に引き継ぐ
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
// HERO
// ============================================================
function HeroSection({ shopUrl }) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <img
          src="/images/blue-bath.jpg"
          alt="Blue Lagoon体験"
          loading="eager"
          fetchPriority="high"
        />
        <div className={styles.heroGrad} />
      </div>

      <div className={styles.heroBody}>
        <span className={styles.heroEye}>SILICA LAGOON BATH SALT</span>
        <h1 className={styles.heroH1}>
          自宅で、<br />
          Blue Lagoon体験。
        </h1>
        <p className={styles.heroSub}>
          ミルキーブルーのお湯に、<br />
          ただ浸かるだけ。
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
// EXPERIENCE — Blue Lagoon体験とは
// ============================================================
function ExperienceSection() {
  return (
    <section className={styles.experience}>
      <div className={styles.expInner}>
        <span className={styles.expEye}>BLUE LAGOON EXPERIENCE</span>
        <h2 className={styles.expH2}>
          白い湯気、<br />
          ミルキーブルーのお湯。<br />
          その静けさを、<br />
          自宅へ。
        </h2>
        <p className={styles.expBody}>
          アイスランドのBlue Lagoonが<br />インスピレーション。
        </p>
        <p className={styles.expBody}>
          遠い場所にあった体験を、<br />毎晩のお風呂に。
        </p>
      </div>
    </section>
  )
}

// ============================================================
// WATER VISUAL — 水中・拡散
// ============================================================
function WaterVisual() {
  return (
    <div className={styles.waterVisual}>
      <img
        src="/images/dissolving.png"
        alt="バスソルトがお湯に溶け込む"
        loading="lazy"
      />
    </div>
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
// LUXURY — ただ浸かる贅沢
// ============================================================
function LuxurySection() {
  const items = [
    {
      num: '01',
      title: 'ただ、浸かるだけ。',
      desc: '余計なことは何もいらない。\nバスソルトをひとさじ、溶かすだけ。',
    },
    {
      num: '02',
      title: 'ミルキーブルーのお湯。',
      desc: '視覚から、非日常が始まる。\n色が変わる瞬間の、あの感覚。',
    },
    {
      num: '03',
      title: '静かな20分。',
      desc: '何も考えなくていい時間。\nそれだけで、整う。',
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
              <p className={styles.luxDesc} style={{ whiteSpace: 'pre-line' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================
// NIGHT — 非日常バスタイム
// ============================================================
function NightSection() {
  return (
    <section className={styles.night}>
      <div className={styles.nightImgWrap}>
        <img src="/images/water-surface.png" alt="静かな水面" loading="lazy" />
        <div className={styles.nightOverlay} />
      </div>
      <div className={styles.nightCopy}>
        <p className={styles.nightText}>
          青に包まれる、<br />
          静かな時間。
        </p>
        <p className={styles.nightSub}>毎晩を、特別にする。</p>
      </div>
    </section>
  )
}

// ============================================================
// CTA
// ============================================================
function CtaSection({ shopUrl }) {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <span className={styles.ctaEye}>START YOUR EXPERIENCE</span>
        <h2 className={styles.ctaH2}>
          今日のお風呂から、<br />
          非日常をはじめる。
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
          今すぐ、Blue Lagoon体験をはじめる
          <span className={styles.ctaBtnArrow}>›</span>
        </a>

        <div className={styles.ctaTrust}>
          <span>🚚 迅速発送</span>
          <span>↩️ 30日間返金保証</span>
          <span>🇯🇵 国内製造</span>
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
          content="ミルキーブルーのお湯に、ただ浸かるだけ。アイスランドのBlue Lagoonにインスパイアされたバスソルトで、自宅が非日常の空間へ。"
        />
        <link rel="canonical" href="https://silica-lagoon.company/lp3" />
        <meta property="og:title" content="自宅で、Blue Lagoon体験。— SILICA LAGOON BATH SALT" />
        <meta property="og:description" content="ミルキーブルーのお湯に、ただ浸かるだけ。" />
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
        <WaterVisual />
        <QuoteSection />
        <LuxurySection />
        <NightSection />
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
