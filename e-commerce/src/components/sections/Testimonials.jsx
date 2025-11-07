import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import testimonialImage from "../../assets/images/ussama-azam-zO6T1CHeBHQ-unsplash.jpg"; 

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Interior Designer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      feedback:
        "Luxora's lighting solutions transformed my projects. The quality and design are unmatched!",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Homeowner",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      feedback:
        "I absolutely love the ambiance Luxora lights bring to my home. Highly recommend their products!",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Architect",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      feedback:
        "Luxora's innovative designs have elevated my architectural projects. Their lights are both functional and stylish.",
    },
  ];

  const [index, setIndex] = useState(0);

  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const testimonial = testimonials[index];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl">
        {/* LEFT SIDE - Testimonial Text */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What People Are Saying About Us
          </h2>

          <div className="flex items-center gap-4 mt-6">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed italic mt-4">
            “{testimonial.feedback}”
          </p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center bg-green-800 rounded-full hover:bg-green-700 transition"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Product Image */}
        <div className="w-full h-[480px] md:w-500px md:h-[520px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={testimonialImage}
            alt="Luxora Product"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
