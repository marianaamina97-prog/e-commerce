import './App.css'
import React, { Suspense, lazy } from 'react'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Statistics from './components/sections/Statistics'
import About from './components/sections/About'
import About2 from './components/sections/About2'
import Info from './components/sections/Info'

const Products = lazy(() => import('./components/sections/Products'))
const Ligts = lazy(() => import('./components/sections/Lights'))
const Testimonials = lazy(() => import('./components/sections/Testimonials'))

function App() {
  return (
    <>
    <main>
      <Hero />
      <div className="relative -mt-4 mb-8">
        <Statistics />
      </div>
      <About />

      <Suspense fallback={<div className="py-8 text-center">Loading products…</div>}>
        <Products />
      </Suspense>

      <About2 />

      <Suspense fallback={<div className="py-8 text-center">Loading visuals…</div>}>
        <Ligts />
        <Testimonials />
      </Suspense>

      <Info />
    </main>
    <Footer />
    </>
  )
}

export default App
