import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '../styles/lp2.module.css'

const STRIPE_URL        = 'https://buy.stripe.com/4gMaEQ5l313Wfmg6n58k801'
const STRIPE_TEIKI_URL  = 'https://buy.stripe.com/00wfZacNv9Asa1W5j18k800'
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
// STICKY BAR — 通常購入 + 定期便
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

  if (!show) return null

  return (
    <div className={styles.stickyBar}>
      <div className={styles.stickyInner}>
        <div className={styles.stickyInfo}>
          <span className={styles.stickyInfoPrice}>¥3,300</span>
          <span className={styles.stickyInfoSub}>720g・約12回分　送料無料</span>
        </div>
        <div className={styles.stickyBtns}>
          <a href={STRIPE_TEIKI_URL} className={styles.stickyBtnTeiki}>
            定期　¥2,970
          </a>
          <a href={shopUrl} className={styles.stickyBtn}>
            通常購入
            <span className={styles.stickyBtnArrow}>›</span>
          </a>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// HERO — ① 余白改善 + 水面光 + 浮遊粒子 + 禁止表現修正
// ============================================================
function HeroSection({ shopUrl }) {
  return (
    <section className={styles.hero} id="hero-top">
      <div className={styles.heroBg}>
        <img
          src="/images/hero-bath.png"
          alt="乳青色のお湯が静かに広がる"
          loading="eager"
          fetchPriority="high"
        />
        <div className={styles.heroOverlay} />
        {/* ② 水面光の反射 */}
        <div className={styles.heroWaterShimmer} aria-hidden="true" />
      </div>

      {/* ③ 浮遊する光の粒子 */}
      <div className={styles.heroParticles} aria-hidden="true">
        <div className={styles.heroParticle} style={{ width: '3px', height: '3px', left: '14%', bottom: '40%', animationDuration: '8s', animationDelay: '0s' }} />
        <div className={styles.heroParticle} style={{ width: '2px', height: '2px', left: '36%', bottom: '55%', animationDuration: '11s', animationDelay: '2.5s' }} />
        <div className={styles.heroParticle} style={{ width: '4px', height: '4px', left: '60%', bottom: '30%', animationDuration: '7s', animationDelay: '4s' }} />
        <div className={styles.heroParticle} style={{ width: '2px', height: '2px', left: '78%', bottom: '48%', animationDuration: '9s', animationDelay: '1s' }} />
        <div className={styles.heroParticle} style={{ width: '3px', height: '3px', left: '90%', bottom: '36%', animationDuration: '6s', animationDelay: '3s' }} />
      </div>

      <div className={styles.heroContent}>
        <span className={styles.heroEyebrow}>SILICA LAGOON BATH SALT</span>

        <h1 className={styles.heroHeadline}>
          お湯が変わると、<br />
          <em>夜が変わる。</em>
        </h1>

        <div className={styles.heroDivider} />
        <p className={styles.heroSubCopy}>"塗る"から"浸かる"へ。</p>

        <p className={styles.heroSub}>
          乳青色のやわらかなお湯が、<br />
          夜時間を、変えていく。
        </p>
      </div>

      <div className={styles.heroCtaWrap}>
        <a href={shopUrl} className={styles.heroCta}>
          自宅で青のスパ体験を始める
          <span className={styles.heroCtaArrow}>›</span>
        </a>

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
// QUICK BENEFIT
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
// TRUST STRIP
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
// INLINE CTA
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
// PAIN — 悩み共感（体験・時間訴求）
// ============================================================
function PainSection() {
  const pains = [
    { icon: '😮‍💨', text: 'お風呂上がりに\n肌がすぐ\n乾く気がする' },
    { icon: '💧', text: 'スキンケアを\nしても\nなんか足りない' },
    { icon: '🛁', text: 'お風呂の時間が\n惰性に\nなっている' },
    { icon: '🌙', text: '夜時間を\nもっとゆっくり\n過ごしたい' },
  ]

  return (
    <section className={styles.painSection}>
      <div className={styles.sectionInner}>
        <span className={styles.sectionEyebrow}>NIGHT ROUTINE</span>
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
          その夜を、<br />
          <em>お湯から変えられる。</em>
        </p>
      </div>
    </section>
  )
}

// ============================================================
// BENEFIT — 体験・感触訴求（効果断定なし）
// ============================================================
function BenefitSection() {
  const benefits = [
    { img: '/images/neck-skin.png',        alt: '湯上がりのやわらかな肌',   label: '湯上がりの',      strong: 'やわらかな質感'  },
    { img: '/images/after-bath-towel.png', alt: '翌朝の肌の感触',           label: '翌朝も続く',      strong: 'しっとりした感触' },
    { img: '/images/calm-time-2.png',      alt: '静かなバスタイム',         label: 'つい触れたくなる', strong: '湯上がりの肌'    },
  ]

  return (
    <section className={styles.benefitSection}>
      <div className={styles.sectionInner}>
        <span className={styles.sectionEyebrow}>BATH EXPERIENCE</span>
        <h2 className={styles.benefitLead}>
          浸かるたびに、<br />夜が整う。
        </h2>
        <p className={styles.benefitSub}>毎晩のお湯が、夜の質を変える。</p>

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
// TRANSFORM — ② 青色リッチ化 + 深海グロー追加
// ============================================================
function TransformSection() {
  return (
    <section className={styles.transformSection}>
      <div className={styles.transformImgWrap}>
        <img
          src="/images/dissolving-scene.png"
          alt="乳青色に変わる瞬間"
          className={styles.transformImg}
          loading="lazy"
        />
        <div className={styles.transformGrad} />
        <div className={styles.transformRipple} />
        {/* ② 深海グロー */}
        <div className={styles.transformBlueGlow1} aria-hidden="true" />
        <div className={styles.transformBlueGlow2} aria-hidden="true" />
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
// ATMOSPHERE — ② 水面光反射追加
// ============================================================
function AtmosphereSection() {
  return (
    <section className={styles.atmosphereSection}>
      <div className={styles.atmosphereBg}>
        <img src="/images/blue-bath.jpg" alt="乳青色のお湯に静かに浸かる" loading="lazy" />
        <div className={styles.atmosphereOverlay} />
        {/* ② 水面揺らぎ */}
        <div className={styles.atmosphereShimmer} aria-hidden="true" />
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
// HOW TO — ⑤ 使用フロー（5ステップ）
// ============================================================
function HowToSection() {
  const steps = [
    {
      num: '01',
      title: '粉を入れる',
      desc: 'スプーン2杯（約60g）をお湯へ。それだけでいい。',
      img: '/images/product-spill.jpg',
    },
    {
      num: '02',
      title: '青が、溶け出す',
      desc: 'バタフライピーの青がゆっくりと広がっていく。',
      img: '/images/butterfly-pea-real.jpg',
    },
    {
      num: '03',
      title: '乳青色のお湯へ',
      desc: 'お湯全体が静かなブルーに変わっていく。',
      img: '/images/color-changing.jpg',
    },
    {
      num: '04',
      title: 'ゆっくり浸かる',
      desc: '15〜20分。ただ、お湯の中にいる。',
      img: '/images/bath-pov.png',
    },
    {
      num: '05',
      title: '夜の静けさへ',
      desc: '湯上がりの余韻とともに、静かな夜がはじまる。',
      img: '/images/after-bath-night.png',
    },
  ]

  return (
    <section className={styles.howToSection}>
      <div className={styles.howToInner}>
        <span className={styles.howToEye}>THE RITUAL</span>
        <h2 className={styles.howToTitle}>
          青のスパ体験、<br />
          5つの流れ。
        </h2>
        <div className={styles.howToDivider} />

        <div className={styles.howToSteps}>
          {steps.map((s) => (
            <div key={s.num} className={styles.howToStep}>
              <div className={styles.howToStepLeft}>
                <span className={styles.howToNum}>{s.num}</span>
                <div className={styles.howToLine} />
              </div>
              <div className={styles.howToStepRight}>
                <div className={styles.howToStepImg}>
                  <img src={s.img} alt={s.title} loading="lazy" />
                </div>
                <h3 className={styles.howToStepTitle}>{s.title}</h3>
                <p className={styles.howToStepDesc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================
// PRODUCT — 体験言語（効果断定なし）
// ============================================================
function ProductSection() {
  const forWhom = [
    '乾燥が気になる方',
    '湯上がりをもっと心地よくしたい方',
    'お風呂時間を特別にしたい方',
    '肌にやさしいバスタイムを求める方',
  ]

  return (
    <section className={styles.productSection}>
      <div className={styles.productImgWrap}>
        <img src="/images/water-surface.png" alt="乳青色のお湯が広がる" loading="lazy" />
        <div className={styles.productImgOverlay} />
      </div>

      <div className={styles.productCopy}>
        <span className={styles.sectionEyebrow}>THE SCIENCE</span>
        <h2 className={styles.productHeadline}>
          美容液のようなお湯で、<br />
          夜時間を豊かに。
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
// VALUE
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

        {/* 定期便カード */}
        <div className={styles.teikiCard}>
          <span className={styles.teikiBadge}>定期便</span>
          <p className={styles.teikiPrice}>
            ¥2,970<span className={styles.teikiPriceSub}>/月（税込）</span>
          </p>
          <p className={styles.teikiDiscount}>通常価格より 10% OFF</p>
          <ul className={styles.teikiFeatures}>
            <li>毎月自動でお届け</li>
            <li>いつでも解約OK</li>
            <li>送料無料</li>
          </ul>
          <a href={STRIPE_TEIKI_URL} className={styles.teikiBtn}>
            定期便で始める
            <span className={styles.teikiBtnArrow}>›</span>
          </a>
          <p className={styles.teikiNote}>解約はマイページからいつでも可能</p>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// REVIEW — ④ リアル寄り（Instagram/iPhone感）
// ============================================================
function ReviewSection() {
  const reviews = [
    {
      name: 'M.K',
      attr: '30代・乾燥肌',
      img: '/images/calm-time.png',
      tag: '#バスタイム記録',
      title: '湯上がりの\n感触が違います',
      text: '乾燥しやすい季節も、湯上がりがしっとりやわらかく。毎晩のお風呂が楽しみになりました。',
      daysAgo: '3日前',
    },
    {
      name: 'Y.T',
      attr: '30代・敏感肌',
      img: '/images/quiet-bath-2.png',
      tag: '#自宅スパ',
      title: 'まるで温泉に\n浸かっているみたい',
      text: 'お湯がやわらかくて20分があっという間。体の力がふっと抜けていく感じがします。',
      daysAgo: '1週間前',
    },
    {
      name: 'R.S',
      attr: '20代・混合肌',
      img: '/images/review-real.jpg',
      tag: '#夜の楽しみ',
      title: '青いお湯が、\n毎晩の楽しみに',
      text: 'お湯の色が変わる瞬間がすごく好きで。以来、お風呂が一日のご褒美になりました。',
      daysAgo: '2週間前',
      imgPosition: 'center 65%',
    },
  ]

  return (
    <section className={styles.reviewSection}>
      <div className={styles.sectionInner}>
        <span className={styles.sectionEyebrow}>CUSTOMER VOICE</span>
        <h2 className={styles.sectionTitle}>使っている人の声</h2>
        <div className={styles.sectionDivider} />

        <div className={styles.reviewGrid}>
          {reviews.map((r) => (
            <div key={r.name} className={styles.reviewPostCard}>
              {/* ④ Instagramストーリーバー */}
              <div className={styles.reviewStoryBar} aria-hidden="true" />
              <div className={styles.reviewPostImg}>
                <img src={r.img} alt="" loading="lazy" style={r.imgPosition ? { objectPosition: r.imgPosition } : undefined} />
                <div className={styles.reviewPostImgGrad} />
                <span className={styles.reviewPostTag}>{r.tag}</span>
              </div>
              <div className={styles.reviewPostBody}>
                <div className={styles.reviewMeta}>
                  <div className={styles.reviewAvatar}>
                    {r.name.charAt(0)}
                  </div>
                  <div className={styles.reviewMetaInfo}>
                    <span className={styles.reviewName}>{r.name}</span>
                    <span className={styles.reviewAttr}>{r.attr}</span>
                  </div>
                  <span className={styles.reviewDaysAgo}>{r.daysAgo}</span>
                </div>
                <div className={styles.reviewStars}>★★★★★</div>
                <p className={styles.reviewTitle} style={{ whiteSpace: 'pre-line' }}>{r.title}</p>
                <p className={styles.reviewText}>{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================
// NIGHT ENDING — ⑥ 感情訴求の締め「今夜入りたい」
// ============================================================
function NightEndingSection() {
  return (
    <section className={styles.nightEndingSection}>
      <div className={styles.nightEndingGlow} aria-hidden="true" />
      <div className={styles.nightEndingContent}>
        <span className={styles.nightEndingEye}>TONIGHT</span>
        <p className={styles.nightEndingMain}>
          一日の終わりに、<br />
          青いお湯の中へ。
        </p>
        <div className={styles.nightEndingDivider} />
        <p className={styles.nightEndingSub}>
          それだけで、夜の空気が変わる。<br />
          明日の朝が、少し楽しみになる。
        </p>
        <span className={styles.nightEndingBrand}>SILICA LAGOON</span>
      </div>
    </section>
  )
}

// ============================================================
// CTA — ⑦ 商品画像立体感強化 + 感情訴求コピー
// ============================================================
function CtaSection({ shopUrl }) {
  const trust = [
    { icon: '🚚', text: '迅速発送' },
    { icon: '🇯🇵', text: '国内製造' },
  ]

  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaInner}>
        <span className={styles.ctaEyebrow}>今夜、夜時間が変わる。</span>

        {/* ⑦ 商品画像 — 立体感・ガラス感を強化 */}
        <div className={styles.ctaProductWrap}>
          <div className={styles.ctaProductGlow} aria-hidden="true" />
          <img
            src="/images/product-720g-front.jpg"
            alt="SILICA LAGOON BATH SALT"
            className={styles.ctaProductImg}
            loading="lazy"
          />
        </div>

        <h2 className={styles.ctaHeadline}>
          今夜、<br />
          青いお湯に浸かってみる。
        </h2>

        <p className={styles.ctaPrice}>
          ¥3,300<span className={styles.ctaPriceSub}>（税込・送料無料）</span>
        </p>
        <p className={styles.ctaPriceDetail}>720g・約12回分</p>

        <a href={shopUrl} className={styles.ctaMainBtn}>
          今夜の体験をはじめる
          <span className={styles.ctaMainBtnArrow}>›</span>
        </a>

        {/* 定期便サブボタン */}
        <a href={STRIPE_TEIKI_URL} className={styles.ctaTeikiBtn}>
          <span className={styles.ctaTeikiBtnBadge}>定期便</span>
          ¥2,970/月で続ける（10% OFF）
          <span className={styles.ctaTeikiBtnArrow}>›</span>
        </a>
        <p className={styles.ctaTeikiNote}>いつでも解約OK　送料無料</p>

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <title>お湯が変わると、夜が変わる — SILICA LAGOON BATH SALT</title>
        <meta
          name="description"
          content="乳青色のお湯が、夜時間を変える。自宅でブルーラグーン体験。バタフライピー・シリカ配合バスソルト 720g・約12回分。"
        />
        <link rel="canonical" href="https://silica-lagoon.company/lp2" />
        <meta property="og:title" content="お湯が変わると、夜が変わる — SILICA LAGOON BATH SALT" />
        <meta property="og:description" content="&ldquo;塗る&rdquo;から&ldquo;浸かる&rdquo;へ。乳青色のやわらかなお湯で、夜時間を変える新習慣。" />
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

        {/* 世界観一文 */}
        <QuickBenefit />

        {/* 価格・内容量 */}
        <TrustStrip />

        {/* CTA ① — FV直後 */}
        <InlineCta shopUrl={shopUrl} text="自宅で青のスパ体験を始める" />

        {/* 悩み共感 */}
        <PainSection />
        <BenefitSection />
        <QuoteSection />

        {/* 青く変化する演出 */}
        <TransformSection />

        {/* 乳青色ビジュアル */}
        <AtmosphereSection />

        {/* ⑤ 使用フロー */}
        <HowToSection />

        {/* CTA ② */}
        <InlineCta shopUrl={shopUrl} text="乳青色のバスタイムを体験する" />

        {/* 成分・設計思想 */}
        <ProductSection />

        {/* CTA ③ */}
        <InlineCta shopUrl={shopUrl} text="湯上がりのやわらかさを体験する" />

        {/* 価格説明 */}
        <ValueSection />

        {/* CTA ④ */}
        <InlineCta shopUrl={shopUrl} text="送料無料で試してみる" />

        {/* ④ リアルレビュー */}
        <ReviewSection />

        {/* CTA ⑤ */}
        <InlineCta shopUrl={shopUrl} text="自分へのご褒美時間を始める" />

        {/* ⑥ 感情訴求の締め */}
        <NightEndingSection />

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
