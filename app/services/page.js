import Link from 'next/link'
import BoltIcon from '@/components/BoltIcon'

const webIncludes = [
  { title: 'Custom Design', body: 'Built specifically for your business — not a template with your logo swapped in.' },
  { title: 'Mobile Optimization', body: 'Your site looks and performs perfectly on every device — phone, tablet, and desktop.' },
  { title: 'SEO Foundation', body: 'We build every site with search engine optimization baked in from day one so customers can actually find you on Google.' },
  { title: 'Domain & Hosting Setup', body: 'We handle your domain registration and hosting setup. A simple monthly maintenance fee keeps your site live, secure, and supported.' },
  { title: 'Ongoing Support', body: 'As long as you\'re on a maintenance plan, our studio is in your corner. Updates, changes, questions — we handle it.' },
  { title: 'Logo Design (Add-On)', body: 'Need a logo to go with your new site? Our studio handles that too.' },
]

const adsIncludes = [
  { title: 'Full Campaign Management', body: 'We handle everything from start to finish. Strategy, setup, targeting, creative, copy, and optimization — all of it.' },
  { title: 'Ad Creative & Copywriting', body: 'Our studio designs and writes every ad. Professional visuals and sharp copy that stops the scroll and drives action.' },
  { title: 'Audience Targeting', body: 'We identify and target the exact customers most likely to want what your business offers — locally and beyond.' },
  { title: 'Ongoing Optimization', body: 'We monitor your campaigns constantly and make adjustments to maximize your return on every dollar spent.' },
  { title: 'Monthly Performance Reports', body: 'Every month you receive a clear, straightforward report showing exactly how your ads are performing.' },
  { title: 'No Long-Term Contracts', body: 'Our ad management is month to month. We earn your business every single month — or you walk away. No penalties, no fine print.' },
]

const faqs = [
  { q: 'How long does it take to build my website?', a: 'Most websites are delivered within 48 hours of receiving your completed intake form and assets. Larger, multi-page projects may take slightly longer — we\'ll give you a clear timeline upfront.' },
  { q: 'How many pages does my website include?', a: 'It depends on your business and what you need. We build a custom quote around your specific project. The more pages and features your site requires, the more the investment reflects that.' },
  { q: 'Do I own my website?', a: 'Yes — completely. Once your project is paid in full, the website is yours. The monthly maintenance fee simply keeps it hosted, live, and supported.' },
  { q: 'What if I don\'t have a logo yet?', a: 'No problem. Our studio offers logo design as an add-on service so we can build your entire brand identity alongside your website.' },
  { q: 'Do I have to sign a long-term contract for Facebook Ads?', a: 'Never. Our ad management is entirely month to month. We believe in earning your business through results, not locking you into a contract.' },
  { q: 'What if I want changes after my site launches?', a: 'As long as you\'re on a maintenance plan, our studio handles updates and changes as part of your ongoing support. We\'re with you long after launch day.' },
]

