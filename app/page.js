import Link from 'next/link'
import BoltIcon from '@/components/BoltIcon'
import LightningCanvas from '@/components/LightningCanvas'
import BoltSpin3D from '@/components/BoltSpin3D'

const trustItems = [
  { icon: '📍', text: 'Tallahassee-Based Studio' },
  { icon: '⚡', text: '48-Hour Delivery' },
  { icon: '🖥️', text: 'Custom Demo Before You Commit' },
  { icon: '💰', text: 'Flat-Rate Pricing' },
  { icon: '✅', text: 'You Own Your Site' },
]

const blueprintSteps = [
  { num: '01', title: 'The Discovery Call', body: 'We start with a simple conversation. We learn about your business, your goals, and what you want your website to do for you. No sales pitch — just a focused 20-minute call to make sure we build exactly what you need.' },
  { num: '02', title: 'The Intake Form', body: 'After your call, we send you a short form to capture the details — your logo, photos, services, contact info, and anything else that makes your business yours. This is how we make sure your demo is built around your brand, not a generic template.' },
  { num: '03', title: 'Your Custom Demo', body: 'Within 3 business days, our studio delivers a fully designed, working demo of your new website. We walk you through it live on a screen-share call and make any changes you want — as many rounds as it takes until it\'s exactly right.' },
  { num: '04', title: 'Launch', body: 'Once you love it, we make it official. Your site goes live, you own it outright, and your business is open to the internet 24/7.' },
]

const services = [
  { tag: 'Service 01', title: 'Professional Web Design', body: 'Custom-built, mobile-optimized, and SEO-ready websites designed to make your business look credible and turn visitors into paying customers. Delivered in 48 hours.', cta: 'Get a Quote' },
  { tag: 'Service 02', title: 'Facebook & Social Ads', body: 'Targeted ad campaigns that put your business in front of the right Tallahassee customers at exactly the right moment. We handle everything — you just watch it grow.', cta: 'Get a Quote' },
]

