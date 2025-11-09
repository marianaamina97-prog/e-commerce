import { Check } from 'lucide-react';
import aboutImage from '../../assets/background_img/etienne-girardet-NGb91VwnOWY-unsplash.jpg';

function About() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img
                        src={aboutImage}
                        alt="About Luxora"
                        className="w-full h-[443px] object-cover rounded-lg"
                        width={554}
                        height={443}
                    />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold mb-6">
                        Designing Brilliance For<br />
                        For Modern Living
                    </h2>
                    <p className="text-gray-600 mb-8">
                        At Luxora,we believe that lighting is morethan just a necessity,it's an art form
                    </p>

                    <div className="space-y-4">
                        <ul className="space-y-4">
                            {[
                                'Premium Quality Materials',
                                'Innovative Design Concepts',
                                'Sustainable Manufacturing Practices',
                                'Energy Efficient Solutions',
                                'Exceptional Customer Service',
                            ].map((service, index) => (
                                <li key={index} className="flex items-center gap-4 p-4 border rounded-xl">
                                    <div className="flex-shrink-0">
                                        <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                    <span className="text-gray-700">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;