import bgInfo from '../../assets/images/karen-kasparov-_zjdkZmfBTU-unsplash.jpg';

function Info() {
    return (
        <section
            className="py-20 px-6 md:px-12 bg-cover bg-center rounded-lg"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgInfo})`
            }}
        >
            <div className="container mx-auto max-w-4xl text-center text-white">
                <h2 className="text-4xl font-bold mb-6">
                    Experience the Art of Fine Lighting
                </h2>
                <p className="text-lg mb-4">
                    At Luxora, we believe that lighting is more than just illumination; it's an expression of style and sophistication.
                </p>
                <p className="text-lg">
                    Become a part of our community and transform your living spaces with our exquisite lighting solutions.
                </p>
                <h4 className="mt-8 text-2xl font-semibold">Join our mailing list</h4>
                <div className="mt-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-3 rounded-l-lg w-2/3 md:w-1/2"
                    />
                    <button className="bg-yellow-500 text-white p-3 rounded-r-lg hover:bg-yellow-600">
                        Subscribe
                    </button>
                </div>
                <br /><br />
                <p className="text-sm">
                    By subscribing, you agree to receive promotional emails from Luxora. You can unsubscribe at any time.
                </p>
                
            </div>
        </section>
    );
}
export default Info;