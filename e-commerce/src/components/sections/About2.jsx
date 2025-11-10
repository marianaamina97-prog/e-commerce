import about2Img from '../../assets/images/damnikia-Rvmi0EZIPgA-unsplash.jpg';

function About2() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                {/* text section */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold mb-6">
                        Crafting Light Experiences<br />
                        That Inspire
                    </h2>
                    <p className="text-gray-600 mb-8">
                        At Luxora, we are dedicated to transforming spaces through innovative lighting solutions that blend aesthetics and functionality.
                    </p>
                    <p className="text-gray-600">
                        Our team of passionate designers and engineers work tirelessly to create products that not only illuminate but also elevate the ambiance of any environment.
                    </p>
                </div>
                {/* image section */}
                <div className="w-full md:w-1/2">
                    <img
                        src={about2Img}
                        alt="About Luxora"
                        className="w-full h-[443px] object-cover rounded-lg"
                        width={554}
                        height={400}
                    />
                </div>
            </div>
        </section>
    );
}
export default About2;