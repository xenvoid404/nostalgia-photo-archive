import Link from 'next/link';
import { ReactNode } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header({ onOpenSidebar }: { onOpenSidebar: () => void }) {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md dark:backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/95 transition-colors">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-4xl font-bold text-gradient">Nostalgist</span>
                </Link>

                <nav className="flex items-center space-x-4 md:space-x-6">
                    <div className="hidden md:flex space-x-6">
                        <NavLink href="#">Memories</NavLink>
                        <NavLink href="#">Gallery</NavLink>
                        <NavLink href="#">Timeline</NavLink>
                    </div>

                    <ThemeToggle />

                    <button
                        onClick={onOpenSidebar}
                        aria-label="Open menu"
                        className="md:hidden text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </nav>
            </div>
        </header>
    );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
    return (
        <Link href={href} className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
            {children}
        </Link>
    );
}
