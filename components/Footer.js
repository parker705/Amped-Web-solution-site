import Link from 'next/link'
import BoltIcon from './BoltIcon'

export default function Footer() {
  return (
    <footer style={{ background: '#080810', borderTop: '3px solid #F5E03A', padding: '64px 24px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '64px' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <BoltIcon size={24} />
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '22px', letterSpacing: '4px', color: '#F5E03A' }}>AMPED</div>
            </div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 300, fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#8A8A9A', marginBottom: '16px' }}>Web Solutions</div>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '13px', color: '#8A8A9A', lineHeight: 1.7 }}>
              Websites · AI Agents · Digital Advertising<br />Tallahassee, FL
            </p>
          </div>

          {/* Nav */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#FF6B1A', marginBottom: '20px' }}>Navigate</div>
            {[['Home', '/'], ['Services', '/services'], ['About', '/about'], ['Contact', '/contact']].map(([label, href]) => (
              <Link key={href} href={href} style={{ display: 'block', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 300, fontSize: '14px', letterSpacing: '1px', color: '#C4C4D4', textDecoration: 'none', marginBottom: '10px' }}>
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#FF6B1A', marginBottom: '20px' }}>Contact</div>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '13px', color: '#C4C4D4', lineHeight: 1.8 }}>
              Tallahassee, FL<br />
              <a href="mailto:ampedwebsolutions@gmail.com" style={{ color: '#F5E03A', textDecoration: 'none' }}>ampedwebsolutions@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 300, fontSize: '11px', letterSpacing: '2px', color: '#8A8A9A' }}>
            © 2026 Amped Web Solutions · All rights reserved
          </p>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 300, fontSize: '11px', letterSpacing: '2px', color: '#8A8A9A', textTransform: 'uppercase' }}>
            Tallahassee, FL · 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
