import { CheckCircle } from 'lucide-react';
import aboutImage from '../../assets/background_img/etienne-girardet-NGb91VwnOWY-unsplash.jpg';

function About() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start">
                {/* Image Section */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <img
                        src={aboutImage}
                        alt="About Luxora"
                        className="rounded-lg shadow-lg w-full h-auto object-cover"
                    />
                </div>
                {/* Text Section */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold mb-6">About Luxora</h2>
                    <p className="text-gray-700 mb-6">
                        At Luxora, we believe that lighting is more than just a necessity; it's an art form that transforms spaces and elevates experiences. Our mission is to provide premium lighting solutions that blend contemporary design with high-end materials, ensuring both aesthetic appeal and lasting durability.
                    </p>
                    <ul className="space-y-4">
                        {[
                            'Premium Quality Materials',
                            'Contemporary and Elegant Designs',
                            'Energy-Efficient Solutions',
                            'Exceptional Customer Service',
                        ].map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <CheckCircle className="text-blue-600 w-6 h-6 mr-3" />
                                <span className="text-gray-800">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
export default About;