const label = { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', color: '#FF6B1A', marginBottom: '20px' }

function BrowserMockup() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ background: '#0D0D1A', border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.7)' }}>

        {/* Browser chrome */}
        <div style={{ background: '#2c2c2c', padding: '9px 12px', display: 'flex', alignItems: 'center', gap: '6px', borderBottom: '1px solid rgba(0,0,0,0.4)' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28ca41' }} />
          <div style={{ flex: 1, background: '#3c3c3c', height: '20px', marginLeft: '10px', borderRadius: '3px', display: 'flex', alignItems: 'center', padding: '0 8px', gap: '4px' }}>
            <span style={{ fontSize: '8px', color: '#888' }}>🔒</span>
            <span style={{ fontFamily: 'monospace', fontSize: '9px', color: '#aaa', letterSpacing: '0.3px' }}>embergrille.com</span>
          </div>
        </div>

        {/* Site Nav */}
        <div style={{ background: '#1a0a04', padding: '10px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #8B1A1A' }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '16px', color: '#c9a84c', letterSpacing: '3px' }}>EMBER GRILLE</div>
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            {['MENU', 'ABOUT', 'HOURS'].map(l => (
              <span key={l} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '8px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1px' }}>{l}</span>
            ))}
            <div style={{ padding: '4px 10px', background: '#8B1A1A' }}>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '7px', color: 'white', letterSpacing: '1.5px', fontWeight: 700 }}>RESERVE</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <div style={{ background: 'linear-gradient(150deg, #100504 0%, #1e0e08 100%)', padding: '30px 18px 26px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%', background: 'linear-gradient(to left, rgba(139,26,26,0.18), transparent)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '7px', color: '#c9a84c', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>Est. 2019 · Downtown Tallahassee, FL</div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '22px', color: 'white', lineHeight: 1, marginBottom: '2px', letterSpacing: '1px' }}>Southern-Fired</div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '22px', color: '#c9a84c', lineHeight: 1, marginBottom: '14px', letterSpacing: '1px' }}>Perfection.</div>
            <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '7.5px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: '200px', marginBottom: '18px' }}>
              Award-winning cuisine, craft cocktails, and a dining experience unlike anything else in Tallahassee.
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ padding: '7px 14px', background: '#8B1A1A' }}>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '7px', color: 'white', letterSpacing: '1.5px', fontWeight: 700 }}>RESERVE A TABLE</span>
              </div>
              <div style={{ padding: '7px 12px', border: '1px solid rgba(201,168,76,0.5)' }}>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '7px', color: '#c9a84c', letterSpacing: '1px' }}>VIEW MENU</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info strip */}
        <div style={{ background: '#c9a84c', padding: '9px 18px', display: 'flex' }}>
          {[
            { icon: '🕐', text: 'Mon–Sat  11am – 10pm' },
            { icon: '📍', text: '214 S. Monroe St, Tally' },
            { icon: '⭐', text: '4.8 stars on Google' },
          ].map((item, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '5px', borderLeft: i > 0 ? '1px solid rgba(0,0,0,0.15)' : 'none', paddingLeft: i > 0 ? '12px' : '0' }}>
              <span style={{ fontSize: '9px' }}>{item.icon}</span>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '7px', color: '#1a0a04', fontWeight: 700, letterSpacing: '0.3px' }}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Menu preview */}
        <div style={{ background: '#faf7f0', padding: '16px 18px' }}>
          <div style={{ fontFamily: 'serif', fontSize: '11px', color: '#1a0a04', fontWeight: 700, textAlign: 'center', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '3px' }}>Featured Dishes</div>
          <div style={{ height: '1px', background: '#c9a84c', width: '36px', margin: '0 auto 12px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '7px' }}>
            {[
              { name: 'Smoked Brisket', price: '$32', bg: 'linear-gradient(135deg,#3d1a0a,#5c2a10)' },
              { name: 'Gulf Shrimp & Grits', price: '$28', bg: 'linear-gradient(135deg,#1a2d3d,#0d3b52)' },
              { name: 'Cast Iron Chicken', price: '$26', bg: 'linear-gradient(135deg,#3d2a10,#5c3d18)' },
            ].map((dish, i) => (
              <div key={i} style={{ background: 'white', overflow: 'hidden', boxShadow: '0 1px 6px rgba(0,0,0,0.1)' }}>
                <div style={{ height: '38px', background: dish.bg }} />
                <div style={{ padding: '5px 7px' }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '7px', fontWeight: 700, color: '#1a0a04', letterSpacing: '0.5px', marginBottom: '1px' }}>{dish.name}</div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '7px', color: '#8B1A1A', fontWeight: 700 }}>{dish.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ background: '#1a0a04', padding: '10px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '11px', color: '#c9a84c', letterSpacing: '2px' }}>EMBER GRILLE</div>
          <div style={{ display: 'flex', gap: '10px' }}>
            {['Privacy', 'Contact', '© 2026'].map(t => (
              <span key={t} style={{ fontFamily: "'Barlow', sans-serif", fontSize: '6.5px', color: 'rgba(255,255,255,0.25)' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Badge */}
      <div style={{ position: 'absolute', bottom: '-14px', left: '-14px', background: '#F5E03A', padding: '10px 16px' }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '20px', letterSpacing: '2px', color: '#080810', lineHeight: 1 }}>CUSTOM BUILT</div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#080810' }}>No Templates</div>
      </div>
    </div>
  )
}

function PhoneMockup() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: '210px' }}>
        <div style={{ background: '#18182a', border: '2px solid rgba(255,255,255,0.07)', borderRadius: '36px', padding: '12px 7px 8px', boxShadow: '0 24px 72px rgba(0,0,0,0.85)' }}>

          {/* Dynamic island */}
          <div style={{ height: '14px', width: '64px', background: '#080810', borderRadius: '10px', margin: '0 auto 8px' }} />

          {/* Screen */}
          <div style={{ background: '#f0f2f5', borderRadius: '8px', overflow: 'hidden', height: '390px', display: 'flex', flexDirection: 'column' }}>

            {/* FB Header */}
            <div style={{ background: 'white', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: '6px', borderBottom: '1px solid #e4e6ea', flexShrink: 0 }}>
              <span style={{ fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: 900, color: '#1877f2', lineHeight: 1 }}>f</span>
              <div style={{ flex: 1, background: '#f0f2f5', borderRadius: '20px', padding: '4px 10px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ fontSize: '8px', color: '#65676b' }}>🔍</span>
                <span style={{ fontFamily: 'sans-serif', fontSize: '7px', color: '#8a8d91' }}>Search Facebook</span>
              </div>
              <div style={{ width: '24px', height: '24px', background: '#e4e6ea', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '10px' }}>💬</span>
              </div>
            </div>

            {/* Scrollable content */}
            <div style={{ flex: 1, overflow: 'hidden' }}>

            {/* Stories row */}
            <div style={{ background: 'white', padding: '8px 10px 10px', borderBottom: '6px solid #f0f2f5' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                {/* Create story */}
                <div style={{ flexShrink: 0, width: '48px', textAlign: 'center' }}>
                  <div style={{ height: '64px', background: '#e4e6ea', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
                    <div style={{ height: '44px', background: '#c8ccd0' }} />
                    <div style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '20px', background: '#1877f2', borderRadius: '50%', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: 'white', fontSize: '11px', lineHeight: 1, fontWeight: 700 }}>+</span>
                    </div>
                  </div>
                  <div style={{ fontFamily: 'sans-serif', fontSize: '6px', color: '#050505', marginTop: '4px', fontWeight: 600, lineHeight: 1.2 }}>Add Story</div>
                </div>
                {/* Friend stories */}
                {[
                  { initials: 'SM', color: '#e91e63', name: 'Sarah M.' },
                  { initials: 'JR', color: '#ff9800', name: 'Jake R.' },
                  { initials: '⚡', color: '#FF6B1A', name: 'Amped' },
                ].map((s, i) => (
                  <div key={i} style={{ flexShrink: 0, width: '48px', textAlign: 'center' }}>
                    <div style={{ height: '64px', background: `linear-gradient(160deg,${s.color}cc,${s.color}55)`, borderRadius: '10px', border: `2px solid ${s.color}`, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-start', padding: '4px' }}>
                      <div style={{ width: '18px', height: '18px', background: s.color, borderRadius: '50%', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '7px', color: 'white', fontWeight: 700 }}>{s.initials}</span>
                      </div>
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%', background: 'linear-gradient(transparent, rgba(0,0,0,0.45))' }} />
                    </div>
                    <div style={{ fontFamily: 'sans-serif', fontSize: '6px', color: '#050505', marginTop: '4px', fontWeight: 600, lineHeight: 1.2 }}>{s.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Post composer */}
            <div style={{ background: 'white', padding: '8px 10px', borderBottom: '6px solid #f0f2f5' }}>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#1877f2', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '11px', color: 'white', fontWeight: 700 }}>P</span>
                </div>
                <div style={{ flex: 1, background: '#f0f2f5', borderRadius: '20px', padding: '6px 12px' }}>
                  <span style={{ fontFamily: 'sans-serif', fontSize: '7px', color: '#8a8d91' }}>What's on your mind, Parker?</span>
                </div>
              </div>
              <div style={{ borderTop: '1px solid #e4e6ea', paddingTop: '6px', display: 'flex', justifyContent: 'space-around' }}>
                {['🔴 Live', '🖼️ Photo', '😊 Feeling'].map(a => (
                  <span key={a} style={{ fontFamily: 'sans-serif', fontSize: '6.5px', color: '#65676b', fontWeight: 600 }}>{a}</span>
                ))}
              </div>
            </div>

            {/* Friend post */}
            <div style={{ background: 'white', borderBottom: '6px solid #f0f2f5' }}>
              <div style={{ padding: '8px 10px', display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#4caf50', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '11px', color: 'white', fontWeight: 700 }}>J</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'sans-serif', fontSize: '8px', fontWeight: 700, color: '#050505' }}>James Walton</div>
                  <div style={{ fontFamily: 'sans-serif', fontSize: '6.5px', color: '#65676b', display: 'flex', gap: '4px', alignItems: 'center' }}>
                    <span>2h</span><span>·</span><span>🌐</span>
                  </div>
                </div>
                <span style={{ fontSize: '14px', color: '#65676b', marginTop: '-2px' }}>···</span>
              </div>
              <div style={{ padding: '0 10px 8px' }}>
                <div style={{ fontFamily: 'sans-serif', fontSize: '7.5px', color: '#050505', lineHeight: 1.6, marginBottom: '8px' }}>
                  Finally got the business website done — it looks incredible. Anyone in Tallahassee needing web design, seriously hit up Amped 🙌 couldn't be happier with how it turned out
                </div>
                <div style={{ height: '55px', background: 'linear-gradient(135deg,#e8f5e9,#c8e6c9)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '12px' }}>🖥️</span>
                  <span style={{ fontFamily: 'sans-serif', fontSize: '8px', color: '#2e7d32', fontWeight: 600 }}>jameswaltoncleaning.com</span>
                </div>
              </div>
              <div style={{ padding: '5px 10px', display: 'flex', gap: '4px', alignItems: 'center', borderTop: '1px solid #e4e6ea' }}>
                <span style={{ fontSize: '9px' }}>👍❤️</span>
                <span style={{ fontFamily: 'sans-serif', fontSize: '6.5px', color: '#65676b' }}>147  ·  12 comments</span>
              </div>
              <div style={{ display: 'flex', borderTop: '1px solid #e4e6ea' }}>
                {['👍  Like', '💬  Comment', '↗  Share'].map((a, i) => (
                  <div key={i} style={{ flex: 1, padding: '5px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: i < 2 ? '1px solid #e4e6ea' : 'none' }}>
                    <span style={{ fontFamily: 'sans-serif', fontSize: '6.5px', color: '#65676b', fontWeight: 600 }}>{a}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── SPONSORED AD ── */}
            <div style={{ background: 'white' }}>
              {/* Ad header */}
              <div style={{ padding: '8px 10px', display: 'flex', gap: '7px', alignItems: 'flex-start' }}>
                <div style={{ width: '34px', height: '34px', background: '#080810', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(245,224,58,0.3)' }}>
                  <span style={{ fontSize: '16px' }}>⚡</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'sans-serif', fontSize: '8px', fontWeight: 700, color: '#050505' }}>Amped Web Solutions</div>
                  <div style={{ fontFamily: 'sans-serif', fontSize: '6.5px', color: '#65676b', display: 'flex', gap: '3px', alignItems: 'center' }}>
                    <span>Sponsored</span><span>·</span><span>🌐</span>
                  </div>
                </div>
                <span style={{ fontSize: '14px', color: '#65676b' }}>···</span>
              </div>

              {/* Ad copy */}
              <div style={{ padding: '0 10px 10px' }}>
                <div style={{ fontFamily: 'sans-serif', fontSize: '7.5px', color: '#050505', lineHeight: 1.6 }}>
                  Still running your Tallahassee business without a website? We build custom sites in 48 hours — and you see the finished design before you spend a dollar. 🔥
                </div>
              </div>

              {/* Ad creative */}
              <div style={{ height: '110px', background: '#080810', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 60%, rgba(245,224,58,0.1), transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(255,107,26,0.07), transparent 50%)' }} />
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '26px', color: '#F5E03A', letterSpacing: '4px', lineHeight: 1 }}>AMPED</div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 300, fontSize: '8px', color: '#C4C4D4', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '6px' }}>Web Solutions</div>
                  <div style={{ height: '1px', background: 'rgba(245,224,58,0.3)', width: '90px', margin: '0 auto 7px' }} />
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '9px', color: '#F5E03A', letterSpacing: '2px', textTransform: 'uppercase' }}>Get Found. Get Paid.</div>
                </div>
              </div>

              {/* Ad link bar */}
              <div style={{ padding: '8px 10px', background: '#f0f2f5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e4e6ea', borderBottom: '1px solid #e4e6ea' }}>
                <div>
                  <div style={{ fontFamily: 'sans-serif', fontSize: '8px', fontWeight: 700, color: '#050505' }}>AMPEDWEBSOLUTIONS.COM</div>
                  <div style={{ fontFamily: 'sans-serif', fontSize: '7px', color: '#65676b' }}>Custom websites · 48-hour delivery</div>
                </div>
                <div style={{ padding: '5px 10px', background: '#1877f2' }}>
                  <span style={{ fontFamily: 'sans-serif', fontSize: '7px', color: 'white', fontWeight: 700 }}>Learn More</span>
                </div>
              </div>

              {/* Reactions */}
              <div style={{ padding: '5px 10px', display: 'flex', gap: '4px', alignItems: 'center' }}>
                <span style={{ fontSize: '9px' }}>👍❤️😮</span>
                <span style={{ fontFamily: 'sans-serif', fontSize: '6.5px', color: '#65676b' }}>94  ·  8 comments  ·  3 shares</span>
              </div>
              <div style={{ display: 'flex', borderTop: '1px solid #e4e6ea', paddingBottom: '2px' }}>
                {['👍  Like', '💬  Comment', '↗  Share'].map((a, i) => (
                  <div key={i} style={{ flex: 1, padding: '5px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: i < 2 ? '1px solid #e4e6ea' : 'none' }}>
                    <span style={{ fontFamily: 'sans-serif', fontSize: '6.5px', color: '#65676b', fontWeight: 600 }}>{a}</span>
                  </div>
                ))}
              </div>
            </div>

            </div>{/* end scrollable content */}

            {/* iOS Bottom Nav */}
            <div style={{ flexShrink: 0, background: 'white', borderTop: '1px solid #e4e6ea', display: 'flex', paddingBottom: '4px' }}>
              {[
                { icon: '🏠', label: 'Home', active: true },
                { icon: '👥', label: 'Friends', active: false },
                { icon: '▶️', label: 'Video', active: false },
                { icon: '🛍️', label: 'Market', active: false },
                { icon: '☰', label: 'Menu', active: false },
              ].map((tab, i) => (
                <div key={i} style={{ flex: 1, padding: '5px 0 2px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1px', borderTop: tab.active ? '2px solid #1877f2' : '2px solid transparent', marginTop: '-1px' }}>
                  <span style={{ fontSize: '11px', opacity: tab.active ? 1 : 0.4 }}>{tab.icon}</span>
                  <span style={{ fontFamily: 'sans-serif', fontSize: '5px', color: tab.active ? '#1877f2' : '#65676b', fontWeight: tab.active ? 600 : 400 }}>{tab.label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Home indicator */}
          <div style={{ height: '3px', width: '52px', background: 'rgba(255,255,255,0.14)', borderRadius: '2px', margin: '10px auto 0' }} />
        </div>

        {/* Badge */}
        <div style={{ position: 'absolute', top: '-14px', right: '-14px', background: '#FF6B1A', padding: '8px 14px' }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '18px', letterSpacing: '2px', color: '#F0EEE6', lineHeight: 1 }}>FULL</div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#F0EEE6' }}>Management</div>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: '#080810', padding: '120px 24px 80px', borderBottom: '3px solid #F5E03A' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={label}>What We Offer</div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(48px, 7vw, 88px)', letterSpacing: '3px', color: '#F5E03A', lineHeight: 0.9, marginBottom: '32px' }}>
            Professional Services.<br />Real Results.
          </h1>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '18px', color: '#C4C4D4', lineHeight: 1.7, maxWidth: '640px' }}>
            Everything your business needs to get online, get found, and grow — handled entirely by our studio so you can focus on what you do best.
          </p>
        </div>
      </section>

      {/* ── SERVICE 01: WEB DESIGN ── */}
      <section className="section-md" style={{ background: '#13131F' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="grid-2col">

            {/* Left — browser mockup */}
            <div className="hide-mobile" style={{ paddingTop: '8px' }}>
              <BrowserMockup />
            </div>

            {/* Right — text + includes + CTA */}
            <div>
              <div style={{ ...label, color: '#FF6B1A' }}>Service 01</div>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '2px', color: '#F5E03A', lineHeight: 1, marginBottom: '20px' }}>
                Professional<br />Web Design
              </h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '15px', color: '#C4C4D4', lineHeight: 1.8, marginBottom: '12px' }}>
                At Amped Web Solutions, every website we build is designed from scratch around your business — your brand, your services, your customers. No templates. No shortcuts.
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '15px', color: '#C4C4D4', lineHeight: 1.8, marginBottom: '28px' }}>
                Every business is different. The scope of your website directly shapes the investment. We build a quote around your specific project, not a one-size-fits-all price tag.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '32px' }}>
                {webIncludes.map((item) => (
                  <div key={item.title} style={{ background: '#080810', padding: '14px 18px', borderLeft: '3px solid #F5E03A' }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', color: '#F0EEE6', marginBottom: '3px' }}>
                      ✓ {item.title}
                    </div>
                    <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '12px', color: '#8A8A9A', lineHeight: 1.6 }}>
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-primary" style={{ background: '#F5E03A', color: '#080810', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '15px', letterSpacing: '3px', textTransform: 'uppercase', padding: '16px 36px', textDecoration: 'none', display: 'inline-block' }}>
                Get Your Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section style={{ background: '#080810', padding: '60px 24px', borderTop: '1px solid rgba(245,224,58,0.15)', borderBottom: '1px solid rgba(245,224,58,0.15)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 300, fontSize: '22px', letterSpacing: '1px', color: '#C4C4D4', lineHeight: 1.5, fontStyle: 'italic' }}>
            "Before you commit to anything, we build you a fully designed demo of your website. You see it first. You approve it. Then we move forward."
          </p>
        </div>
      </section>

      {/* ── SERVICE 02: FACEBOOK ADS ── */}
      <section className="section-md" style={{ background: '#13131F' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="grid-2col">

            {/* Left — text + includes + CTA */}
            <div>
              <div style={label}>Service 02</div>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '2px', color: '#F5E03A', lineHeight: 1, marginBottom: '20px' }}>
                Facebook &<br />Social Advertising
              </h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '15px', color: '#C4C4D4', lineHeight: 1.8, marginBottom: '12px' }}>
                Your next customer is already on Facebook. Let's make sure they find you.
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '15px', color: '#C4C4D4', lineHeight: 1.8, marginBottom: '28px' }}>
                Running effective Facebook ads takes more than boosting a post. At Amped, we handle every single piece of your ad campaign — so you never have to touch a thing.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '32px' }}>
                {adsIncludes.map((item) => (
                  <div key={item.title} style={{ background: '#080810', padding: '14px 18px', borderLeft: '3px solid #FF6B1A' }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', color: '#F0EEE6', marginBottom: '3px' }}>
                      ✓ {item.title}
                    </div>
                    <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '12px', color: '#8A8A9A', lineHeight: 1.6 }}>
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-primary" style={{ background: '#FF6B1A', color: '#F0EEE6', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '15px', letterSpacing: '3px', textTransform: 'uppercase', padding: '16px 36px', textDecoration: 'none', display: 'inline-block' }}>
                Get Your Custom Quote
              </Link>
            </div>

            {/* Right — phone mockup */}
            <div className="hide-mobile" style={{ paddingTop: '8px' }}>
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS CTA ── */}
      <section className="section-sm" style={{ background: '#080810', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={label}>The Amped Blueprint</div>
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '2px', color: '#F0EEE6', lineHeight: 1, marginBottom: '20px' }}>
            Every service starts the same way — with a conversation.
          </h3>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '16px', color: '#8A8A9A', lineHeight: 1.7, marginBottom: '40px' }}>
            We don't quote blindly. We don't build generically. Every project at Amped starts with a discovery call so we understand exactly what your business needs before we recommend anything.
          </p>
          <Link href="/contact" className="btn-primary" style={{ background: '#F5E03A', color: '#080810', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '15px', letterSpacing: '3px', textTransform: 'uppercase', padding: '16px 40px', textDecoration: 'none', display: 'inline-block' }}>
            Book Your Discovery Call
          </Link>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-md" style={{ background: '#13131F' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={label}>Common Questions</div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '2px', color: '#F0EEE6', lineHeight: 1 }}>
              Answers to what most clients ask first.
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {faqs.map((faq) => (
              <div key={faq.q} style={{ background: '#080810', padding: '28px 32px', borderLeft: '3px solid rgba(245,224,58,0.3)' }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '16px', letterSpacing: '1px', color: '#F5E03A', marginBottom: '10px' }}>
                  {faq.q}
                </div>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '14px', color: '#C4C4D4', lineHeight: 1.7 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: '#F5E03A', padding: '100px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '3px', color: '#080810', lineHeight: 1, marginBottom: '20px' }}>
            Not sure where to start?
          </h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '17px', color: 'rgba(8,8,16,0.7)', lineHeight: 1.7, marginBottom: '40px' }}>
            That's exactly what the discovery call is for. Tell us about your business and we'll tell you exactly what we'd recommend — no pressure, no obligation.
          </p>
          <Link href="/contact" className="btn-dark" style={{ background: '#080810', color: '#F5E03A', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', padding: '18px 48px', textDecoration: 'none', display: 'inline-block' }}>
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}
