# DESIGN SYSTEM
## Destiny Mabwe — Scrum Master & Technical PM Portfolio
### Inspired by: aidaoliva.studio

---

## 01 · BRAND IDENTITY

**Site purpose:** A portfolio that positions Destiny as a Scrum Master and aspiring Technical PM — someone who brings both structured agility and a builder's mindset to product teams. The site should feel precise, human, and quietly ambitious. Not a generic dev portfolio, not a corporate CV — the personal brand of someone who leads sprints *and* ships code.

**Tone:** Warm authority. Direct but not stiff. The kind of person you'd want running your standup.

**Tagline direction (pick or riff):**
- *"I make teams move."*
- *"Scrum Master. Builder. Dot-connector."*
- *"Where process meets product."*

---

## 02 · COLOR PALETTE

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--color-ink` | Deep Ink | `#1A1A18` | Primary text, nav, headings |
| `--color-paper` | Warm Paper | `#F5F2EC` | Page background |
| `--color-accent` | Sprint Green | `#2D6A4F` | CTAs, hover states, active tags |
| `--color-accent-light` | Sage | `#74B49B` | Subtle highlights, dividers |
| `--color-muted` | Warm Ash | `#8A8A82` | Meta text, labels, captions |
| `--color-overlay` | Ink Overlay | `rgba(26,26,24,0.78)` | Project card hover overlay |
| `--color-surface` | Card Surface | `#EDEAE3` | Card backgrounds, tag pills |

**Rationale:** Warm paper backgrounds feel editorial and human (not cold-tech). The forest green accent connects to growth, delivery, and nature — grounded, not flashy. Avoids the generic dark-mode dev portfolio cliché.

---

## 03 · TYPOGRAPHY

```
Display / Hero:    "Cormorant Garamond" — weights 300, 400, 600
                   Italic variant used for bracketed editorial labels
Body:              "DM Sans" — weights 400, 500
                   Clean, readable, slightly technical feel
Utility / Tags:    "DM Mono" — weight 400
                   Used for category tags, sprint labels, metadata
```

**Import (Google Fonts):**
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@400;500&family=DM+Mono:wght@400&display=swap" rel="stylesheet">
```

**Type Scale:**

| Token | Size | Font | Weight | Use |
|---|---|---|---|---|
| `--text-hero` | clamp(3.5rem, 8vw, 7rem) | Cormorant | 300 | Hero headline |
| `--text-h1` | clamp(2.5rem, 5vw, 4.5rem) | Cormorant | 400 | Section headings |
| `--text-h2` | clamp(1.75rem, 3vw, 2.5rem) | Cormorant | 400 | Project titles |
| `--text-label` | 0.7rem | DM Mono | 400 | Category tags, eyebrows |
| `--text-body` | 1rem / 1.6 line-height | DM Sans | 400 | Paragraphs |
| `--text-meta` | 0.85rem | DM Sans | 400 | Captions, dates |
| `--text-cta` | 0.9rem | DM Mono | 400 | Buttons, links |

**Bracket convention (key signature element):**
Use `[ italic serif ]` bracketed phrases as editorial modifiers next to major headlines — borrowed from aidaoliva but made your own. Example:
```
Scrum Master.
[ and builder of things ]
```

---

## 04 · SPACING SYSTEM

Based on a 4pt base. All spacing tokens in CSS custom properties:

```css
--space-xs:   4px
--space-sm:   8px
--space-md:   16px
--space-lg:   32px
--space-xl:   64px
--space-2xl:  96px
--space-3xl:  128px
--space-section: clamp(80px, 12vw, 160px)
```

Section padding: `padding-top: var(--space-section); padding-bottom: var(--space-section);`

---

## 05 · LAYOUT

**Grid:**
```css
--grid-max: 1320px;
--grid-gutter: clamp(24px, 5vw, 80px);
/* 12-column, with full-bleed breakouts for project images */
```

**Breakpoints:**
```
Mobile:  < 768px
Tablet:  768px – 1024px
Desktop: > 1024px
```

**Layout Zones:**

```
┌─────────────────────────────────────────┐
│  NAV: logo left · links right           │
├─────────────────────────────────────────┤
│                                         │
│  HERO: full-height, centered text       │
│  headline + bracket modifier + tagline  │
│                                         │
├─────────────────────────────────────────┤
│  WORK GRID: 2-column masonry-ish        │
│  ┌──────────┐  ┌──────────┐            │
│  │ IMG CARD │  │ IMG CARD │            │
│  │ [hover]  │  │ [hover]  │            │
│  └──────────┘  └──────────┘            │
│  ┌────────────────────────┐            │
│  │      WIDE CARD         │            │
│  └────────────────────────┘            │
├─────────────────────────────────────────┤
│  ABOUT: split — text left, photo right  │
├─────────────────────────────────────────┤
│  SKILLS / CERTIFICATIONS                │
├─────────────────────────────────────────┤
│  CONTACT: large CTA + email link        │
├─────────────────────────────────────────┤
│  FOOTER: minimal                        │
└─────────────────────────────────────────┘
```

---

## 06 · SIGNATURE COMPONENT — IMAGE HOVER CARDS

This is the signature interaction. Lifted directly from aidaoliva's pattern and adapted.

**Default state:**
- Full-bleed project image fills the card
- Project name visible in bottom-left, in small DM Mono
- Category tag in top-left

**Hover state:**
- Dark overlay fades in over the image (`rgba(26,26,24,0.78)`)
- Project title, one-line description, and a `[ view project → ]` link appear in white
- Overlay animates with `opacity` transition (300ms ease)
- A subtle `scale(1.03)` on the image creates depth

**HTML Structure:**
```html
<article class="project-card">
  <div class="card-image-wrap">
    <img src="..." alt="Project name" class="card-img" />
    <div class="card-overlay">
      <span class="overlay-tag">Scrum Master · Sprint 4</span>
      <h3 class="overlay-title">Project Name</h3>
      <p class="overlay-desc">One-line context about what this was.</p>
      <a href="#" class="overlay-link">[ view project → ]</a>
    </div>
  </div>
  <footer class="card-footer">
    <span class="card-name">Project Name</span>
    <span class="card-type">Agile Delivery</span>
  </footer>
