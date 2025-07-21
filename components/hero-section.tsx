import Image from 'next/image';

export function HeroSection() {
    return (
        <div className="relative py-32 md:py-42 overflow-hidden">
            <div className="container mx-auto px-4 mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-12 md:mb-0 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="text-gradient">Junior High School Times</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-lg">
                        Mari kita buka kembali lembaran lama yang nyaris terlupakan. Temukan potongan kecil dari hidupmu—tawa, air mata, dan cerita
                        yang sederhana. Karena di sinilah, kenangan itu masih menunggu untuk dikenang kembali.
                    </p>
                    <div className="flex items-center justify-center space-y-4">
                        <button className="px-6 py-3 bg-gradient-to-r from-cyber-cosmic-light to-cyber-nebula-dark rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-cyber-purple">
                            Explore Now
                        </button>
                    </div>
                </div>
                <div className="relative p-1 rounded-xl border-2 border-cyber-blue bg-gradient-to-r from-cyber-cosmic-light/30 to-cyber-nebula-dark/30 backdrop-blur-lg">
                    <div className="relative rounded-xl overflow-hidden">
                        <Image src="/hero-section.jpeg" alt="Memory Fragment 001" width={400} height={400} className="w-full" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-black/70 to-transparent p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm text-cyber-blue">Memory Fragment 001</div>
                                    <div className="text-xl font-bold text-white">Valuable Experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
