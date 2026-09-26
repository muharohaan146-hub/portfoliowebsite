import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { AnimatedStepper } from './AnimatedStepper'

/* ─── Grade Card ────────────────────────────────────────────────────── */
const GRADES = [
  { subject: 'Mathematics',   grade: 'A*', highlight: true  },
  { subject: 'Computing',     grade: 'A*', highlight: true  },
  { subject: 'Physics',       grade: 'A*', highlight: true  },
  { subject: 'English Lang.', grade: 'B',  highlight: false },
  { subject: 'Biology',       grade: 'B',  highlight: false },
  { subject: 'History',       grade: 'B',  highlight: false },
]

function GradeCard() {
  return (
    <div>
      <div
        className="grid grid-cols-3 gap-3 mb-6"
        style={{ fontFamily: 'var(--font-satoshi)' }}
      >
        {GRADES.map(({ subject, grade, highlight }) => (
          <div
            key={subject}
            style={{
              padding: '16px 12px',
              border: `1px solid ${highlight ? '#111111' : 'rgba(30,30,30,0.15)'}`,
              borderRadius: '8px',
              background: highlight ? '#111111' : 'transparent',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-clash)',
                fontWeight: 700,
                fontSize: '28px',
                letterSpacing: '-0.04em',
                color: highlight ? '#f2f2f2' : '#111111',
                lineHeight: 1,
                marginBottom: '6px',
              }}
            >
              {grade}
            </span>
            <span
              style={{
                display: 'block',
                fontSize: '10px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: highlight ? 'rgba(242,242,242,0.65)' : '#838282',
                lineHeight: 1.3,
              }}
            >
              {subject}
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          padding: '14px 18px',
          background: 'rgba(30,30,30,0.04)',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '13px', color: '#838282' }}>
          Total GCSEs
        </span>
        <span style={{ fontFamily: 'var(--font-clash)', fontWeight: 700, fontSize: '20px', letterSpacing: '-0.04em', color: '#111111' }}>
          6 — 3A*&nbsp;3B
        </span>
      </div>
    </div>
  )
}

