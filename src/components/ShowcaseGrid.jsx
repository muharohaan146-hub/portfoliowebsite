import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

/* ─── Geometric SVG Placeholders ─────────────────────────────────────
   Replace the <svg> blocks with <img src="your-image.jpg"> tags once
   you have real photography / screenshots.
   ─────────────────────────────────────────────────────────────────── */

function AiWebPlaceholder() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="800" height="450" fill="#1e1e1e" />
      {/* Fake browser chrome */}
      <rect x="0" y="0" width="800" height="36" fill="#2a2a2a" />
      <circle cx="20" cy="18" r="5" fill="#444" />
      <circle cx="36" cy="18" r="5" fill="#444" />
      <circle cx="52" cy="18" r="5" fill="#444" />
      <rect x="100" y="10" width="500" height="16" rx="8" fill="#333" />
      {/* Content lines */}
      <rect x="60" y="80" width="300" height="28" rx="4" fill="#2e2e2e" />
      <rect x="60" y="122" width="200" height="16" rx="4" fill="#252525" />
      <rect x="60" y="150" width="240" height="16" rx="4" fill="#252525" />
      <rect x="60" y="195" width="120" height="36" rx="18" fill="#f2f2f2" />
      {/* Right panel grid */}
      <rect x="420" y="60" width="170" height="120" rx="8" fill="#272727" />
      <rect x="604" y="60" width="170" height="120" rx="8" fill="#272727" />
      <rect x="420" y="195" width="170" height="120" rx="8" fill="#272727" />
      <rect x="604" y="195" width="170" height="120" rx="8" fill="#272727" />
      {/* Label */}
      <text x="400" y="380" textAnchor="middle" fill="rgba(242,242,242,0.25)" fontFamily="sans-serif" fontSize="12" letterSpacing="4">
        AI WEB PROJECT — FEATURED
      </text>
    </svg>
  )
}

function AthleticPlaceholder() {
  return (
    <svg viewBox="0 0 300 500" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="300" height="500" fill="#111111" />
      {/* Concentric circles */}
      <circle cx="150" cy="200" r="120" fill="none" stroke="rgba(242,242,242,0.06)" strokeWidth="1" />
      <circle cx="150" cy="200" r="90"  fill="none" stroke="rgba(242,242,242,0.08)" strokeWidth="1" />
      <circle cx="150" cy="200" r="60"  fill="none" stroke="rgba(242,242,242,0.10)" strokeWidth="1" />
      <circle cx="150" cy="200" r="30"  fill="rgba(242,242,242,0.12)" />
      {/* Cross lines */}
      <line x1="150" y1="80" x2="150" y2="320" stroke="rgba(242,242,242,0.1)" strokeWidth="1" />
      <line x1="30"  y1="200" x2="270" y2="200" stroke="rgba(242,242,242,0.1)" strokeWidth="1" />
      {/* Label */}
      <text x="150" y="420" textAnchor="middle" fill="rgba(242,242,242,0.3)" fontFamily="sans-serif" fontSize="11" letterSpacing="6">
        ATHLETIC
      </text>
      <text x="150" y="440" textAnchor="middle" fill="rgba(242,242,242,0.3)" fontFamily="sans-serif" fontSize="11" letterSpacing="6">
        PORTRAIT
      </text>
    </svg>
  )
}

function MathPlaceholder() {
  return (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="500" height="500" fill="#f2f2f2" />
      {/* Concentric squares */}
      <rect x="100" y="100" width="300" height="300" fill="none" stroke="rgba(30,30,30,0.08)" strokeWidth="1" />
      <rect x="130" y="130" width="240" height="240" fill="none" stroke="rgba(30,30,30,0.10)" strokeWidth="1" />
      <rect x="160" y="160" width="180" height="180" fill="none" stroke="rgba(30,30,30,0.12)" strokeWidth="1" />
      <rect x="190" y="190" width="120" height="120" fill="rgba(30,30,30,0.06)" stroke="rgba(30,30,30,0.15)" strokeWidth="1" />
      <rect x="220" y="220" width="60"  height="60"  fill="rgba(30,30,30,0.12)" />
      {/* Diagonal lines */}
      <line x1="100" y1="100" x2="400" y2="400" stroke="rgba(30,30,30,0.07)" strokeWidth="1" />
      <line x1="400" y1="100" x2="100" y2="400" stroke="rgba(30,30,30,0.07)" strokeWidth="1" />
      <text x="250" y="470" textAnchor="middle" fill="rgba(30,30,30,0.2)" fontFamily="sans-serif" fontSize="10" letterSpacing="5">
        MATH · PHYSICS · LOGIC
      </text>
    </svg>
  )
}

