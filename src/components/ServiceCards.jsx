import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

/* ─── Geometric SVG Icons ────────────────────────────────────────────── */
function IconAI() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
      <rect x="8"  y="8"  width="20" height="20" stroke="#111111" strokeWidth="1.5" />
      <rect x="36" y="8"  width="20" height="20" stroke="#111111" strokeWidth="1.5" />
      <rect x="8"  y="36" width="20" height="20" stroke="#111111" strokeWidth="1.5" />
      <circle cx="46" cy="46" r="9" stroke="#111111" strokeWidth="1.5" />
      <line x1="18" y1="28" x2="18" y2="36" stroke="#111111" strokeWidth="1.5" />
      <line x1="46" y1="28" x2="46" y2="37" stroke="#111111" strokeWidth="1.5" />
      <line x1="28" y1="18" x2="36" y2="18" stroke="#111111" strokeWidth="1.5" />
    </svg>
  )
}

function IconPrompt() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
      <polyline points="14,22 22,32 14,42" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="26" y1="42" x2="50" y2="42" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="26" y1="32" x2="42" y2="32" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="14" x2="50" y2="14" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconArch() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
      <polygon points="32,10 54,54 10,54" stroke="#111111" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="32" y1="10" x2="32" y2="54" stroke="#111111" strokeWidth="1.5" />
      <line x1="10" y1="54" x2="54" y2="54" stroke="#111111" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="6" stroke="#111111" strokeWidth="1.5" />
    </svg>
  )
}

const SERVICES = [
  {
    title: 'AI Web\nDevelopment',
    desc: 'End-to-end AI-powered web products — from architecture through to deployment. Built fast, built to last.',
    icon: <IconAI />,
    tag: '01',
  },
  {
    title: 'Prompt\nEngineering',
    desc: 'Crafting precise, structured prompts that make large language models produce predictable, high-quality outputs at scale.',
    icon: <IconPrompt />,
    tag: '02',
  },
  {
    title: 'Logical\nArchitecture',
    desc: 'Designing clean systems with mathematical rigour — component hierarchies, data flow, and logic that scale gracefully.',
    icon: <IconArch />,
    tag: '03',
  },
]

function ServiceCard({ service, inView, index }) {
  const [hovered, setHovered] = useState(false)
  const [iconHovered, setIconHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.14, ease: [0.77, 0, 0.175, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setIconHovered(false) }}
      style={{
        padding: '32px',
        border: '1px solid rgba(30,30,30,0.10)',
        borderRadius: '4px',
        background: hovered ? '#ffffff' : 'transparent',
        transition: 'background 240ms ease',
        display: 'flex',
        flexDirection: 'column',
        gap: '28px',
        cursor: 'default',
      }}
    >
      {/* Top row: tag + icon container */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span
          style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#b6b5b5',
          }}
        >
          {service.tag}
        </span>

        {/* Icon box — rotates 12° on hover */}
        <div
          onMouseEnter={() => setIconHovered(true)}
          onMouseLeave={() => setIconHovered(false)}
          style={{
            width: '64px',
            height: '64px',
            border: '1px solid rgba(30,30,30,0.14)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: iconHovered || hovered ? 'rotate(12deg)' : 'rotate(0deg)',
            transition: 'transform 320ms cubic-bezier(0.77, 0, 0.175, 1)',
            background: hovered ? 'rgba(17,17,17,0.04)' : 'transparent',
          }}
        >
          {service.icon}
        </div>
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-clash)',
          fontWeight: 700,
          fontSize: 'clamp(20px, 2.2vw, 28px)',
          letterSpacing: '-0.04em',
          lineHeight: 1.05,
          color: '#111111',
          whiteSpace: 'pre-line',
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-satoshi)',
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: 1.75,
          color: '#838282',
          flexGrow: 1,
        }}
      >
        {service.desc}
      </p>

      {/* Arrow CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span
          style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: '12px',
            letterSpacing: '0.10em',
            textTransform: 'uppercase',
            color: '#111111',
          }}
        >
          Learn more
        </span>
        <motion.span
          animate={{ x: hovered ? 4 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ fontSize: '14px', color: '#111111', display: 'flex', alignItems: 'center' }}
        >
          →
        </motion.span>
      </div>
    </motion.div>
  )
}

export default function ServiceCards() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <section
      id="services"
      ref={ref}
      className="px-8 md:px-16 py-24 md:py-40"
      style={{ borderTop: '1px solid rgba(30,30,30,0.08)' }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
        <div className="flex items-center gap-6">
          <div style={{ width: '1px', height: '48px', background: 'rgba(30,30,30,0.15)' }} />
          <span
            className="font-satoshi uppercase"
            style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', letterSpacing: '0.14em', color: '#838282' }}
          >
            Services
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
          className="font-clash md:text-right"
          style={{
            fontFamily: 'var(--font-clash)',
            fontSize: 'clamp(24px, 3vw, 40px)',
            fontWeight: 700,
            letterSpacing: '-0.05em',
            color: '#111111',
          }}
        >
          What I bring<br />to the table.
        </motion.h2>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.tag} service={service} inView={inView} index={i} />
        ))}
      </div>
    </section>
  )
}
