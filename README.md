# Muhammad Rohaan — Portfolio

> **Editorial · Luxury-Brutalist · Swiss Minimalist**  
> An Awwwards-style portfolio built with React, Tailwind CSS, and Framer Motion.

---

## ✦ Design Philosophy

A portfolio that captures the dual identity of **Muhammad Rohaan** — the analytical precision of a student excelling in Computing, Physics and Mathematics, fused with the dynamic athletic energy of a dedicated cricketer and footballer.

**Design System:**
- **Typography:** Clash Display (headlines) + Satoshi (body)
- **Palette:** High-contrast monochromatic (`#111111` / `#f2f2f2`)
- **Motif:** Swiss-minimalist grid, sharp 1px borders, zero decorative icons
- **Motion:** Cubic-bezier `(0.77, 0, 0.175, 1)` — the "Quart" easing for all reveals

---

## ✦ Sections

| Section | Description |
|---|---|
| **Navigation** | Sticky frosted-glass header, pill CTA, mobile drawer |
| **Hero** | Typographic Echo Stack — 5-layer "ROHAAN" with depth |
| **Philosophy** | Quote with contrasting serif italic, 3-column pillar grid |
| **Journey** | `AnimatedStepper` — Academic → Athletic → Technical |
| **Showcase Grid** | 12-column masonry with grayscale-to-color hover |
| **Service Cards** | 3 bespoke cards with rotating icon boxes |
| **Footer** | Dark theme, 4-column layout, giant watermark wordmark |

---

## ✦ Tech Stack

| Tool | Purpose |
|---|---|
| **React 18** | Component architecture |
| **Vite 5** | Dev server & bundler |
| **Tailwind CSS 3** | Utility-first styling |
| **Framer Motion 11** | Animations & transitions |
| **Lucide React** | Step indicator icons |
| **Clash Display** | Editorial headline font (Fontshare) |
| **Satoshi** | Clean body font (Fontshare) |

---

## ✦ Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

---

## ✦ Component Architecture

```
src/
├── components/
│   ├── Navigation.jsx     — Sticky header with mobile menu
│   ├── Hero.jsx           — Typographic Echo Stack hero
│   ├── Philosophy.jsx     — 3-pillar narrative section
│   ├── Journey.jsx        — AnimatedStepper journey section
│   ├── AnimatedStepper.jsx— Reusable fluid accordion stepper
│   ├── ShowcaseGrid.jsx   — Asymmetric 12-col masonry grid
│   ├── ServiceCards.jsx   — Bespoke service offering cards
│   └── Footer.jsx         — Dark footer with brand watermark
├── App.jsx
├── main.jsx
└── index.css              — Design tokens & global styles
```

---

## ✦ Key Features

- **AnimatedStepper** — Production-grade accordion stepper with fluid height transitions using Framer Motion's `AnimatePresence`
- **Echo Stack** — 5-layer typographic depth effect using absolute positioning with `0.04em` incremental offsets
- **Clip-path reveals** — All section entries use `inset(100% 0 0 0)` → `inset(0% 0 0 0)` with 700ms reveal easing
- **Grayscale hover** — Showcase grid items transition from `grayscale(20%)` to `grayscale(0%)` with `scale(1.05)`
- **Icon rotation** — Service card icons rotate `12deg` on hover using the reveal cubic-bezier

---

*Designed & built with precision.*
