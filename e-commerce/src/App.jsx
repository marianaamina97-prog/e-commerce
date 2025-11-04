import './App.css'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Statistics from './components/sections/Statistics'
import About from './components/sections/About'
import Products from './components/sections/Products'
import About2 from './components/sections/About2'

function App() {
  return (
    <>
    <main>
      <Hero />
      <div className="relative -mt-4 mb-8">
        <Statistics />
      </div>
      <About />
      <Products />
      <About2 />
    </main>
    <Footer />
    </>
  )
}

export default App
