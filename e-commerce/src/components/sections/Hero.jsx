import bgHero from '../../assets/background_img/wu-yi-4FLTvz6aiNQ-unsplash.jpg';
import Logo from '../common/Logo';
import { useState } from 'react';

function Hero() {
  const [open, setOpen] = useState(false);
  return (
  <section
    className="relative bg-cover bg-center bg-no-repeat min-h-screen w-full flex flex-col justify-center items-center text-white pb-20"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${bgHero})`
    }}
  >
    <div className='absolute bottom-0 left-0 w-full h-15 bg-gradient-to-b from-transparent to-white opaciy-100'></div>
    {/* Top bar: Logo on left, nav on right */}
    <div className="relative md:absolute md:top-6 left-0 right-0 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <Logo className="text-2xl" />
        <div className="flex items-center">
          <nav className="hidden md:block">
            <ul className="flex space-x-8 text-white">
              <li><a href="/" className="hover:text-gray-200">Home</a></li>
              <li><a href="/about" className="hover:text-gray-200">About</a></li>
              <li><a href="/features" className="hover:text-gray-200">Features</a></li>
              <li><a href="/contact" className="hover:text-gray-200">Contact</a></li>
            </ul>
          </nav>
          <button
            className="md:hidden ml-4 p-2 rounded text-white focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setOpen(prev => !prev)}
            aria-expanded={open}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    {/* Mobile menu (sandwich) - placed in flow so it pushes content down when open */}
    {open && (
      <div className="md:hidden container mx-auto px-4 mt-2">
        <div className="bg-white bg-opacity-95 text-black rounded-md p-4">
          <ul className="flex flex-col space-y-3">
            <li><a href="/" className="block hover:underline">Home</a></li>
            <li><a href="/about" className="block hover:underline">About</a></li>
            <li><a href="/features" className="block hover:underline">Features</a></li>
            <li><a href="/contact" className="block hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>
    )}
    {/* Hero content */}
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
        Illuminate Your World With
        <span className="block mt-2">Timeless Elegance</span>
      </h1>
      <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-300">
        Elevate your home with premium lighting that combine high-end materials,
        contemporary design, and lasting brilliance
      </p>
      <a href="/shop" className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300">
        Shop Now
      </a>
    </div>
  </section>
  );
};
export default Hero;