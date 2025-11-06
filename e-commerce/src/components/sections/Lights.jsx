import React from 'react';
import { Plus } from 'lucide-react';
import imgLight1 from '../../assets/images/ayush-kumar-jdLElG-fgvs-unsplash.jpg';
import imgLight2 from '../../assets/images/brandi-alexandra-ttvcIK0kUTg-unsplash.jpg';
import imgDesk from '../../assets/images/damnikia-Rvmi0EZIPgA-unsplash.jpg';
import imgLight3 from '../../assets/images/ellephant-3CAiUdt1RFs-unsplash.jpg';
import imgLight4 from '../../assets/images/emilio-garcia-_bzFLkJyY6o-unsplash.jpg';
import imgLight5 from '../../assets/images/jean-philippe-delberghe-Ry9WBo3qmoc-unsplash.jpg';
import imgLight6 from '../../assets/images/natalia-y-R-qWnGTaAyU-unsplash.jpg';
import imgLamp from '../../assets/images/wallace-wang-5ul3t7WaMRk-unsplash.jpg';


function Lights() {
  const products = [
    {
      id: 1,name: "Smart Bulb",image: imgLight1,price: 49.99,originalPrice: 69.99,
    },
    {
      id: 2,name: "Glossy Chandelier",image: imgLight2,price: 19.99,originalPrice: 29.99,
    },
    {
      id: 3,name: "Hanging lights",image: imgDesk,price: 34.99,originalPrice: 49.99,
    },
    {
      id: 3,name:"Amber glow Trio",image: imgLight3,price: 36.99,originalPrice:47.13,
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">All Product</h2>
          <p className="text-gray-600">
            The products we provide only for you as selected from the best
            products with number 1 quality in the world
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-[1200px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-8 gap-x-4 md:gap-8">
              {products.map((product) => (
                <div key={product.id} className="group relative w-[290px]">
                  <div className="relative h-[300px] bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <button
                      className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-md 
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-label="Add to cart"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="mt-4 h-[80px]">
                    <h3 className="font-medium text-lg">{product.name}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-semibold">
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

            <div className="flex justify-center mt-12 gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lights;
