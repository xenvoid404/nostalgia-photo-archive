import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export function Footer() {
    return (
        <footer className="border-t border-gray-800 pt-12 pb-8 bg-gray-900/50 backdrop-blur-lg">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo */}
                    <div className="text-gradient text-2xl font-bold mb-6 md:mb-0">Our Story</div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
                        <Link href="#" className="text-gray-400 hover:text-cyber-pink transition-all duration-300 text-sm md:text-base">
                            About
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-cyber-pink transition-all duration-300 text-sm md:text-base">
                            Privacy
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-cyber-pink transition-all duration-300 text-sm md:text-base">
                            Terms
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-cyber-pink transition-all duration-300 text-sm md:text-base">
                            Contact
                        </Link>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-6">
                        <Link href="#" className="text-gray-400 hover:text-cyber-pink transition-all duration-300" aria-label="Facebook">
                            <FaFacebook className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-cyber-pink transition-all duration-300" aria-label="Twitter">
                            <FaTwitter className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-cyber-pink transition-all duration-300" aria-label="Instagram">
                            <FaInstagram className="w-6 h-6" />
                        </Link>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center text-gray-500 text-sm md:text-base">© {new Date().getFullYear()} Our Story - Xenvoid 404</div>
            </div>
        </footer>
    );
}
