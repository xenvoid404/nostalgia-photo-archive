import Image from 'next/image';
import { useState, useEffect } from 'react';
import albumsData from '@/data/albums.json';

export function MemoryFragments() {
    const [showAll, setShowAll] = useState(false);
    const [selectedMemory, setSelectedMemory] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const shuffleArray = (array: any[]) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const displayedAlbums = showAll ? shuffleArray(albumsData) : shuffleArray(albumsData).slice(0, isMobile ? 3 : 6);

    const openModal = (memory: any) => {
        setSelectedMemory(memory);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <section className="mt-8 container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
                <span className="text-gradient">Memory Fragments</span>
            </h2>

            {/* Memory Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {displayedAlbums.map(album => (
                    <div
                        key={album.id}
                        className="group border-2 border-cyber-purple hover:border-cyber-pink transition-all duration-300 rounded-xl overflow-hidden relative aspect-square md:h-64 cursor-pointer"
                        onClick={() => openModal(album)}
                    >
                        <Image
                            src={album.filename}
                            alt={album.title}
                            fill
                            className="w-full h-full object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 md:p-4 flex flex-col justify-end">
                            <div className="text-xs md:text-sm text-cyber-blue mb-1">1998</div>
                            <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2 line-clamp-1">{album.title}</h3>
                            <p className="text-gray-300 text-xs md:text-sm line-clamp-2">{album.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-2 sm:p-4 transition-opacity duration-300 ${
                    isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                <div className="relative bg-gray-900 border-2 border-cyber-purple rounded-xl w-full max-w-4xl max-h-[90dvh] overflow-y-auto mx-2">
                    <button
                        onClick={closeModal}
                        className="absolute top-2 right-2 md:top-4 md:right-4 text-cyber-pink hover:text-cyber-blue transition-all duration-300 z-10 p-1"
                    >
                        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="p-4 md:p-8">
                        {selectedMemory && (
                            <div className="space-y-4 md:space-y-6">
                                {/* Image Container */}
                                <div className="relative w-full aspect-square md:h-96 rounded-lg overflow-hidden bg-gray-800">
                                    <Image
                                        src={selectedMemory.filename}
                                        alt={selectedMemory.title}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 640px) 100vw, 80vw"
                                        priority
                                    />
                                </div>

                                {/* Full Size Button */}
                                <div className="flex justify-center">
                                    <a
                                        href={selectedMemory.filename}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-lg text-white hover:opacity-90 transition-opacity"
                                    >
                                        View Full Size
                                    </a>
                                </div>

                                {/* Memory Details */}
                                <div className="space-y-2 md:space-y-4">
                                    <div className="text-xs md:text-sm text-cyber-blue">1998</div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white">{selectedMemory.title}</h3>
                                    <p className="text-gray-300 text-sm md:text-base whitespace-pre-line overflow-y-auto max-h-32 md:max-h-48">
                                        {selectedMemory.description}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* View More Button */}
            {!showAll && albumsData.length > (isMobile ? 3 : 6) && (
                <div className="text-center mt-6 md:mt-8">
                    <button
                        onClick={() => setShowAll(true)}
                        className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base bg-gradient-to-r from-cyber-cosmic-light to-cyber-nebula-dark rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-cyber-purple/50"
                    >
                        View More Memories
                    </button>
                </div>
            )}
        </section>
    );
}
