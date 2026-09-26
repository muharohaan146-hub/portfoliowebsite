import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Check } from 'lucide-react'

/* ─────────────────────────────────────────────────────────────────────
   AnimatedStepper
   Props:
     steps  – array of { title, subtitle, content (ReactNode) }
     initialStep – 0-indexed starting step (default 0)
   ──────────────────────────────────────────────────────────────────── */

export function AnimatedStepper({ steps = [], initialStep = 0 }) {
  const [current, setCurrent] = useState(initialStep)

  const goTo = (idx) => {
    if (idx >= 0 && idx < steps.length) setCurrent(idx)
  }

  return (
    <div className="w-full" style={{ fontFamily: 'var(--font-satoshi)' }}>
      {steps.map((step, idx) => {
        const isDone   = idx < current
        const isActive = idx === current

        return (
          <div key={idx} className="flex gap-6">
            {/* ── Left column: indicator + connecting line ── */}
            <div className="flex flex-col items-center" style={{ flexShrink: 0 }}>
              {/* Circle indicator */}
              <button
                onClick={() => isDone && goTo(idx)}
                aria-label={`Step ${idx + 1}: ${step.title}`}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: isActive ? '2px solid #111111' : isDone ? '2px solid #111111' : '2px solid rgba(30,30,30,0.20)',
                  background: isActive ? '#111111' : isDone ? '#111111' : 'transparent',
                  color: isActive || isDone ? '#f2f2f2' : '#838282',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: isDone ? 'pointer' : 'default',
                  flexShrink: 0,
                  transition: 'background 300ms ease, border-color 300ms ease',
                  zIndex: 1,
                }}
              >
                {isDone ? (
                  <Check size={16} strokeWidth={2.5} />
                ) : (
                  <span style={{ fontFamily: 'var(--font-clash)', fontWeight: 700, fontSize: '14px' }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                )}
              </button>

              {/* Connecting line (not on last step) */}
              {idx < steps.length - 1 && (
                <div
                  style={{
                    width: '1px',
                    flexGrow: 1,
                    minHeight: '24px',
                    marginTop: '4px',
                    background: isDone ? '#111111' : 'rgba(30,30,30,0.15)',
                    transition: 'background 400ms ease',
                  }}
                />
              )}
            </div>

            {/* ── Right column: header + animated content ── */}
            <div className="flex-1 pb-8">
              {/* Step header (always visible) */}
              <button
                onClick={() => goTo(idx)}
                className="w-full text-left flex items-center justify-between py-1 mb-2 group"
                style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                aria-expanded={isActive}
              >
                <div>
                  <span
                    className="font-satoshi uppercase block"
                    style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#838282', marginBottom: '4px' }}
                  >
                    Step {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="font-clash"
                    style={{
                      fontFamily: 'var(--font-clash)',
                      fontSize: 'clamp(18px, 2.2vw, 26px)',
                      fontWeight: 700,
                      letterSpacing: '-0.04em',
                      lineHeight: 1.1,
                      color: isActive ? '#111111' : '#838282',
                      transition: 'color 300ms ease',
                    }}
                  >
                    {step.title}
                  </h3>
                  {step.subtitle && (
                    <p
                      style={{ fontFamily: 'var(--font-satoshi)', fontSize: '13px', color: '#b6b5b5', marginTop: '4px' }}
                    >
                      {step.subtitle}
                    </p>
                  )}
                </div>

                <span style={{ color: isActive ? '#111111' : '#b6b5b5', transition: 'color 200ms ease' }}>
                  {isActive ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>

              {/* Animated content panel */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.77, 0, 0.175, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="pt-4 pb-2">{step.content}</div>

                    {/* Navigation buttons */}
                    <div className="flex items-center gap-3 mt-6">
                      {idx > 0 && (
                        <button
                          onClick={() => goTo(idx - 1)}
                          className="font-satoshi inline-flex items-center gap-2 px-5 py-2.5 border border-[rgba(30,30,30,0.20)] rounded-full uppercase"
                          style={{
                            fontFamily: 'var(--font-satoshi)',
                            fontSize: '12px',
                            letterSpacing: '0.08em',
                            color: '#838282',
                            background: 'transparent',
                            cursor: 'pointer',
                            transition: 'border-color 160ms ease, color 160ms ease',
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#111111'; e.currentTarget.style.color = '#111111' }}
                          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(30,30,30,0.20)'; e.currentTarget.style.color = '#838282' }}
                        >
                          ← Prev
                        </button>
                      )}
                      {idx < steps.length - 1 && (
                        <button
                          onClick={() => goTo(idx + 1)}
                          className="font-satoshi inline-flex items-center gap-2 px-5 py-2.5 rounded-full uppercase"
                          style={{
                            fontFamily: 'var(--font-satoshi)',
                            fontSize: '12px',
                            letterSpacing: '0.08em',
                            color: '#f2f2f2',
                            background: '#111111',
                            border: '1px solid #111111',
                            cursor: 'pointer',
                            transition: 'background 160ms ease, color 160ms ease',
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = '#333'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = '#111111' }}
                        >
                          Next →
                        </button>
                      )}
                      {idx === steps.length - 1 && (
                        <button
                          onClick={() => goTo(0)}
                          className="font-satoshi inline-flex items-center gap-2 px-5 py-2.5 rounded-full uppercase"
                          style={{
                            fontFamily: 'var(--font-satoshi)',
                            fontSize: '12px',
                            letterSpacing: '0.08em',
                            color: '#f2f2f2',
                            background: '#111111',
                            border: '1px solid #111111',
                            cursor: 'pointer',
                          }}
                        >
                          Start Over
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )
      })}
    </div>
  )
}
