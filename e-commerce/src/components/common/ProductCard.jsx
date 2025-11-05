import { Plus } from 'lucide-react';

function ProductCard({ name, price, originalPrice, image }) {
    return (
        <div className="group relative">
            {/* Product Image and Add Button */}
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                    src={image}
                    alt={name}
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

            {/* Product Info */}
            <div className="mt-4">
                <h3 className="font-medium">{name}</h3>
                <div className="flex items-center gap-2">
                    <span className="font-semibold">${price.toFixed(2)}</span>
                    <span className="text-gray-500 line-through text-sm">
                        ${originalPrice.toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;