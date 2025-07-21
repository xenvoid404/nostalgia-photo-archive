import Link from 'next/link';
import { ReactNode } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export function Footer() {
    return (
        <footer className="border-t border-gray-800 pt-12 pb-8 bg-gray-900/50 backdrop-blur-lg">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-gradient text-2xl font-bold">Nostalgist</div>

                    <div className="flex flex-wrap justify-center gap-6">
                        <FooterLink href="#">About</FooterLink>
                        <FooterLink href="#">Privacy</FooterLink>
                        <FooterLink href="#">Terms</FooterLink>
                        <FooterLink href="#">Contact</FooterLink>
                    </div>

                    <div className="flex gap-6">
                        <SocialIcon href="#" icon={<FaFacebook className="w-6 h-6" />} label="Facebook" />
                        <SocialIcon href="#" icon={<FaTwitter className="w-6 h-6" />} label="Twitter" />
                        <SocialIcon href="#" icon={<FaInstagram className="w-6 h-6" />} label="Instagram" />
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-500 text-sm md:text-base">© {new Date().getFullYear()} Our Story - Xenvoid 404</div>
            </div>
        </footer>
    );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
    return (
        <Link href={href} className="text-gray-400 hover:text-cyber-pink transition-colors text-sm md:text-base">
            {children}
        </Link>
    );
}

function SocialIcon({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
    return (
        <Link href={href} className="text-gray-400 hover:text-cyber-pink transition-colors" aria-label={label}>
            {icon}
        </Link>
    );
}
