import { Check } from "lucide-react";
import aboutImage from "../../assets/background_img/etienne-girardet-NGb91VwnOWY-unsplash.jpg";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={aboutImage}
            alt="About Luxora"
            className="w-full max-w-[554px] h-auto md:h-[443px] object-cover rounded-lg shadow-md" 
            width={554}
            height={443}
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Designing Brilliance For <br className="hidden sm:block" />
            Modern Living
          </h2>

          <p className="text-gray-600 mb-8 text-base leading-relaxed">
            At Luxora, we believe that lighting is more than just a necessity —
            it’s an art form that transforms your living spaces with elegance
            and innovation.
          </p>

          <ul className="space-y-6">
            {[
              {
                title: "Premium Quality Materials",
                desc: "Our fixtures are crafted from the finest materials to ensure durability and timeless beauty.",
              },
              {
                title: "Innovative Design Concepts",
                desc: "We merge creativity with modern aesthetics to create lighting solutions that inspire.",
              },
              
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4 transition-all duration-300 hover:translate-x-1"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
