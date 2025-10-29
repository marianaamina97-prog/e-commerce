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
// ProductCard: variant used on product listing with title overlay on image
export function ProductCard({ image, title }) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-56 md:h-72 lg:h-80 object-cover" />
      <div className="absolute left-4 bottom-4 text-white">
        <div className="bg-black bg-opacity-50 px-3 py-1 rounded-md text-lg font-semibold">
          {title}
        </div>
      </div>
    </div>
  );
}
