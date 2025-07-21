export function FrienNetwork() {
    return (
        <section className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                <span className="text-gradient">Friend Networks</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <div className="relative mx-auto w-24 h-24 rounded-full border-2 border-cyber-blue transition-all duration-500 overflow-hidden ease-in-out">
                    <div className="text-center">
                        <img
                            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c9b417d5-0d3e-4d7f-ba1b-5b1c930eefc4.png"
                            alt="Childhood best friend portrait with cyberpunk neon glow effect"
                            class="w-full h-full object-cover"
                        />
                        <div class="absolute inset-0 bg-cyberblue bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-500"></div>
                        <button
                            onclick="messageFriend('Alex')"
                            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <h3 class="font-bold text-lg">Alex</h3>
                    <p class="text-sm text-gray-500">Neighbor</p>
                    <div class="mt-2">
                        <span class="inline-block px-2 py-1 bg-cyberpurple bg-opacity-20 text-xs rounded-full">1994-2006</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
