import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10 mt-10">
            {/* whole content wrap */}
            <div className="container mx-auto px-4">
                {/* Top: Logo + social icons stacked on small screens */}
                <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between mb-8">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">Luxora</h2>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com" aria-label="Facebook" className="hover:text-gray-400">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.twitter.com" aria-label="Twitter" className="hover:text-gray-400">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com" aria-label="Instagram" className="hover:text-gray-400">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com" aria-label="LinkedIn" className="hover:text-gray-400">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Bottom: other columns in a responsive grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-white font-semibold mb-4">Our Product</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="mb-2"><a href="/support" className="hover:text-gray-400">Support</a></li>
                            <li className="mb-2"><a href="/pricing" className="hover:text-gray-400">Pricing</a></li>
                            <li className="mb-2"><a href="/blog" className="hover:text-gray-400">Blog</a></li>
                            <li className="mb-2"><a href="/faqs" className="hover:text-gray-400">FAQs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Top Features</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="mb-2"><a href="/analytics" className="hover:text-gray-400">Analytics</a></li>
                            <li className="mb-2"><a href="/marketing" className="hover:text-gray-400">Marketing</a></li>
                            <li className="mb-2"><a href="/commerce" className="hover:text-gray-400">Commerce</a></li>
                            <li className="mb-2"><a href="/insights" className="hover:text-gray-400">Insights</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="mb-2"><a href="/about" className="hover:text-gray-400">About Us</a></li>
                            <li className="mb-2"><a href="/careers" className="hover:text-gray-400">Careers</a></li>
                            <li className="mb-2"><a href="/press" className="hover:text-gray-400">Press</a></li>
                            <li className="mb-2"><a href="/news" className="hover:text-gray-400">News</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="mb-2"><a href="/privacy" className="hover:text-gray-400">Privacy Policy</a></li>
                            <li className="mb-2"><a href="/terms" className="hover:text-gray-400">Terms of Service</a></li>
                            <li className="mb-2"><a href="/cookies" className="hover:text-gray-400">Cookie Policy</a></li>
                            <li className="mb-2"><a href="/security" className="hover:text-gray-400">Security</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Bottom part */}
            <div className="mt-6 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Luxora. All rights reserved.
            </div>
        </footer>
    );
}
export default Footer;