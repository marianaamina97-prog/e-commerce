import bgHero from '../../assets/background_img/wu-yi-4FLTvz6aiNQ-unsplash.jpg';

function Hero() {
  return (
  <section
    className="relative bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center items-center text-white"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${bgHero})`,
    }}
  >
    {/* To vertically center the hero in the viewport */}
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
        <span className="block">Illuminate Your World With</span>
        <span className="block">Timeless Elegance</span>
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Elevate your home with premium lighting that combines high-end materials,
        contemporary design, and lasting brilliance.
      </p>
      <a href="/get-started" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300">Shop Now</a>
    </div>
    </section>
  );
};
export default Hero;