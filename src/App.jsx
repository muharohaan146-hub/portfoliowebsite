import Navigation   from './components/Navigation'
import Hero         from './components/Hero'
import Philosophy   from './components/Philosophy'
import Journey      from './components/Journey'
import ShowcaseGrid from './components/ShowcaseGrid'
import ServiceCards from './components/ServiceCards'
import Footer       from './components/Footer'

export default function App() {
  return (
    <div style={{ background: '#f2f2f2', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navigation />

      <main>
        {/* ① Hero — Typographic Echo Stack */}
        <Hero />

        {/* ② Philosophy — The 3 pillars */}
        <Philosophy />

        {/* ③ Journey — AnimatedStepper */}
        <Journey />

        {/* ④ Selected Work — Showcase Grid */}
        <ShowcaseGrid />

        {/* ⑤ Services — Bespoke cards */}
        <ServiceCards />
      </main>

      {/* ⑥ Footer */}
      <Footer />
    </div>
  )
}