const whoWeServe = [
  { icon: '🏆', title: 'No Experience Needed', body: 'We handle everything. You just show up to the discovery call.' },
  { icon: '⚡', title: 'Any Industry', body: 'From the first call to launch day, our process works for any type of local business.' },
  { icon: '📍', title: 'Tallahassee & Beyond', body: 'Based locally, serving businesses across Florida and nationwide.' },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: '#080810', minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
        {/* Animated lightning */}
        <LightningCanvas />

        {/* Storm cloud gradients */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 140% 80% at 15% -5%, rgba(6,5,18,0.85) 0%, transparent 50%), radial-gradient(ellipse 100% 60% at 85% 5%, rgba(10,8,24,0.8) 0%, transparent 45%), radial-gradient(ellipse 70% 50% at 50% 100%, rgba(4,4,12,0.9) 0%, transparent 40%), radial-gradient(ellipse 60% 50% at 30% 50%, rgba(245,224,58,0.04) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 1 }} />

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px', width: '100%' }}>
          <div className="grid-hero">
            {/* Left — copy */}
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', color: '#FF6B1A', marginBottom: '24px' }}>
                Tallahassee Web Design & Marketing Studio
              </div>
              <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(56px, 8vw, 96px)', letterSpacing: '3px', color: '#F5E03A', lineHeight: 0.9, marginBottom: '24px' }}>
                Get Found.<br />Get Paid.
              </h1>
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 300, fontSize: '20px', letterSpacing: '1px', color: '#C4C4D4', lineHeight: 1.5, marginBottom: '40px', maxWidth: '480px' }}>
                The Tallahassee web design studio that shows you the finished product before any contracts are signed.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary" style={{ background: '#F5E03A', color: '#080810', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', padding: '16px 32px', textDecoration: 'none', display: 'inline-block' }}>
                  Get Your Free Demo
                </Link>
                <Link href="/services" className="btn-outline" style={{ border: '1.5px solid #F5E03A', color: '#F5E03A', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', padding: '16px 32px', textDecoration: 'none', display: 'inline-block' }}>
                  Explore Our Work
                </Link>
              </div>
            </div>

            {/* Right — 3D spinning bolt */}
            <div className="hero-visual" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BoltSpin3D size={320} />
            </div>
          </div>
        </div>
        </div>

        {/* Trust bar */}
        <div style={{ borderTop: '1px solid rgba(245,224,58,0.12)', position: 'relative', zIndex: 2, overflow: 'hidden' }}>
          {/* Desktop */}
          <div className="trust-bar trust-bar--desktop" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {trustItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px' }}>{item.icon}</span>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', color: '#C4C4D4', whiteSpace: 'nowrap' }}>{item.text}</span>
                {i < trustItems.length - 1 && <span className="trust-sep" style={{ marginLeft: '8px' }}>·</span>}
              </div>
            ))}
          </div>
          {/* Mobile scrolling ticker — items duplicated for seamless loop */}
          <div className="trust-bar trust-bar--mobile">
            {[...trustItems, ...trustItems].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                <span style={{ fontSize: '14px' }}>{item.icon}</span>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', color: '#C4C4D4', whiteSpace: 'nowrap' }}>{item.text}</span>
                <span style={{ color: 'rgba(245,224,58,0.3)', marginLeft: '8px' }}>·</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="section-lg" style={{ background: '#13131F' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', color: '#FF6B1A', marginBottom: '24px' }}>
            Why It Matters
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '2px', color: '#F0EEE6', lineHeight: 1, marginBottom: '32px' }}>
            Every day without a website<br />is a customer you didn't catch.
          </h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '17px', color: '#C4C4D4', lineHeight: 1.8, marginBottom: '16px' }}>
            When someone searches for your business in Tallahassee and finds nothing — no website, no way to reach you, no way to learn about you — they move on in seconds. Then they call your competitor.
          </p>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '17px', color: '#C4C4D4', lineHeight: 1.8, marginBottom: '48px' }}>
            At Amped Web Solutions, we fix that. Fast.
          </p>
          <Link href="/contact" className="btn-primary" style={{ background: '#F5E03A', color: '#080810', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', padding: '16px 40px', textDecoration: 'none', display: 'inline-block' }}>
            See How It Works
          </Link>
        </div>
      </section>

      {/* ── AMPED BLUEPRINT ── */}
      <section className="section-lg" style={{ background: '#080810' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', color: '#FF6B1A', marginBottom: '16px' }}>
              The Amped Blueprint
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '2px', color: '#F0EEE6', lineHeight: 1 }}>
              From first call to live website.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2px' }}>
            {blueprintSteps.map((step) => (
              <div key={step.num} style={{ background: '#13131F', padding: '40px 32px', borderTop: '3px solid #F5E03A' }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '64px', letterSpacing: '2px', color: 'rgba(245,224,58,0.15)', lineHeight: 1, marginBottom: '-8px' }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '18px', letterSpacing: '1px', textTransform: 'uppercase', color: '#F0EEE6', marginBottom: '16px', marginTop: '8px' }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '14px', color: '#8A8A9A', lineHeight: 1.7 }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '64px' }}>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 300, fontSize: '16px', letterSpacing: '3px', textTransform: 'uppercase', color: '#8A8A9A', marginBottom: '32px' }}>
              No templates. No guesswork. No surprises.
            </p>
            <Link href="/contact" className="btn-primary" style={{ background: '#F5E03A', color: '#080810', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', padding: '16px 40px', textDecoration: 'none', display: 'inline-block' }}>
              Book Your Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-lg" style={{ background: '#13131F' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', color: '#FF6B1A', marginBottom: '16px' }}>
              What We Offer
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '2px', color: '#F0EEE6', lineHeight: 1 }}>
              Two ways we grow your business online.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2px' }}>
            {services.map((s) => (
              <div key={s.tag} style={{ background: '#080810', padding: '48px 40px', borderTop: '3px solid #F5E03A', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', color: '#FF6B1A', marginBottom: '20px' }}>
                  {s.tag}
                </div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '28px', letterSpacing: '1px', color: '#F5E03A', marginBottom: '20px', lineHeight: 1.1 }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '15px', color: '#C4C4D4', lineHeight: 1.7, marginBottom: '40px', flex: 1 }}>
                  {s.body}
                </p>
                <Link href="/contact" className="btn-outline" style={{ background: 'transparent', border: '1.5px solid #F5E03A', color: '#F5E03A', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none', display: 'inline-block', alignSelf: 'flex-start' }}>
                  {s.cta}
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '15px', color: '#8A8A9A' }}>
              Not sure which service is right for you?{' '}
              <Link href="/contact" style={{ color: '#F5E03A', textDecoration: 'none', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, letterSpacing: '1px' }}>
                Start with a free discovery call
              </Link>
              {' '}and we'll point you in the right direction.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section className="section-lg" style={{ background: '#080810', paddingBottom: '64px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', color: '#FF6B1A', marginBottom: '16px' }}>
              What We Build
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '2px', color: '#F0EEE6', lineHeight: 1, marginBottom: '16px' }}>
              Custom sites for real businesses.
            </h2>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '15px', color: '#8A8A9A', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
              Every site is built from scratch around your brand. Here's what that looks like across different industries.
            </p>
          </div>

          <div className="grid-3col">
            {/* Card 1 — Restaurant */}
            <div style={{ overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>
              <div style={{ background: '#2c2c2c', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#28ca41' }} />
                <div style={{ flex: 1, background: '#3c3c3c', height: '13px', marginLeft: '8px', borderRadius: '2px', display: 'flex', alignItems: 'center', padding: '0 6px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '7px', color: '#888' }}>embergrille.com</span>
                </div>
              </div>
              <div style={{ background: '#1a0a04', padding: '7px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #8B1A1A' }}>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '11px', color: '#c9a84c', letterSpacing: '2px' }}>EMBER GRILLE</span>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {['Menu','About'].map(l => <span key={l} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '6px', color: 'rgba(255,255,255,0.35)', letterSpacing: '1px' }}>{l}</span>)}
                  <div style={{ padding: '3px 7px', background: '#8B1A1A' }}><span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '6px', color: 'white', fontWeight: 700 }}>RESERVE</span></div>
                </div>
              </div>
              <div style={{ background: 'linear-gradient(150deg,#100504,#1e100a)', padding: '18px 12px 14px' }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '6px', color: '#c9a84c', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>Est. 2019 · Downtown Tallahassee</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '16px', color: 'white', lineHeight: 1, letterSpacing: '1px' }}>Southern-Fired</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '16px', color: '#c9a84c', lineHeight: 1, marginBottom: '10px' }}>Perfection.</div>
                <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '6.5px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: '10px' }}>Award-winning cuisine & craft cocktails in the heart of Tallahassee.</div>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ padding: '4px 10px', background: '#8B1A1A' }}><span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '6px', color: 'white', fontWeight: 700 }}>RESERVE A TABLE</span></div>
                  <div style={{ padding: '4px 8px', border: '1px solid rgba(201,168,76,0.4)' }}><span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '6px', color: '#c9a84c' }}>VIEW MENU</span></div>
                </div>
              </div>
              <div style={{ background: '#c9a84c', padding: '7px 12px', display: 'flex', gap: '8px' }}>
                {[{ icon: '🕐', text: 'Mon–Sat 11am–10pm' }, { icon: '📍', text: 'Downtown Tally' }, { icon: '⭐', text: '4.8 Google' }].map((i, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '3px', borderLeft: idx > 0 ? '1px solid rgba(0,0,0,0.12)' : 'none', paddingLeft: idx > 0 ? '8px' : '0' }}>
                    <span style={{ fontSize: '7px' }}>{i.icon}</span>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '6px', color: '#1a0a04', fontWeight: 700 }}>{i.text}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: '#f5f2ec', padding: '10px 12px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '5px' }}>
                  {[{ name: 'Smoked Brisket', price: '$32', bg: 'linear-gradient(135deg,#3d1a0a,#5c2a10)' }, { name: 'Gulf Shrimp', price: '$28', bg: 'linear-gradient(135deg,#1a2d3d,#0d3b52)' }, { name: 'Cast Iron Chkn', price: '$26', bg: 'linear-gradient(135deg,#3d2a10,#5c3d18)' }].map((d, i) => (
                    <div key={i} style={{ background: 'white', overflow: 'hidden' }}>
                      <div style={{ height: '28px', background: d.bg }} />
                      <div style={{ padding: '4px 5px' }}>
                        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '6px', fontWeight: 700, color: '#1a0a04' }}>{d.name}</div>
                        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '6px', color: '#8B1A1A', fontWeight: 700 }}>{d.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ padding: '8px 12px', borderTop: '1px solid rgba(245,224,58,0.1)', background: '#13131F', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#8A8A9A' }}>Restaurant</span>
                <div style={{ width: '6px', height: '6px', background: '#F5E03A', borderRadius: '50%' }} />
              </div>
            </div>

            {/* Card 2 — Home Services */}
            <div style={{ overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>
              <div style={{ background: '#2c2c2c', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#28ca41' }} />
                <div style={{ flex: 1, background: '#3c3c3c', height: '13px', marginLeft: '8px', borderRadius: '2px', display: 'flex', alignItems: 'center', padding: '0 6px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '7px', color: '#888' }}>atlashvac.com</span>
                </div>
              </div>
              <div style={{ background: '#07111f', padding: '7px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #1e6abf' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '16px', height: '16px', background: '#1e6abf', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '8px' }}>❄️</span></div>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '11px', color: 'white', letterSpacing: '2px' }}>ATLAS HVAC</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {['Services','Reviews'].map(l => <span key={l} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '6px', color: 'rgba(255,255,255,0.35)', letterSpacing: '1px' }}>{l}</span>)}
                  <div style={{ padding: '3px 7px', background: '#1e6abf' }}><span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '6px', color: 'white', fontWeight: 700 }}>FREE QUOTE</span></div>
                </div>
              </div>
              <div style={{ background: 'linear-gradient(150deg,#050e1a,#0b1a2e)', padding: '18px 12px 14px' }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '6px', color: '#1e6abf', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>Licensed · Tallahassee & Surrounding Areas</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '16px', color: 'white', lineHeight: 1 }}>Comfort You Can</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '16px', color: '#60a5fa', lineHeight: 1, marginBottom: '10px' }}>Count On.</div>
                <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '6.5px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: '10px' }}>AC repair, heating, installation & maintenance. Same-day service available.</div>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ padding: '4px 10px', background: '#1e6abf' }}><span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '6px', color: 'white', fontWeight: 700 }}>CALL NOW · 24/7</span></div>
                  <div style={{ padding: '4px 8px', border: '1px solid rgba(96,165,250,0.4)' }}><span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '6px', color: '#60a5fa' }}>OUR SERVICES</span></div>
                </div>
              </div>
              <div style={{ background: '#f0f4f8', padding: '10px 12px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '5px' }}>
                  {[{ icon: '❄️', label: 'AC Repair' }, { icon: '🔥', label: 'Heating' }, { icon: '🔧', label: 'Install' }, { icon: '📋', label: 'Maintenance' }].map((s, i) => (
                    <div key={i} style={{ background: 'white', padding: '6px 4px', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                      <div style={{ fontSize: '10px', marginBottom: '3px' }}>{s.icon}</div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '5.5px', color: '#07111f', fontWeight: 700 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: '#07111f', padding: '7px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#60a5fa', fontSize: '8px' }}>★★★★★</span>
                <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '6.5px', color: 'rgba(255,255,255,0.35)' }}>4.9 · 280 Google Reviews</span>
              </div>
              <div style={{ padding: '8px 12px', borderTop: '1px solid rgba(245,224,58,0.1)', background: '#13131F', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#8A8A9A' }}>Home Services</span>
                <div style={{ width: '6px', height: '6px', background: '#F5E03A', borderRadius: '50%' }} />
              </div>
            </div>

            {/* Card 3 — Boutique Retail */}
            <div style={{ overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>
              <div style={{ background: '#2c2c2c', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#28ca41' }} />
                <div style={{ flex: 1, background: '#3c3c3c', height: '13px', marginLeft: '8px', borderRadius: '2px', display: 'flex', alignItems: 'center', padding: '0 6px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '7px', color: '#888' }}>magnoliaco.com</span>
                </div>
              </div>
              <div style={{ background: '#faf9f7', padding: '7px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <span style={{ fontFamily: 'Georgia, serif', fontSize: '11px', color: '#2c2416', letterSpacing: '2px' }}>MAGNOLIA CO.</span>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {['Shop','About','Contact'].map(l => <span key={l} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '6px', color: 'rgba(0,0,0,0.35)', letterSpacing: '1px' }}>{l}</span>)}
                  <span style={{ fontSize: '10px' }}>🛍️</span>
                </div>
              </div>
              <div style={{ background: 'linear-gradient(150deg,#fdf9f4,#f5ede0)', padding: '18px 12px 14px' }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '6px', color: '#9c7c38', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '6px' }}>Tallahassee's Favorite Boutique</div>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '15px', color: '#2c2416', lineHeight: 1.1, marginBottom: '10px', fontStyle: 'italic' }}>Curated Style,<br />Locally Loved.</div>
                <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '6.5px', color: 'rgba(0,0,0,0.4)', lineHeight: 1.6, marginBottom: '10px' }}>Handpicked clothing, gifts, and home goods from women-owned brands across the South.</div>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ padding: '4px 10px', background: '#2c2416' }}><span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '6px', color: 'white', fontWeight: 700, letterSpacing: '1px' }}>SHOP NOW</span></div>
                  <div style={{ padding: '4px 8px', border: '1px solid rgba(44,36,22,0.3)' }}><span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '6px', color: '#2c2416' }}>NEW ARRIVALS</span></div>
                </div>
              </div>
              <div style={{ background: '#f0ebe2', padding: '10px 12px' }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '8px', color: '#2c2416', textAlign: 'center', marginBottom: '6px', fontStyle: 'italic' }}>New Arrivals</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '4px' }}>
                  {['linear-gradient(135deg,#d4a8a0,#c4928a)', 'linear-gradient(135deg,#a8b8c4,#8098a8)', 'linear-gradient(135deg,#c4b88a,#b0a070)'].map((bg, i) => (
                    <div key={i} style={{ background: bg, height: '32px' }} />
                  ))}
                </div>
              </div>
              <div style={{ background: '#faf9f7', padding: '6px 12px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '6px', color: 'rgba(0,0,0,0.35)', textAlign: 'center' }}>Free shipping on orders over $75 · Mon–Sat 10am–7pm</div>
              </div>
              <div style={{ padding: '8px 12px', borderTop: '1px solid rgba(245,224,58,0.1)', background: '#13131F', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#8A8A9A' }}>Boutique Retail</span>
                <div style={{ width: '6px', height: '6px', background: '#F5E03A', borderRadius: '50%' }} />
              </div>
            </div>
          </div>

          <p style={{ textAlign: 'center', marginTop: '40px', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 300, fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase', color: '#8A8A9A' }}>
            Your site will be built the same way — custom, from the ground up.
          </p>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="section-lg" style={{ background: '#080810' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '80px' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
            <BoltIcon size={16} />
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
          </div>

          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', color: '#FF6B1A', marginBottom: '16px' }}>
              Who We Work With
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '2px', color: '#F0EEE6', lineHeight: 1, marginBottom: '24px' }}>
              Built for every business that's ready to get online.
            </h2>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '17px', color: '#C4C4D4', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
              If your business is great at what it does but invisible online, Amped Web Solutions was built for you. We work with local businesses across Tallahassee — regardless of industry, size, or technical experience.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2px' }}>
            {whoWeServe.map((item) => (
              <div key={item.title} style={{ background: '#13131F', padding: '40px 32px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase', color: '#F5E03A', marginBottom: '12px' }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '14px', color: '#8A8A9A', lineHeight: 1.7 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: '#F5E03A', padding: '100px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '3px', color: '#080810', lineHeight: 0.95, marginBottom: '24px' }}>
            Your competitors already<br />have a website.
          </h2>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 300, fontSize: '20px', letterSpacing: '1px', color: '#13131F', lineHeight: 1.6, marginBottom: '16px' }}>
            Every day you're not online is a day they're getting your customers.
          </p>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '16px', color: 'rgba(8,8,16,0.65)', lineHeight: 1.7, marginBottom: '48px' }}>
            Let's fix that — starting with a free discovery call and a custom demo built around your business.
          </p>
          <Link href="/contact" className="btn-dark" style={{ background: '#080810', color: '#F5E03A', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', padding: '18px 48px', textDecoration: 'none', display: 'inline-block' }}>
            Book Your Discovery Call
          </Link>
        </div>
      </section>
    </>
  )
}