/* ─── Athletic Card ─────────────────────────────────────────────────── */
function AthleticCard() {
  return (
    <div style={{ fontFamily: 'var(--font-satoshi)' }}>
      {/* Cricket block */}
      <div
        style={{
          padding: '20px',
          border: '1px solid rgba(30,30,30,0.12)',
          borderRadius: '10px',
          marginBottom: '12px',
          background: 'rgba(30,30,30,0.02)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <span
              style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', letterSpacing: '0.12em', color: '#838282', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}
            >
              Cricket
            </span>
            <h4
              style={{ fontFamily: 'var(--font-clash)', fontWeight: 700, fontSize: '22px', letterSpacing: '-0.04em', color: '#111111', lineHeight: 1 }}
            >
              Man of the Match
            </h4>
            <p style={{ fontSize: '13px', color: '#838282', marginTop: '8px', lineHeight: 1.6 }}>
              Multiple awards at the cricket academy — recognised for match-defining batting and strategic play.
            </p>
          </div>
          {/* Trophy geometry */}
          <div
            style={{
              width: '56px',
              height: '56px',
              border: '2px solid #111111',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginLeft: '16px',
            }}
          >
            <span style={{ fontFamily: 'var(--font-clash)', fontWeight: 700, fontSize: '20px', letterSpacing: '-0.04em' }}>★</span>
          </div>
        </div>
      </div>

      {/* Football block */}
      <div
        style={{
          padding: '20px',
          border: '1px solid rgba(30,30,30,0.12)',
          borderRadius: '10px',
          background: 'rgba(30,30,30,0.02)',
        }}
      >
        <span
          style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', letterSpacing: '0.12em', color: '#838282', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}
        >
          Football
        </span>
        <h4
          style={{ fontFamily: 'var(--font-clash)', fontWeight: 700, fontSize: '22px', letterSpacing: '-0.04em', color: '#111111', lineHeight: 1 }}
        >
          Deep Passion
        </h4>
        <p style={{ fontSize: '13px', color: '#838282', marginTop: '8px', lineHeight: 1.6 }}>
          A tactical student of the beautiful game — football teaches reading patterns, anticipating systems, and reacting under pressure.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginTop: '14px',
          flexWrap: 'wrap',
        }}
      >
        {['Discipline', 'Team Tactics', 'Pressure Performance', 'Leadership'].map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.06em',
              padding: '4px 10px',
              border: '1px solid rgba(30,30,30,0.18)',
              borderRadius: '999px',
              color: '#111111',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─── Tech Card ─────────────────────────────────────────────────────── */
const TECH_ITEMS = [
  { label: 'React', desc: 'Component-driven UI' },
  { label: 'Vite',  desc: 'Lightning-fast builds' },
  { label: 'Framer', desc: 'Motion & animation' },
  { label: 'Tailwind', desc: 'Utility-first CSS' },
  { label: 'LLM APIs', desc: 'AI integration layer' },
  { label: 'Prompt Eng.', desc: 'Structured AI output' },
]

function TechCard() {
  return (
    <div style={{ fontFamily: 'var(--font-satoshi)' }}>
      <p style={{ fontSize: '14px', color: '#838282', lineHeight: 1.75, marginBottom: '20px' }}>
        Building AI-first web applications — from rapid prototyping to production deployments — combining LLM APIs with slick, performant frontends.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {TECH_ITEMS.map(({ label, desc }) => (
          <div
            key={label}
            style={{
              padding: '14px 16px',
              border: '1px solid rgba(30,30,30,0.14)',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <span
              style={{ fontFamily: 'var(--font-clash)', fontWeight: 700, fontSize: '15px', letterSpacing: '-0.03em', color: '#111111' }}
            >
              {label}
            </span>
            <span style={{ fontSize: '11px', color: '#b6b5b5', letterSpacing: '0.04em' }}>{desc}</span>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: '16px',
          padding: '14px 18px',
          background: '#111111',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ color: 'rgba(242,242,242,0.7)', fontSize: '13px' }}>Focus area</span>
        <span style={{ fontFamily: 'var(--font-clash)', fontWeight: 700, fontSize: '15px', letterSpacing: '-0.03em', color: '#f2f2f2' }}>
          AI × Web Development
        </span>
      </div>
    </div>
  )
}

/* ─── Journey (main export) ─────────────────────────────────────────── */
const STEPS = [
  {
    title: 'Academic Foundation',
    subtitle: 'GCSEs · Mathematics · Computing · Physics',
    content: <GradeCard />,
  },
  {
    title: 'Athletic Excellence',
    subtitle: 'Cricket Academy · Football · Competitive Sport',
    content: <AthleticCard />,
  },
  {
    title: 'Technical Innovation',
    subtitle: 'AI Web Development · Prompt Engineering · React',
    content: <TechCard />,
  },
]

export default function Journey() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section
      id="journey"
      ref={ref}
      className="px-8 md:px-16 py-24 md:py-40"
      style={{ borderTop: '1px solid rgba(30,30,30,0.08)' }}
    >
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-6 mb-6">
            <div style={{ width: '1px', height: '48px', background: 'rgba(30,30,30,0.15)' }} />
            <span
              className="font-satoshi uppercase"
              style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', letterSpacing: '0.14em', color: '#838282' }}
            >
              My Journey
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 24, clipPath: 'inset(100% 0 0 0)' }}
            animate={inView ? { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' } : {}}
            transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
            className="font-clash"
            style={{
              fontFamily: 'var(--font-clash)',
              fontSize: 'clamp(36px, 5.5vw, 72px)',
              fontWeight: 700,
              letterSpacing: '-0.05em',
              lineHeight: 0.92,
              color: '#111111',
            }}
          >
            The Path<br />So Far.
          </motion.h2>
        </div>

        {/* Large number decoration */}
        <div
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-clash)',
            fontWeight: 700,
            fontSize: 'clamp(64px, 8vw, 120px)',
            letterSpacing: '-0.06em',
            lineHeight: 1,
            color: 'rgba(30,30,30,0.06)',
            userSelect: 'none',
          }}
        >
          01
        </div>
      </div>

      {/* Stepper */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.77, 0, 0.175, 1] }}
        style={{ maxWidth: '680px' }}
      >
        <AnimatedStepper steps={STEPS} initialStep={0} />
      </motion.div>
    </section>
  )
}
