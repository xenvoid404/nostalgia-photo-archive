import Image from 'next/image';

export function HeroSection() {
    return (
        <section className="relative mt-32 md:mt-40">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                {/* Text Content */}
                <div className="md:w-1/2 mb-12 md:mb-0">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="text-gradient">Junior High School Times</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-2 max-w-lg">
                        Mari kita buka kembali lembaran lama yang nyaris terlupakan. Temukan potongan kecil dari hidupmu—tawa, air mata, dan cerita
                        yang sederhana. Karena di sinilah, kenangan itu masih menunggu untuk dikenang kembali.
                    </p>
                </div>

                {/* Image Content */}
                <div className="relative w-full max-w-md aspect-square">
                    <div className="relative p-1 rounded-xl border-2 border-cyber-blue bg-gradient-to-r from-cyber-cosmic-light/30 to-cyber-nebula-dark/30 backdrop-blur-lg h-full">
                        <div className="relative rounded-xl overflow-hidden h-full">
                            <Image
                                src="/hero-section.jpeg"
                                alt="Memory Fragment 001"
                                fill
                                className="object-cover"
                                priority
                                quality={90}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <div className="text-sm text-cyber-blue">Memories Fragment</div>
                                <div className="text-xl font-bold text-white">Valueable Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
