import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const NAV_LINKS = ['About', 'Projects', 'Athletic', 'Contact']

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center px-8 md:px-16"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
    >
      {/* Glass background */}
      <div
        className="absolute inset-0 transition-shadow duration-300"
        style={{
          background: 'rgba(242, 242, 242, 0.90)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid rgba(30,30,30,0.10)' : '1px solid transparent',
          transition: 'border-bottom-color 300ms ease',
        }}
      />

      {/* Logo */}
      <div className="relative z-10 flex-1">
        <a
          href="#about"
          style={{ textDecoration: 'none' }}
        >
          <span
            className="font-clash font-bold"
            style={{
              fontFamily: 'var(--font-clash)',
              fontSize: '18px',
              letterSpacing: '-0.04em',
              color: '#111111',
            }}
          >
            MR.
          </span>
        </a>
      </div>

      {/* Nav links — desktop */}
      <nav className="relative z-10 hidden md:flex items-center gap-10">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: '#111111',
              transition: 'color 120ms ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#b6b5b5')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#111111')}
          >
            {link}
          </a>
        ))}
      </nav>

      {/* CTA Button */}
      <div className="relative z-10 ml-8 hidden md:block">
        <a
          href="#contact"
          style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            padding: '9px 20px',
            borderRadius: '9999px',
            border: '1px solid #1e1e1e',
            color: '#111111',
            background: 'transparent',
            transition: 'background 160ms ease, color 160ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#111111'
            e.currentTarget.style.color = '#f2f2f2'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = '#111111'
          }}
        >
          Let&rsquo;s Talk
        </a>
      </div>

      {/* Hamburger — mobile */}
      <button
        className="relative z-10 md:hidden ml-auto flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span
          style={{
            display: 'block',
            width: '22px',
            height: '1px',
            background: '#111111',
            transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none',
            transition: 'transform 240ms ease',
          }}
        />
        <span
          style={{
            display: 'block',
            width: '22px',
            height: '1px',
            background: '#111111',
            opacity: menuOpen ? 0 : 1,
            transition: 'opacity 240ms ease',
          }}
        />
        <span
          style={{
            display: 'block',
            width: '22px',
            height: '1px',
            background: '#111111',
            transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none',
            transition: 'transform 240ms ease',
          }}
        />
      </button>

      {/* Mobile menu drawer */}
      <motion.div
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.77, 0, 0.175, 1] }}
        style={{
          position: 'absolute',
          top: '80px',
          left: 0,
          right: 0,
          background: 'rgba(242,242,242,0.97)',
          backdropFilter: 'blur(12px)',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(30,30,30,0.08)',
        }}
      >
        <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-clash)',
                fontSize: '28px',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                textDecoration: 'none',
                color: '#111111',
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: '12px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              padding: '9px 20px',
              borderRadius: '9999px',
              border: '1px solid #1e1e1e',
              color: '#111111',
              width: 'fit-content',
              marginTop: '4px',
            }}
          >
            Let&rsquo;s Talk
          </a>
        </div>
      </motion.div>
    </motion.header>
  )
}
