import Link from 'next/link'
import BoltIcon from '@/components/BoltIcon'

const founders = [
  { name: 'Parker Cohen', role: 'Co-Founder & Creative Director', bio: 'Parker conceived Amped Web Solutions from the ground up — developing the brand, the process, and the technical infrastructure that powers everything the studio delivers. From the first wireframe to the final launch, Parker oversees the design, development, and strategy behind every client project. He also manages the financial and operational backbone that keeps Amped running at the standard clients expect.' },
  { name: 'Ryan Lazarus', role: 'Co-Founder & Director of Client Relations', bio: 'Ryan leads every client relationship at Amped — from the first discovery call to the moment a site goes live. His focus is simple: make sure every business that works with Amped feels heard, understood, and genuinely taken care of. Ryan brings the energy, the communication, and the follow-through that turns first-time clients into long-term partners.' },
]

const values = [
  { title: 'You See It Before You Sign It', body: 'Every client gets a fully designed, custom demo of their website before committing to anything. We believe you should love what you\'re buying before you buy it.' },
  { title: '48-Hour Delivery', body: 'We don\'t make you wait weeks to see results. Our studio is built for fast, efficient delivery without sacrificing quality. Most clients have a live site within days of their first call.' },
  { title: 'No Templates. No Shortcuts.', body: 'Every website we build is designed specifically for the client in front of us — their brand, their market, their customers. Cookie-cutter doesn\'t exist here.' },
  { title: 'Real People. Real Communication.', body: 'When you work with Amped, you work directly with the founders. No account managers, no outsourcing, no chasing down replies. Just direct, professional communication from start to finish.' },
]

const stats = [
  { value: '48HR', label: 'Average Site Delivery' },
  { value: '100%', label: 'Client Ownership of Every Site' },
  { value: '∞', label: 'Revision Rounds During Demo Process', font: "'Georgia', serif" },
]

const label = { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', color: '#FF6B1A', marginBottom: '20px' }

export default function About() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: '#080810', padding: '120px 24px 80px', borderBottom: '3px solid #F5E03A' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={label}>Who We Are</div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(48px, 7vw, 88px)', letterSpacing: '3px', color: '#F5E03A', lineHeight: 0.9, marginBottom: '32px' }}>
            Built on a<br />Simple Belief.
          </h1>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 300, fontSize: '24px', letterSpacing: '2px', textTransform: 'uppercase', color: '#C4C4D4', lineHeight: 1.4 }}>
            Great businesses deserve to be found.
          </p>
        </div>
      </section>

      {/* ── FOUNDING STORY ── */}
      <section className="section-md" style={{ background: '#13131F' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="grid-story">
            <div>
              <div style={label}>Our Story</div>
              <div style={{ width: '40px', height: '3px', background: '#F5E03A', marginBottom: '32px' }} />
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '80px', letterSpacing: '3px', color: 'rgba(245,224,58,0.08)', lineHeight: 1 }}>2026</div>
            </div>
            <div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '28px', letterSpacing: '1px', textTransform: 'uppercase', color: '#F0EEE6', lineHeight: 1.2, marginBottom: '28px' }}>
                We started Amped because the problem was obvious.
              </h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '16px', color: '#C4C4D4', lineHeight: 1.8, marginBottom: '20px' }}>
                Across Florida and beyond, thousands of exceptional local businesses — the kind with loyal customers, years of experience, and real expertise — were completely invisible online. Not because they weren't good enough. Because no one had built them a digital presence worth finding.
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '16px', color: '#C4C4D4', lineHeight: 1.8, marginBottom: '20px' }}>
                Amped Web Solutions was founded to change that. We built a studio around one core mission: give every business — regardless of size or industry — a professional, high-performing web presence that works as hard as they do. Fast turnaround, transparent pricing, and a process designed around the client from day one.
              </p>
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '16px', letterSpacing: '2px', color: '#F5E03A', textTransform: 'uppercase' }}>
                That's not a tagline. That's how we operate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section className="section-md" style={{ background: '#080810' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={label}>The Founders</div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '2px', color: '#F0EEE6', lineHeight: 1 }}>
              The people behind the work.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2px' }}>
            {founders.map((f) => (
              <div key={f.name} style={{ background: '#13131F', padding: '48px 40px', borderTop: '3px solid #F5E03A' }}>
                <div style={{ width: '72px', height: '72px', background: '#080810', border: '1.5px solid rgba(245,224,58,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '28px' }}>
                  <BoltIcon size={28} />
                </div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '36px', letterSpacing: '3px', color: '#F5E03A', lineHeight: 1, marginBottom: '8px' }}>
                  {f.name}
                </h3>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#FF6B1A', marginBottom: '24px' }}>
                  {f.role}
                </div>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '14px', color: '#C4C4D4', lineHeight: 1.8 }}>
                  {f.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AMPED ── */}
      <section className="section-md" style={{ background: '#13131F' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={label}>Why Amped</div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '2px', color: '#F0EEE6', lineHeight: 1 }}>
              What makes us different isn't just<br />what we build — it's how we build it.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2px' }}>
            {values.map((v, i) => (
              <div key={i} style={{ background: '#080810', padding: '40px 32px' }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '48px', letterSpacing: '2px', color: 'rgba(245,224,58,0.15)', lineHeight: 1, marginBottom: '4px' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '16px', letterSpacing: '1px', textTransform: 'uppercase', color: '#F5E03A', marginBottom: '12px', marginTop: '4px' }}>
                  {v.title}
                </h3>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '14px', color: '#8A8A9A', lineHeight: 1.7 }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="section-md" style={{ background: '#080810', borderTop: '1px solid rgba(245,224,58,0.12)', borderBottom: '1px solid rgba(245,224,58,0.12)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={label}>Our Mission</div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '2px', color: '#F0EEE6', lineHeight: 1, marginBottom: '32px' }}>
            Our mission is straightforward.
          </h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '17px', color: '#C4C4D4', lineHeight: 1.8, marginBottom: '20px' }}>
            To build the most professional, results-driven web presence possible for every business that works with us — delivered faster, at a fairer price, with more care than any agency our clients have worked with before.
          </p>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '17px', color: '#C4C4D4', lineHeight: 1.8 }}>
            We're students of this industry. We stay ahead of the tools, the trends, and the technology so our clients never have to think about it.
          </p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#13131F', padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="grid-3col">
            {stats.map((s) => (
              <div key={s.label} style={{ background: '#080810', padding: '40px 24px', textAlign: 'center' }}>
                <div style={{ fontFamily: s.font || "'Bebas Neue', sans-serif", fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '3px', color: '#F5E03A', lineHeight: 1, marginBottom: '10px' }}>
                  {s.value}
                </div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 300, fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: '#8A8A9A' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: '#F5E03A', padding: '100px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '3px', color: '#080810', lineHeight: 1, marginBottom: '20px' }}>
            Ready to work with us?
          </h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '17px', color: 'rgba(8,8,16,0.7)', lineHeight: 1.7, marginBottom: '40px' }}>
            Every project starts with a single conversation. Book your free discovery call and let's talk about what Amped can build for your business.
          </p>
          <Link href="/contact" className="btn-dark" style={{ background: '#080810', color: '#F5E03A', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', padding: '18px 48px', textDecoration: 'none', display: 'inline-block' }}>
            Book Your Discovery Call
          </Link>
        </div>
      </section>
    </>
  )
}
