import React from 'react';
import { Plus } from 'lucide-react';
import imgLight1 from '../../assets/images/ayush-kumar-jdLElG-fgvs-unsplash.jpg';
import imgLight2 from '../../assets/images/thoa-ngo-B0ZCh_kpbrE-unsplash.jpg';
import imgDesk from '../../assets/background_img/marius-haakestad-Y6-F_K1hfDA-unsplash.jpg';
import imgLight3 from '../../assets/images/ellephant-3CAiUdt1RFs-unsplash.jpg';
import imgLight4 from '../../assets/images/emilio-garcia-_bzFLkJyY6o-unsplash.jpg';
import imgLight5 from '../../assets/images/jean-philippe-delberghe-Ry9WBo3qmoc-unsplash.jpg';
import imgLight6 from '../../assets/images/natalia-y-R-qWnGTaAyU-unsplash.jpg';
import imgLamp from '../../assets/images/wallace-wang-5ul3t7WaMRk-unsplash.jpg';

function Lights() {
  const products = [
    { id: 1, name: "Smart Bulb", image: imgLight1, price: 49.99, originalPrice: 69.99 },
    { id: 2, name: "Glossy Chandelier", image: imgLight2, price: 19.99, originalPrice: 29.99 },
    { id: 3, name: "Hanging lights", image: imgDesk, price: 34.99, originalPrice: 49.99 },
    { id: 4, name: "Amber Glow Trio", image: imgLight3, price: 36.99, originalPrice: 47.13 },
    { id: 5, name: "Bedside Lamp", image: imgLight4, price: 59.99, originalPrice: 79.99 },
    { id: 6, name: "LED Strip Lights", image: imgLight5, price: 24.99, originalPrice: 34.99 },
    { id: 7, name: "Vintage Edison Bulb", image: imgLight6, price: 14.99, originalPrice: 19.99 },
    { id: 8, name: "Modern Pendant", image: imgLamp, price: 39.99, originalPrice: 49.99 },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">All Products</h2>
          <p className="text-gray-600">
            The products we provide are carefully selected for you — crafted with the finest quality and design.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative w-[270px] md:w-[290px] bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-[250px] rounded-t-2xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button
                  className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300"
                  aria-label="Add to cart"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4 text-center">
                <h3 className="font-medium text-lg text-gray-900 truncate">{product.name}</h3>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="font-semibold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-gray-500 line-through text-sm">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center mt-12 gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>
      </div>
    </section>
  );
}

export default Lights;
