import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PILLARS = [
  {
    label: '01 — The Core',
    heading: 'Analytical\nDefense',
    body: 'Grounded in rigorous problem-solving and a deep interest in cybersecurity. Driven by the need to understand systems deeply in order to protect them.',
    tags: ['Cybersecurity', 'Problem Solving', 'Tech'],
  },
  {
    label: '02 — The Code',
    heading: 'Technical\nInnovation',
    body: 'Turning complex logic into secure digital products. Specializing in AI-powered web applications and exploring the forefront of AI programming tools.',
    tags: ['Programming', 'AI Tools', 'Web Dev'],
  },
  {
    label: '03 — The Drive',
    heading: 'Team &\nTactics',
    body: 'Whether in esports, football, or cricket, competitive environments forge strong communication, teamwork, and the discipline to execute under pressure.',
    tags: ['Esports', 'Football', 'Communication', 'Teamwork'],
  },
]

const revealVariants = {
  hidden: { opacity: 0, y: 32, clipPath: 'inset(100% 0 0 0)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.85, delay: i * 0.12, ease: [0.77, 0, 0.175, 1] },
  }),
}

export default function Philosophy() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section
      id="philosophy"
      ref={ref}
      className="px-8 md:px-16 py-24 md:py-40"
      style={{ borderTop: '1px solid rgba(30,30,30,0.08)' }}
    >
      {/* Hairline + section label row */}
      <div className="flex items-center gap-6 mb-16">
        <div style={{ width: '1px', height: '48px', background: 'rgba(30,30,30,0.15)' }} />
        <span
          className="font-satoshi uppercase"
          style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', letterSpacing: '0.14em', color: '#838282' }}
        >
          Philosophy
        </span>
      </div>

      {/* Hero quote */}
      <motion.div
        custom={0}
        variants={revealVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mb-20 md:mb-28 max-w-5xl"
      >
        <h2
          className="font-clash"
          style={{
            fontFamily: 'var(--font-clash)',
            fontSize: 'clamp(32px, 5vw, 64px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            color: '#111111',
          }}
        >
          Bridging the gap between{' '}
          <em
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#838282',
            }}
          >
            analytical
          </em>{' '}
          problem-solving and secure technical innovation.
        </h2>
      </motion.div>

      {/* 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PILLARS.map((pillar, i) => (
          <motion.div
            key={pillar.label}
            custom={i + 1}
            variants={revealVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-6 pt-8"
            style={{ borderTop: '1px solid rgba(30,30,30,0.12)' }}
          >
            {/* Label */}
            <span
              className="font-satoshi"
              style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', letterSpacing: '0.12em', color: '#838282', textTransform: 'uppercase' }}
            >
              {pillar.label}
            </span>

            {/* Heading */}
            <h3
              className="font-clash"
              style={{
                fontFamily: 'var(--font-clash)',
                fontSize: 'clamp(22px, 2.4vw, 32px)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: '#111111',
                whiteSpace: 'pre-line',
              }}
            >
              {pillar.heading}
            </h3>

            {/* Body */}
            <p
              className="font-satoshi"
              style={{ fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontWeight: 500, lineHeight: 1.75, color: '#838282' }}
            >
              {pillar.body}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto pt-4">
              {pillar.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-satoshi"
                  style={{
                    fontFamily: 'var(--font-satoshi)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                    padding: '4px 12px',
                    border: '1px solid rgba(30,30,30,0.18)',
                    borderRadius: '999px',
                    color: '#111111',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
