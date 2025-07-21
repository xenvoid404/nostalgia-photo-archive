import Image from 'next/image';
import { useState, useEffect } from 'react';
import albumsData from '@/data/albums.json';

interface Album {
    id: number;
    title: string;
    filename: string;
    description: string;
}

export function MemoryFragments() {
    const [showAll, setShowAll] = useState(false);
    const [selectedMemory, setSelectedMemory] = useState<Album | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const displayedAlbums = showAll ? shuffleArray(albumsData) : shuffleArray(albumsData).slice(0, isMobile ? 3 : 6);

    const openModal = (memory: Album) => {
        setSelectedMemory(memory);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedMemory(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                <span className="text-gradient">Memory Fragments</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {displayedAlbums.map(album => (
                    <MemoryCard key={album.id} album={album} onClick={() => openModal(album)} />
                ))}
            </div>

            {!showAll && albumsData.length > (isMobile ? 3 : 6) && (
                <div className="text-center mt-8">
                    <button
                        onClick={() => setShowAll(true)}
                        className="px-6 py-3 bg-gradient-to-r from-cyber-cosmic-light to-cyber-nebula-dark rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-cyber-purple/50"
                    >
                        View More Memories
                    </button>
                </div>
            )}

            <MemoryModal memory={selectedMemory} onClose={closeModal} />
        </section>
    );
}

function MemoryCard({ album, onClick }: { album: Album; onClick: () => void }) {
    return (
        <div
            onClick={onClick}
            className="group border-2 border-cyber-purple hover:border-cyber-pink transition-all duration-300 rounded-xl overflow-hidden relative aspect-square cursor-pointer"
        >
            <Image
                src={album.filename}
                alt={album.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                <div className="text-sm text-cyber-blue mb-1">1998</div>
                <h3 className="text-xl font-bold text-white mb-1 line-clamp-1">{album.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2">{album.description}</p>
            </div>
        </div>
    );
}

function MemoryModal({ memory, onClose }: { memory: Album; onClose: () => void }) {
    if (!memory) return null;

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative bg-gray-900 border-2 border-cyber-purple rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-cyber-pink hover:text-cyber-blue transition-colors z-10"
                    aria-label="Close modal"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="p-6 md:p-8 space-y-6">
                    <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-gray-800">
                        <Image src={memory.filename} alt={memory.title} fill className="object-contain" sizes="(max-width: 640px) 100vw, 80vw" />
                    </div>

                    <div className="flex justify-center">
                        <a
                            href={memory.filename}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-lg text-white hover:opacity-90 transition-opacity"
                        >
                            View Full Size
                        </a>
                    </div>

                    <div className="space-y-4">
                        <div className="text-sm text-cyber-blue">1998</div>
                        <h3 className="text-2xl font-bold text-white">{memory.title}</h3>
                        <p className="text-gray-300 whitespace-pre-line overflow-y-auto max-h-48">{memory.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function shuffleArray(array: Album[]) {
    return [...array].sort(() => Math.random() - 0.5);
}
