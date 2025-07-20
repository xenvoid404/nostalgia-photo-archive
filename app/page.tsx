import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
                <div className="absolute w-full h-full radial-gradient">
                    <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-cyber-nebula blur-3xl opacity-20">
                        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-cyber-cosmic blur-3xl opacity-15">
                            <Image
                                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fbcf2584-9faf-40c9-a2c4-1d048f8cc03b.png"
                                alt="Abstract cyberpunk grid lines in purple hues blending into the background"
                                fill
                                className="absolute bottom-0 left-0 w-full opacity-5 mix-blend-overlay"
                            />
                        </div>
                        <nav className="hidden md:flex space-x-6">
                            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                                Memories
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                                Gallery
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                                Timeline
                            </Link>
                            <button id="themeToggle" className="rounded-full p-2 bg-gray-800 transition-colors mr-2">
                                <svg id="themeIcon" className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                </svg>
                            </button>
                            <button id="mobileMenuButton" className="md:hidden text-gray-300 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>

            <header className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-800 bg-gray-900/80">
                <div className="container flex mx-auto py-4 px-4 items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-gradient">Our Story</span>
                    </div>
                </div>
            </header>
        </>
    );
}
