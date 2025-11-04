import { ArrowRight } from "lucide-react";
import { ProductCard } from "../common/Cards";
import imgChandelier from '../../assets/images/brandi-alexandra-ttvcIK0kUTg-unsplash.jpg';
import imgPendant from '../../assets/images/pedro-correia-MrPZUv6EvhY-unsplash.jpg';
import imgFloor from '../../assets/images/sincerely-media-VDPauwJ_sHo-unsplash.jpg';
import imgTable from '../../assets/images/emilio-garcia-_bzFLkJyY6o-unsplash.jpg';

const defaultProducts = [
    { title: "Modern Chandelier", image: imgChandelier },
    { title: "Elegant Pendant Light", image: imgPendant },
    { title: "Stylish Floor Lamp", image: imgFloor },
    { title: "Contemporary Table Lamp", image: imgTable },
];

function Products({ products = defaultProducts }) {
    return (
        <section className="py-16 px-6 md:px-12 bg-gray-100">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                    {/* text place */}
                    <div className="w-full md:w-1/4 flex-shrink-0">
                        <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
                        <p className="mt-4 text-gray-600 max-w-sm">
                            Discover our curated selection of premium lighting products that blend style and functionality to elevate your living spaces.
                        </p>
                        <button className="mt-6 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 flex items-center">
                            View All Products
                            <ArrowRight className="ml-2" />
                        </button>
                    </div>

                    {/* product side */}
                    <div className="flex-1">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {products.map((product, index) => (
                                <ProductCard key={product.title + index} image={product.image} title={product.title} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Products;

