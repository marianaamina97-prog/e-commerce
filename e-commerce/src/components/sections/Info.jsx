import React, { useState } from "react";
import bgInfo from "../../assets/images/karen-kasparov-_zjdkZmfBTU-unsplash.jpg";

export default function Info() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setSubscribed(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center md:justify-end bg-cover bg-bottom overflow-hidden px-4 sm:px-6 md:pr-8"
      style={{
        backgroundImage: `url(${bgInfo})`,
        backgroundPosition: "center bottom 35%",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-lg text-center md:text-right text-white sm:mr-4 md:mr-16 lg:mr-24 xl:mr-32">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
          Experience the Art of Fine Lighting
        </h2>

        <p className="text-base sm:text-lg mb-3 sm:mb-4 drop-shadow-md">
          At Luxora, we believe that lighting is more than just illumination; it’s an expression of style and sophistication.
        </p>

        <p className="text-base sm:text-lg drop-shadow-md">
          Become a part of our community and transform your living spaces with our exquisite lighting solutions.
        </p>

        <h4 className="mt-6 sm:mt-8 text-xl sm:text-2xl font-semibold drop-shadow-lg">
          Join our mailing list
        </h4>

        {!subscribed ? (
          <div className="mt-4 flex flex-col sm:flex-row items-center sm:justify-end w-full gap-2 sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-lg sm:rounded-l-lg sm:rounded-r-none w-full sm:w-2/3 md:w-1/2 text-black"
            />
            <button
              onClick={handleSubscribe}
              disabled={loading}
              className={`p-3 rounded-lg sm:rounded-l-none sm:rounded-r-lg w-full sm:w-auto text-white font-semibold transition-colors duration-300 ${
                loading
                  ? "bg-yellow-400 cursor-wait"
                  : "bg-yellow-500 hover:bg-yellow-600"
              }`}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        ) : (
          <p className="mt-4 text-green-400 font-semibold drop-shadow-lg">
            Thank you for subscribing!
          </p>
        )}

        <p className="mt-4 text-xs sm:text-sm text-gray-300 drop-shadow-md">
          By subscribing, you agree to receive promotional emails from Luxora.
          You can unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