</article>
```

**CSS:**
```css
.project-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.card-image-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/5; /* portrait for most cards */
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 400ms ease;
}

.project-card:hover .card-img {
  transform: scale(1.04);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: var(--color-overlay);
  opacity: 0;
  transition: opacity 300ms ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--space-lg);
  color: var(--color-paper);
}

.project-card:hover .card-overlay {
  opacity: 1;
}

.overlay-tag {
  font-family: 'DM Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent-light);
  margin-bottom: var(--space-sm);
}

.overlay-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.75rem;
  font-weight: 400;
  margin: 0 0 var(--space-sm);
}

.overlay-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(245,242,236,0.8);
  margin: 0 0 var(--space-md);
}

.overlay-link {
  font-family: 'DM Mono', monospace;
  font-size: 0.8rem;
  color: var(--color-paper);
  text-decoration: none;
  letter-spacing: 0.05em;
  border-bottom: 1px solid var(--color-accent-light);
  padding-bottom: 2px;
  width: fit-content;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-sm) 0;
}

.card-name {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-ink);
}

.card-type {
  font-family: 'DM Mono', monospace;
  font-size: 0.7rem;
  color: var(--color-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
```

---

## 07 · NAVIGATION

**Style:** Minimal top bar. No background fill on scroll (transparent on light pages, sticky with subtle border-bottom after scroll).

```
[ destiny mabwe ]          Work   About   CV ↗   Contact
```

- Logo: `Cormorant Garamond` italic, 1.1rem, ink
- Nav links: `DM Mono`, 0.75rem, uppercase, letter-spacing: 0.1em
- Active link: `--color-accent`
- Mobile: hamburger → full-screen overlay menu

---

## 08 · BUTTONS & LINKS

**Primary CTA:**
```css
.btn-primary {
  font-family: 'DM Mono', monospace;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-paper);
  background: var(--color-accent);
  padding: 12px 28px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: background 200ms ease;
}

.btn-primary:hover {
  background: #1e4d38; /* darker shade */
}
```

**Ghost / Secondary:**
```css
.btn-ghost {
  font-family: 'DM Mono', monospace;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  color: var(--color-ink);
  background: transparent;
  border: 1px solid var(--color-ink);
  padding: 11px 27px;
  border-radius: 2px;
  transition: all 200ms ease;
}

.btn-ghost:hover {
  background: var(--color-ink);
  color: var(--color-paper);
}
```

**Text links:**
```css
.link-underline {
  font-family: 'DM Mono', monospace;
  font-size: 0.85rem;
  color: var(--color-accent);
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  padding-bottom: 1px;
}
```

---

## 09 · TAG / BADGE PILLS

Used for project categories (Agile Delivery, Scrum Master, Dev Project, Case Study, etc.):

```css
.tag {
  font-family: 'DM Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted);
  background: var(--color-surface);
  padding: 4px 10px;
  border-radius: 2px;
  display: inline-block;
}

.tag--accent {
  color: var(--color-accent);
  background: rgba(45, 106, 79, 0.1);
}
```

---

## 10 · SECTION PATTERNS

### Hero Section
```
Full viewport height (min-height: 100svh)
Background: var(--color-paper)
Content centered, left-aligned on desktop

[ scrum master ]                    ← DM Mono, italic label

Destiny                             ← Cormorant, 7rem, weight 300
Mabwe.                              ← same, with period
[ and builder of things ]           ← Cormorant italic, muted

→ One-line tagline in DM Sans below

CTA: [see my work] and [download CV ↗]
```

### Work Section
```
Section eyebrow: "SELECTED WORK" in DM Mono, uppercase, muted
Heading: "What I've shipped." in Cormorant

Grid: 2 columns on desktop, 1 column on mobile
Card aspect ratios: alternate between 4:5 and 16:9 (wide)
```

### About Section
```
Split 50/50 layout on desktop
Left: Bio text, certifications list
Right: Portrait photo (same hover-effect vibe but static)

Certifications displayed as:
  PSM I · Scrum.org
  CAPM · PMI
  BSc Information Systems · UJ 2025
In DM Mono, small, with a subtle left border in --color-accent
```

### Skills Section
```
Horizontal list or 3-column grid
Categories: Agile / Scrum | Tools & Tech | PM Artifacts
Each item in DM Sans body with a small DM Mono label above
```

### Contact Section
```
Large Cormorant heading (centered):
  "Let's build                     ← line 1
   something that ships."          ← line 2, with accent on "ships"

Email as large clickable text: hello@destinymabwe.com
LinkedIn + GitHub icon links beneath
```

---

## 11 · MOTION & ANIMATION

**Guiding principle:** Purposeful, not decorative. Every animation should aid comprehension or reward attention.

| Element | Animation | Duration | Trigger |
|---|---|---|---|
| Hero text lines | Fade up (translateY 20px → 0, opacity 0 → 1) | 600ms staggered | Page load |
| Project cards | Fade in on scroll | 400ms ease-out | IntersectionObserver |
| Image hover overlay | Opacity 0 → 1 | 300ms ease | :hover |
| Image on hover | scale(1.04) | 400ms ease | :hover |
| Nav links | Underline grows left → right | 200ms ease | :hover |
| CTA buttons | Background colour shift | 200ms ease | :hover |

**Reduced motion:** Always wrap non-essential animations in:
```css
@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; animation: none !important; }
}
```

---

## 12 · PROJECT CARD CONTENT STRUCTURE

Each project card in the portfolio should contain these content fields:

```
image:       High-quality screenshot or mockup
tag:         "Scrum Master" | "Agile Delivery" | "Dev Project" | "PM Artifact" | "Side Project"
title:       Project/artifact name
context:     One line — what it was and who it was for
result:      One concrete outcome ("Reduced sprint drift by X%", "Shipped in 6 weeks")
link_type:   "Live site" | "Case study" | "GitHub" | "PDF artifact"
link_url:    URL or path
```

**Example cards to populate:**
1. **Siyaya Mobility Systems** — Product backlog & roadmap (Agile Delivery)
2. **Purpose Camp Oct 2026** — Full PM workbook: Gantt, WBS, Risk Log (PM Artifact)
3. **Kindness Currency** — Next.js web app, design system, full build (Dev Project)
4. **Scrum.org PSM I** — Certification case study write-up (Case Study)
5. **Sprint Facilitation** — Sprint retrospective and velocity artifacts (Scrum Master)

---

## 13 · CSS CUSTOM PROPERTIES — MASTER FILE

```css
:root {
  /* Colors */
  --color-ink: #1A1A18;
  --color-paper: #F5F2EC;
  --color-accent: #2D6A4F;
  --color-accent-light: #74B49B;
  --color-muted: #8A8A82;
  --color-overlay: rgba(26, 26, 24, 0.78);
  --color-surface: #EDEAE3;

  /* Typography */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'DM Sans', system-ui, sans-serif;
  --font-mono: 'DM Mono', 'Courier New', monospace;

  /* Type scale */
  --text-hero: clamp(3.5rem, 8vw, 7rem);
  --text-h1: clamp(2.5rem, 5vw, 4.5rem);
  --text-h2: clamp(1.75rem, 3vw, 2.5rem);
  --text-label: 0.7rem;
  --text-body: 1rem;
  --text-meta: 0.85rem;
  --text-cta: 0.8rem;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 32px;
  --space-xl: 64px;
  --space-2xl: 96px;
  --space-3xl: 128px;
  --space-section: clamp(80px, 12vw, 160px);

  /* Layout */
  --grid-max: 1320px;
  --grid-gutter: clamp(24px, 5vw, 80px);

  /* Radii — deliberately minimal */
  --radius-sm: 2px;
  --radius-md: 4px;

  /* Transitions */
  --transition-fast: 200ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 400ms ease;
}
```

---

## 14 · AGENT BUILD INSTRUCTIONS

When building from this design system, follow this order:

1. **Base reset + CSS custom properties** (Section 13)
2. **Typography global styles** (apply scale from Section 03)
3. **Navigation component** (Section 07)
4. **Hero section** (Section 10 — Hero)
5. **Image hover card component** (Section 06 — full CSS included)
6. **Work grid layout** (Section 05 — 2-column, alternating ratios)
7. **About section** (Section 10 — About)
8. **Skills section** (Section 10 — Skills)
9. **Contact section** (Section 10 — Contact)
10. **Footer** (minimal: name + year + socials)
11. **Motion layer** (Section 11 — add after layout is confirmed)
12. **Responsive pass** (mobile-first adjustments, collapse grid to 1 column)

**Do not deviate from the color palette or typography stack without flagging it first.**
The bracket `[ editorial label ]` pattern in Cormorant italic is a non-negotiable signature element.
All project cards must use the hover overlay interaction from Section 06.

---

*Design system version 1.0 — Destiny Mabwe Portfolio · June 2026*