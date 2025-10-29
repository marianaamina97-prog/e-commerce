function Card  ({ image, title, })  {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
// Named export for compatibility with components importing { ProductCard }
export const ProductCard = Card;
