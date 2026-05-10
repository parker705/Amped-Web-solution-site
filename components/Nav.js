'use client'
import Link from 'next/link'
import { useState } from 'react'
import BoltIcon from './BoltIcon'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{ background: '#080810', borderBottom: '1px solid rgba(245,224,58,0.12)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <BoltIcon size={28} />
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px', letterSpacing: '4px', color: '#F5E03A', lineHeight: 1 }}>
              AMPED
            </div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 300, fontSize: '9px', letterSpacing: '6px', textTransform: 'uppercase', color: '#F0EEE6', marginTop: '2px' }}>
              Web Solutions
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C4C4D4', textDecoration: 'none' }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" style={{ background: '#F5E03A', color: '#080810', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', padding: '12px 24px', textDecoration: 'none' }}>
            Get Started
          </Link>
        </nav>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#F5E03A' }} className="mobile-burger">
          <span style={{ fontSize: '24px' }}>{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#13131F', borderTop: '1px solid rgba(245,224,58,0.1)', padding: '16px 24px' }} className="mobile-menu">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ display: 'block', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: '16px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C4C4D4', textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} style={{ display: 'inline-block', marginTop: '16px', background: '#F5E03A', color: '#080810', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', padding: '12px 24px', textDecoration: 'none' }}>
            Get Started
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: block !important; }
        }
      `}</style>
    </header>
  )
}
