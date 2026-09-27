import { motion } from 'framer-motion'

/* Echo stack: 5 layers of "M.ROHAAN", each shifted -0.04em left & up */
const ECHO_LAYERS = [
  { color: '#111111', offsetX: '0em',    offsetY: '0em',    zIndex: 5,  opacity: 1,    delay: 0.0 },
  { color: '#bfbfbf', offsetX: '-0.04em', offsetY: '-0.04em', zIndex: 4, opacity: 1,    delay: 0.08 },
  { color: '#c9c9c9', offsetX: '-0.08em', offsetY: '-0.08em', zIndex: 3, opacity: 1,    delay: 0.14 },
  { color: '#d1d1d1', offsetX: '-0.12em', offsetY: '-0.12em', zIndex: 2, opacity: 1,    delay: 0.18 },
  { color: '#d9d9d9', offsetX: '-0.16em', offsetY: '-0.16em', zIndex: 1, opacity: 0.85, delay: 0.22 },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const layerVariants = {
  hidden: { opacity: 0, y: 20, clipPath: 'inset(100% 0 0 0)' },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.9, ease: [0.77, 0, 0.175, 1] },
  },
}

const subtitleVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.55, ease: [0.77, 0, 0.175, 1] },
  },
}

export default function Hero() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh', paddingTop: '80px' }}
    >
      {/* Top label */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.77, 0, 0.175, 1] }}
        className="absolute top-28 left-8 md:left-16 flex items-center gap-3"
      >
        <span
          className="font-satoshi uppercase"
          style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', letterSpacing: '0.14em', color: '#838282' }}
        >
          Portfolio 2024
        </span>
        <span style={{ width: '32px', height: '1px', background: '#838282', display: 'inline-block' }} />
      </motion.div>

      {/* Year label */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.77, 0, 0.175, 1] }}
        className="absolute top-28 right-8 md:right-16"
      >
        <span
          className="font-satoshi"
          style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', letterSpacing: '0.12em', color: '#838282' }}
        >
          Based in UAE
        </span>
      </motion.div>

      {/* ── Typographic Echo Stack ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative select-none text-center"
        style={{ lineHeight: 0.88 }}
        aria-label="M.ROHAAN"
      >
        {ECHO_LAYERS.map((layer, i) => (
          <motion.div
            key={i}
            variants={layerVariants}
            aria-hidden={i > 0}
            style={{
              fontFamily: 'var(--font-clash)',
              fontSize: 'clamp(80px, 11vw, 180px)',
              fontWeight: 700,
              letterSpacing: '-0.05em',
              lineHeight: 0.9,
              color: layer.color,
              opacity: layer.opacity,
              zIndex: layer.zIndex,
              pointerEvents: i > 0 ? 'none' : 'auto',
              userSelect: i > 0 ? 'none' : 'text',
              ...(i === 0
                ? { position: 'relative' }
                : {
                    position: 'absolute',
                    top: layer.offsetY,
                    left: layer.offsetX,
                    width: '100%',
                  }),
            }}
          >
            M.ROHAAN
          </motion.div>
        ))}
      </motion.div>

      {/* Subtitle */}
      <motion.div
        variants={subtitleVariants}
        initial="hidden"
        animate="visible"
        className="mt-10 text-center flex flex-col items-center gap-4"
      >
        <p
          className="font-satoshi"
          style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: 'clamp(14px, 1.5vw, 17px)',
            fontWeight: 500,
            letterSpacing: '0.14em',
            color: '#838282',
            textTransform: 'uppercase',
          }}
        >
          Cybersecurity&nbsp;&nbsp;·&nbsp;&nbsp;Technology&nbsp;&nbsp;·&nbsp;&nbsp;AI
        </p>

        {/* Divider line */}
        <span style={{ width: '1px', height: '64px', background: 'rgba(30,30,30,0.15)', display: 'block' }} />

        <p
          className="font-satoshi"
          style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: '14px',
            fontWeight: 500,
            color: '#111111',
            maxWidth: '320px',
            lineHeight: 1.6,
            textAlign: 'center',
          }}
        >
          Aspiring Cybersecurity Professional. Mastering the intersection of security, artificial intelligence, and robust problem-solving.
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="font-satoshi uppercase"
          style={{ fontSize: '10px', letterSpacing: '0.18em', color: '#b6b5b5' }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          style={{ width: '1px', height: '32px', background: '#b6b5b5' }}
        />
      </motion.div>
    </section>
  )
}
