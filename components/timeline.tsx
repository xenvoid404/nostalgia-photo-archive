export function Timeline() {
    return (
        <section className="mt-8 container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
                <span className="text-gradient">Memory Timeline</span>
            </h2>

            <div className="relative">
                <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyberpurple via-cyberpink to-cyberblue"></div>

                <div className="space-y-12">
                    <div className="relative pl-10 md:w-1/2 md:pl-0 md:pr-16 md:mr-auto md:text-right">
                        <div className="timeline-dot absolute left-0 top-2 w-4 h-4 bg-cyberblue rounded-full border-2 border-white"></div>
                        <div className="p-6 bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl border border-gray-800">
                            <div className="text-sm text-cyberpink mb-2">2018</div>
                            <h3 className="text-xl font-bold mb-2">First Meeting</h3>
                            <p className="text-gray-400">We first met in kindergarten. You were wearing light-up sneakers.</p>
                        </div>
                    </div>

                    <div className="relative pl-10 md:w-1/2 md:ml-auto md:pl-16">
                        <div className="timeline-dot absolute left-0 top-2 w-4 h-4 bg-cyberpurple rounded-full border-2 border-white md:left-auto md:right-0"></div>
                        <div className="p-6 bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl border border-gray-800">
                            <div className="text-sm text-cyberpink mb-2">2018 - 2020</div>
                            <h3 className="text-xl font-bold mb-2">Creating Memories</h3>
                            <p className="text-gray-400">Our secret headquarters with makeshift tech gadgets.</p>
                        </div>
                    </div>

                    <div className="relative pl-10 md:w-1/2 md:pl-0 md:pr-16 md:mr-auto md:text-right">
                        <div className="timeline-dot absolute left-0 top-2 w-4 h-4 bg-cyberpink rounded-full border-2 border-white"></div>
                        <div className="p-6 bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl border border-gray-800">
                            <div className="text-sm text-cyberpink mb-2">Singularity</div>
                            <h3 className="text-xl font-bold mb-2">End</h3>
                            <p className="text-gray-400">Two weeks at the beach collecting shells and skipping rocks.</p>
                            <button onclick="showLocationOnMap('beach')" className="mt-3 text-xs flex items-center text-cyberblue">
                                <svg
                                    className="w-4 h-4 mr-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    ></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                VIEW LOCATION
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