function Ai2Placeholder() {
  return (
    <svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="700" height="320" fill="#111111" />
      {/* Horizontal data bars */}
      {[0,1,2,3,4,5].map((i) => (
        <g key={i}>
          <rect x="60" y={40 + i * 38} width={120 + Math.sin(i * 1.4) * 80 + 200} height="22" rx="3" fill={`rgba(242,242,242,${0.04 + i * 0.03})`} />
          <rect x="60" y={40 + i * 38} width={80 + i * 30} height="22" rx="3" fill={`rgba(242,242,242,${0.10 + i * 0.04})`} />
        </g>
      ))}
      <text x="350" y="290" textAnchor="middle" fill="rgba(242,242,242,0.2)" fontFamily="sans-serif" fontSize="10" letterSpacing="5">
        AI PROJECT No.2
      </text>
    </svg>
  )
}

/* ─── Grid items config ──────────────────────────────────────────────── */
const GRID_ITEMS = [
  {
    id: 'ai1',
    label: 'Featured AI Project',
    tag: 'AI Web Development',
    colSpan: 'md:col-span-8',
    aspectRatio: '16/9',
    borderRadius: '4px',
    content: <AiWebPlaceholder />,
    dark: false,
  },
  {
    id: 'athletic',
    label: 'Athletic Portrait',
    tag: 'Sport',
    colSpan: 'md:col-span-4',
    aspectRatio: '3/5',
    borderRadius: '9999px',
    content: <AthleticPlaceholder />,
    dark: true,
  },
  {
    id: 'math',
    label: 'Mathematical Beauty',
    tag: 'Physics & Maths',
    colSpan: 'md:col-span-5',
    aspectRatio: '1/1',
    borderRadius: '9999px',
    content: <MathPlaceholder />,
    dark: false,
  },
  {
    id: 'ai2',
    label: 'AI Project No.2',
    tag: 'AI Web Development',
    colSpan: 'md:col-span-7',
    aspectRatio: '16/7',
    borderRadius: '4px',
    content: <Ai2Placeholder />,
    dark: true,
  },
]

function GridCard({ item, inView, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className={`${item.colSpan} col-span-12`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.77, 0, 0.175, 1] }}
      style={{ position: 'relative' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div
        style={{
          width: '100%',
          aspectRatio: item.aspectRatio,
          borderRadius: item.borderRadius,
          overflow: 'hidden',
          position: 'relative',
          cursor: 'pointer',
        }}
      >
        {/* SVG / img */}
        <div
          style={{
            width: '100%',
            height: '100%',
            filter: hovered ? 'grayscale(0%)' : 'grayscale(20%)',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'filter 400ms cubic-bezier(0.77,0,0.175,1), transform 400ms cubic-bezier(0.77,0,0.175,1)',
          }}
        >
          {item.content}
        </div>

        {/* Hover overlay for athletic pill */}
        {item.id === 'athletic' && (
          <motion.div
            initial={false}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(17,17,17,0.55)',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <span
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: '1px solid rgba(242,242,242,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: '#f2f2f2', fontFamily: 'var(--font-clash)', fontWeight: 700, fontSize: '28px' }}>★</span>
            </span>
            <span style={{ color: '#f2f2f2', fontFamily: 'var(--font-satoshi)', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Man of the Match
            </span>
          </motion.div>
        )}
      </div>

      {/* Label beneath */}
      <div
        style={{
          marginTop: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: item.borderRadius === '9999px' ? '0' : '0',
        }}
      >
        <span style={{ fontFamily: 'var(--font-clash)', fontWeight: 700, fontSize: '15px', letterSpacing: '-0.03em', color: '#111111' }}>
          {item.label}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: '11px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#838282',
          }}
        >
          {item.tag}
        </span>
      </div>
    </motion.div>
  )
}

export default function ShowcaseGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <section
      id="projects"
      ref={ref}
      className="px-8 md:px-16 py-24 md:py-40"
      style={{ borderTop: '1px solid rgba(30,30,30,0.08)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-14">
        <div className="flex items-center gap-6">
          <div style={{ width: '1px', height: '48px', background: 'rgba(30,30,30,0.15)' }} />
          <span
            className="font-satoshi uppercase"
            style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', letterSpacing: '0.14em', color: '#838282' }}
          >
            Selected Work
          </span>
        </div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-clash text-right"
          style={{
            fontFamily: 'var(--font-clash)',
            fontSize: 'clamp(24px, 3vw, 44px)',
            fontWeight: 700,
            letterSpacing: '-0.05em',
            color: '#111111',
          }}
        >
          Projects &<br />Portfolio
        </motion.h2>
      </div>

      {/* 12-column grid */}
      <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
        {GRID_ITEMS.map((item, i) => (
          <GridCard key={item.id} item={item} inView={inView} index={i} />
        ))}
      </div>
    </section>
  )
}
