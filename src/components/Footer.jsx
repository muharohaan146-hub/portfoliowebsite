import { motion } from 'framer-motion'

const NAV_COLS = [
  {
    heading: 'Muhammad Rohaan',
    content: (
      <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '13px', lineHeight: 1.8, color: 'rgba(246,246,246,0.50)', maxWidth: '220px' }}>
        Aspiring Cybersecurity Professional. Building AI-driven web experiences and mastering the intersection of security and technology.
      </p>
    ),
  },
  {
    heading: 'Navigation',
    content: (
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {['About', 'Projects', 'Athletic', 'Journey', 'Services', 'Contact'].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: '13px',
              color: 'rgba(246,246,246,0.50)',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              transition: 'color 120ms ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#f6f6f6')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(246,246,246,0.50)')}
          >
            {l}
          </a>
        ))}
      </nav>
    ),
  },
  {
    heading: 'Contact',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[
          { label: 'Email', value: 'rohaan@email.com' },
          { label: 'GitHub', value: 'github.com/muharohaan146-hub' },
          { label: 'LinkedIn', value: 'linkedin.com/in/rohaan' },
          { label: 'Location', value: 'UAE' },
        ].map(({ label, value }) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span
              style={{
                fontFamily: 'var(--font-satoshi)',
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(246,246,246,0.25)',
              }}
            >
              {label}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-satoshi)',
                fontSize: '13px',
                color: 'rgba(246,246,246,0.55)',
              }}
            >
              {value}
            </span>
          </div>
        ))}
      </div>
    ),
  },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: '#1e1e1e',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '80px 64px 48px',
      }}
    >
      {/* 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        {NAV_COLS.map((col) => (
          <div key={col.heading}>
            <h4
              style={{
                fontFamily: 'var(--font-clash)',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '-0.03em',
                color: '#f6f6f6',
                marginBottom: '20px',
              }}
            >
              {col.heading}
            </h4>
            {col.content}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8"
      >
        {/* Large M.ROHAAN wordmark */}
        <span
          style={{
            fontFamily: 'var(--font-clash)',
            fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 72px)',
            letterSpacing: '-0.05em',
            lineHeight: 0.9,
            color: 'rgba(246,246,246,0.10)',
            userSelect: 'none',
          }}
        >
          M.ROHAAN
        </span>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'right' }}>
          <span
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: '12px',
              color: 'rgba(246,246,246,0.30)',
              letterSpacing: '0.06em',
            }}
          >
            © {new Date().getFullYear()} Muhammad Rohaan. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: '11px',
              color: 'rgba(246,246,246,0.20)',
              letterSpacing: '0.06em',
            }}
          >
            Designed &amp; Built with precision.
          </span>
        </div>
      </div>
    </footer>
  )
}
