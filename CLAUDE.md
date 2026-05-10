# Amped Web Solutions — Project Context

## Company
**Amped Web Solutions** · Tallahassee, FL · 2026  
Services: Websites · AI Agents · Digital Advertising  
Audience: Local businesses in Tallahassee and beyond  
Voice: Direct · Local · Results-first · Energetic

Taglines: "Get Found. Get Paid." / "Your business, turned up." / "Online by tomorrow." / "24/7 AI. 0 missed leads."

## Stack
- Next.js 16 (App Router)
- Tailwind CSS v4 (CSS-based config in `app/globals.css` via `@theme`)
- JavaScript (no TypeScript)
- Google Fonts: Bebas Neue + Barlow Condensed + Barlow

## Pages
| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.js` | Home — hero, value prop, CTAs |
| `/services` | `app/services/page.js` | Services — Websites, AI Agents, Digital Ads |
| `/about` | `app/about/page.js` | About — story, mission, why us |
| `/contact` | `app/contact/page.js` | Contact — form or contact info |

## Brand Colors
| Token | Hex | Use |
|-------|-----|-----|
| Electric | `#F5E03A` | Primary accent — logos, CTAs, highlights |
| Volt | `#FF6B1A` | Sparingly — labels, alerts, section tags |
| Blackout | `#080810` | Primary background |
| Charcoal | `#13131F` | Cards, panels, surfaces |
| Dark | `#1C1C2E` | Secondary dark surfaces |
| Bone | `#F0EEE6` | Primary text |
| Storm | `#8A8A9A` | Secondary text, captions |
| Lt Gray | `#C4C4D4` | Body text on dark |

**Rules:** Electric Yellow is the single hero accent — always on Blackout. Never on white. Volt Orange is secondary signal only. No purple, blue, or green.

## Typography
| Role | Font | Weight | Size | Tracking |
|------|------|--------|------|----------|
| Display | Bebas Neue | — | 48px+ | 3–6px |
| Headline | Barlow Condensed | 700 | 28px | 1px, UPPERCASE |
| Subhead | Barlow Condensed | 300 | 16px | 4–5px, UPPERCASE |
| Label | Barlow Condensed | 600 | 11px | 4px, UPPERCASE, orange |
| Body | Barlow | 300 | 14–15px | normal |

## Logo
- Icon: Lightning bolt SVG `<polygon points="36,0 12,42 28,42 20,80 50,30 32,30" fill="#F5E03A"/>`
- Wordmark: "AMPED" (Bebas Neue) + "Web Solutions" (Barlow Condensed 300, wide tracking)
- See `components/BoltIcon.js` for reusable component

## Buttons — sharp corners, NO border-radius
- Primary: `bg #F5E03A`, `color #080810`, Barlow Condensed 700, 13px, letter-spacing 3px
- Outline: `border 1.5px #F5E03A`, `color #F5E03A`, same font
- Orange CTA: `bg #FF6B1A`, `color #F0EEE6`, same font

## Dividers
- Heavy: 3px solid `#F5E03A`
- Standard: 1px solid `#F5E03A`
- Subtle: 1px `rgba(245,224,58,0.3)`
- Section: bolt icon between two `rgba(255,255,255,0.1)` lines

## File Conventions
- Components: `PascalCase.js` in `components/`
- Pages: `page.js` inside route folders under `app/`
- Shared CSS vars + Tailwind tokens: `app/globals.css` `@theme` block
- No TypeScript, no CSS modules — inline styles or Tailwind classes

## Layout Reference
Inspired by the BEHOSTING template structure (layout only, not colors):
- Nav: logo left, links center-right, yellow CTA button right (sticky, dark bg)
- Hero: dark bg, large headline left + visual right, two CTA buttons, social links
- Features strip: 3-column icon + short text on slightly lighter bg
- Services: alternating rows (text left/visual right, then flip)
- Content sections: Charcoal `#13131F` instead of white
