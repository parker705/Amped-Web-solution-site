'use client'
import { useState } from 'react'
import BoltIcon from '@/components/BoltIcon'

const nextSteps = [
  { num: '01', title: 'We Reach Out', body: 'Within 24 hours of your inquiry, a member of our team contacts you directly to schedule your discovery call.' },
  { num: '02', title: 'Discovery Call', body: 'We learn about your business, your goals, and exactly what you need. No sales pressure — just a focused conversation.' },
  { num: '03', title: 'Your Demo Is Built', body: 'Within 3 business days of your call, we deliver a fully designed, custom demo of your website. You see it before you spend a dollar.' },
]

const label = { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', color: '#FF6B1A', marginBottom: '20px' }

export default function Contact() {
  const [form, setForm] = useState({ name: '', business: '', phone: '', email: '', website: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    background: '#080810',
    border: '1px solid rgba(245,224,58,0.2)',
    color: '#F0EEE6',
    fontFamily: "'Barlow', sans-serif",
    fontWeight: 300,
    fontSize: '15px',
    padding: '14px 18px',
    outline: 'none',
    boxSizing: 'border-box',
  }

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: '#080810', padding: '120px 24px 80px', borderBottom: '3px solid #F5E03A' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={label}>Let's Talk</div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(48px, 7vw, 88px)', letterSpacing: '3px', color: '#F5E03A', lineHeight: 0.9, marginBottom: '32px' }}>
            Start with a<br />Conversation.
          </h1>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '18px', color: '#C4C4D4', lineHeight: 1.7, maxWidth: '560px' }}>
            Every great website starts with a discovery call. Tell us about your business and we'll take it from there — custom demo included.
          </p>
        </div>
      </section>

      {/* ── FORM + DETAILS ── */}
      <section className="section-md" style={{ background: '#13131F' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="grid-form">

            {/* Form */}
            <div>
              <div style={label}>Get In Touch</div>

              {submitted ? (
                <div style={{ background: '#080810', border: '1px solid rgba(245,224,58,0.3)', padding: '48px 40px', textAlign: 'center' }}>
                  <BoltIcon size={40} />
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', letterSpacing: '2px', color: '#F5E03A', marginTop: '20px', marginBottom: '12px' }}>
                    Message Received.
                  </h3>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '15px', color: '#C4C4D4', lineHeight: 1.7 }}>
                    We'll be in touch within 24 hours to schedule your discovery call.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="form-row">
                    <div>
                      <label style={{ display: 'block', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: '#8A8A9A', marginBottom: '8px' }}>Full Name *</label>
                      <input required name="name" value={form.name} onChange={handleChange} placeholder="Your full name" style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: '#8A8A9A', marginBottom: '8px' }}>Business Name *</label>
                      <input required name="business" value={form.business} onChange={handleChange} placeholder="Your business name" style={inputStyle} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div>
                      <label style={{ display: 'block', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: '#8A8A9A', marginBottom: '8px' }}>Phone Number *</label>
                      <input required name="phone" value={form.phone} onChange={handleChange} placeholder="(850) 000-0000" style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: '#8A8A9A', marginBottom: '8px' }}>Email Address *</label>
                      <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@yourbusiness.com" style={inputStyle} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: '#8A8A9A', marginBottom: '8px' }}>Current Website (optional)</label>
                    <input name="website" value={form.website} onChange={handleChange} placeholder="https://yourwebsite.com" style={inputStyle} />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: '#8A8A9A', marginBottom: '8px' }}>I'm Interested In *</label>
                    <select required name="service" value={form.service} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="" disabled>Select a service</option>
                      <option value="web">Web Design</option>
                      <option value="ads">Facebook Advertising</option>
                      <option value="both">Both</option>
                      <option value="unsure">Not Sure Yet</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: '#8A8A9A', marginBottom: '8px' }}>Tell Us About Your Business</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="What you do, where you're located, what you're looking for..." style={{ ...inputStyle, resize: 'vertical' }} />
                  </div>

                  <div>
                    <button type="submit" className="btn-primary" style={{ background: '#F5E03A', color: '#080810', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', padding: '18px 48px', border: 'none', cursor: 'pointer', display: 'inline-block' }}>
                      Send My Request →
                    </button>
                    <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '12px', color: '#8A8A9A', marginTop: '16px' }}>
                      We respond to every inquiry within 24 hours. Most projects begin within days of your first call.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div>
                <div style={label}>Contact Details</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ fontSize: '14px', marginTop: '2px' }}>📍</span>
                    <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '14px', color: '#C4C4D4', lineHeight: 1.6 }}>
                      Based in Tallahassee, FL<br />Serving businesses across Florida and nationwide
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '14px' }}>📧</span>
                    <a href="mailto:hello@ampedwebsolutions.com" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '14px', letterSpacing: '1px', color: '#F5E03A', textDecoration: 'none' }}>
                      hello@ampedwebsolutions.com
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '14px' }}>📞</span>
                    <a href="tel:8500000000" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '14px', letterSpacing: '1px', color: '#F5E03A', textDecoration: 'none' }}>
                      (850) 000-0000
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ height: '1px', background: 'rgba(245,224,58,0.15)' }} />

              <div>
                <div style={label}>Response Time</div>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '14px', color: '#8A8A9A', lineHeight: 1.7 }}>
                  We respond to every inquiry within 24 hours. Most projects begin within days of your first call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ── */}
      <section className="section-md" style={{ background: '#080810' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={label}>After You Reach Out</div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '2px', color: '#F0EEE6', lineHeight: 1 }}>
              Here's exactly what happens next.
            </h2>
          </div>

          <div className="grid-3col">
            {nextSteps.map((s) => (
              <div key={s.num} style={{ background: '#13131F', padding: '40px 32px', borderTop: '3px solid #F5E03A' }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '56px', letterSpacing: '2px', color: 'rgba(245,224,58,0.15)', lineHeight: 1, marginBottom: '4px' }}>
                  {s.num}
                </div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '16px', letterSpacing: '1px', textTransform: 'uppercase', color: '#F0EEE6', marginBottom: '12px', marginTop: '8px' }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '14px', color: '#8A8A9A', lineHeight: 1.7 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '64px' }}>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 300, fontSize: '18px', letterSpacing: '2px', color: '#8A8A9A', textTransform: 'uppercase' }}>
              The first step costs nothing but a conversation.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
