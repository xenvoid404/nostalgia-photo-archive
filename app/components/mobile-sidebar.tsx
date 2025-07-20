import Link from 'next/link';

export function MobileSidebar() {
    return (
        <div className="fixed inset-0 z-50 hidden bg-gray-900/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out -translate-x-full md:hidden">
            <div className="flex flex-col h-full px-6 py-4">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyber-pink to-cyber-purple flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-gradient">Our Story</span>
                        <button className="text-gray-300 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <nav className="flex flex-col space-y-4">
                        <Link href="#" className="text-xl text-gray-300 hover:text-white transition-colors">
                            Memories
                        </Link>
                        <Link href="#" className="text-xl text-gray-300 hover:text-white transition-colors">
                            Gallery
                        </Link>
                        <Link href="#" className="text-xl text-gray-300 hover:text-white transition-colors">
                            Timeline
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}
