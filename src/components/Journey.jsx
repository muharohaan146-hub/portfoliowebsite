import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { AnimatedStepper } from './AnimatedStepper'

/* ─── Education Card ────────────────────────────────────────────────────── */
function EducationCard() {
  return (
    <div style={{ fontFamily: 'var(--font-satoshi)' }}>
      <p style={{ fontSize: '14px', color: '#838282', lineHeight: 1.75, marginBottom: '20px' }}>
        A strong academic foundation bridging mathematics, science, and computing, preparing for rigorous university-level study and a career in cybersecurity.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div
          style={{
            padding: '16px',
            border: '1px solid #111111',
            borderRadius: '8px',
            background: '#111111',
          }}
        >
          <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(242,242,242,0.65)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
            Current Focus
          </span>
          <h4 style={{ fontFamily: 'var(--font-clash)', fontWeight: 700, fontSize: '20px', letterSpacing: '-0.03em', color: '#f2f2f2', marginBottom: '6px' }}>
            A Levels
          </h4>
          <span style={{ fontSize: '13px', color: '#b6b5b5' }}>
            Mathematics · Physics · Computer Science
          </span>
        </div>

        <div
          style={{
            padding: '16px',
            border: '1px solid rgba(30,30,30,0.15)',
            borderRadius: '8px',
            background: 'rgba(30,30,30,0.02)',
          }}
        >
          <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', letterSpacing: '0.12em', color: '#838282', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
            Previous
          </span>
          <h4 style={{ fontFamily: 'var(--font-clash)', fontWeight: 700, fontSize: '20px', letterSpacing: '-0.03em', color: '#111111', marginBottom: '6px' }}>
            IGCSEs
          </h4>
          <span style={{ fontSize: '13px', color: '#838282' }}>
            Comprehensive core education emphasizing analytical skills.
          </span>
        </div>
      </div>
    </div>
  )
}

/* ─── Experience & Activities Card ─────────────────────────────────────────────────── */
function ExperienceCard() {
  return (
    <div style={{ fontFamily: 'var(--font-satoshi)' }}>
      {/* Sports & Esports block */}
      <div
        style={{
          padding: '20px',
          border: '1px solid rgba(30,30,30,0.12)',
          borderRadius: '10px',
          marginBottom: '12px',
          background: 'rgba(30,30,30,0.02)',
        }}
      >
        <span
          style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', letterSpacing: '0.12em', color: '#838282', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}
        >
          Competitive Play
        </span>
        <h4
          style={{ fontFamily: 'var(--font-clash)', fontWeight: 700, fontSize: '22px', letterSpacing: '-0.04em', color: '#111111', lineHeight: 1 }}
        >
          Esports, Football & Cricket
        </h4>
        <p style={{ fontSize: '13px', color: '#838282', marginTop: '8px', lineHeight: 1.6 }}>
          Whether on the pitch, the field, or in the digital arena, competitive environments teach rapid decision-making, strategic coordination, and resilience under pressure.
        </p>
      </div>

      {/* Extracurriculars block */}
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
          Leadership & Engagement
        </span>
        <h4
          style={{ fontFamily: 'var(--font-clash)', fontWeight: 700, fontSize: '22px', letterSpacing: '-0.04em', color: '#111111', lineHeight: 1 }}
        >
          School Extracurriculars
        </h4>
        <p style={{ fontSize: '13px', color: '#838282', marginTop: '8px', lineHeight: 1.6 }}>
          Active participation in school initiatives, fostering communication, teamwork, and a sense of community responsibility.
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
        {['Teamwork', 'Communication', 'Strategic Thinking', 'Discipline'].map((tag) => (
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

/* ─── Projects & Goals Card ─────────────────────────────────────────────────────── */
function ProjectsGoalsCard() {
  return (
    <div style={{ fontFamily: 'var(--font-satoshi)' }}>
      <p style={{ fontSize: '14px', color: '#838282', lineHeight: 1.75, marginBottom: '20px' }}>
        Actively building technical projects while charting a clear path toward a professional career in the cybersecurity industry.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Projects */}
        <div style={{ padding: '16px', border: '1px solid rgba(30,30,30,0.14)', borderRadius: '8px' }}>
          <span style={{ fontFamily: 'var(--font-clash)', fontWeight: 700, fontSize: '18px', letterSpacing: '-0.03em', color: '#111111', display: 'block', marginBottom: '8px' }}>
            Active Projects
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#111111' }}></span>
              <span style={{ fontSize: '13px', color: '#838282' }}>AI-driven websites & web applications</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#111111' }}></span>
              <span style={{ fontSize: '13px', color: '#838282' }}>Personal portfolio development</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#111111' }}></span>
              <span style={{ fontSize: '13px', color: '#838282' }}>Hands-on cybersecurity learning & labs</span>
            </div>
          </div>
        </div>

        {/* Goals */}
        <div
          style={{
            padding: '16px',
            background: '#111111',
            borderRadius: '8px',
          }}
        >
          <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(242,242,242,0.65)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
            Vision & Trajectory
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-clash)', fontWeight: 700, fontSize: '15px', color: '#f2f2f2' }}>University</span>
            <span style={{ color: 'rgba(242,242,242,0.4)', fontSize: '14px' }}>→</span>
            <span style={{ fontFamily: 'var(--font-clash)', fontWeight: 700, fontSize: '15px', color: '#f2f2f2' }}>Cybersecurity</span>
            <span style={{ color: 'rgba(242,242,242,0.4)', fontSize: '14px' }}>→</span>
            <span style={{ fontFamily: 'var(--font-clash)', fontWeight: 700, fontSize: '15px', color: '#f2f2f2' }}>Professional Career</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Journey (main export) ─────────────────────────────────────────── */
const STEPS = [
  {
    title: 'Education',
    subtitle: 'IGCSE · A Levels (Maths, Physics, CS)',
    content: <EducationCard />,
  },
  {
    title: 'Experience & Activities',
    subtitle: 'Esports · Football · Cricket · Extracurriculars',
    content: <ExperienceCard />,
  },
  {
    title: 'Projects & Goals',
    subtitle: 'AI Websites · Cybersecurity · Future Vision',
    content: <ProjectsGoalsCard />,
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
