import Image from 'next/image';

export function MemoryFragments() {
    return (
        <section className="mt-8">
            <h2 className="text-xl font-bold text-center">
                <span className="text-gradient">Memory Fragments</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border-2 border-cyber-purple hover:border-cyber-pink transition-all duration-500 rounded-xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70">
                        <Image src="/albums/gardening.jpeg" alt="Gardening" width={400} height={400} className="w-full h-64 object-cover" />
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <div className="text-sm text-cyberblue mb-1">1998</div>
                            <h3 className="text-xl font-bold mb-2">Bike Adventures</h3>
                            <p className="text-gray-400 text-sm">Exploring the neighborhood until sunset</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
