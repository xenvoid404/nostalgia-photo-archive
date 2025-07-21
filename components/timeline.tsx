export function Timeline() {
    return (
        <section className="container mx-auto px-4 my-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                <span className="text-gradient">Memory Timeline</span>
            </h2>

            <div className="relative">
                <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyber-purple via-cyber-pink to-cyber-blue"></div>

                <div className="space-y-12">
                    <TimelineItem
                        year="2018"
                        title="First Encounter"
                        description="Awal perkenalan kita di masa SMP. Masih canggung, tapi diam-diam saling memperhatikan dan mulai membentuk ikatan yang belum kita sadari saat itu."
                        dotColor="bg-cyber-blue"
                        position="left"
                    />

                    <TimelineItem
                        year="2018 – 2020"
                        title="Shared Chapters"
                        description="Hari-hari penuh tawa, tugas kelompok, dan obrolan ringan yang perlahan jadi kenangan besar. Kita tumbuh bersama, meski kadang tak sadar."
                        dotColor="bg-cyber-purple"
                        position="right"
                        showLocation
                    />

                    <TimelineItem
                        year="2020"
                        title="Closing Days"
                        description="Waktu terus berjalan dan akhirnya kita sampai di lembaran akhir. Tak ada kata perpisahan yang cukup, hanya kenangan yang diam-diam kita simpan."
                        dotColor="bg-cyber-pink"
                        position="left"
                    />
                </div>
            </div>
        </section>
    );
}

function TimelineItem({
    year,
    title,
    description,
    dotColor,
    position,
    showLocation
}: {
    year: string;
    title: string;
    description: string;
    dotColor: string;
    position: 'left' | 'right';
    showLocation?: boolean;
}) {
    return (
        <div className={`relative pl-10 md:w-1/2 ${position === 'left' ? 'md:pr-16 md:mr-auto md:text-right' : 'md:pl-16 md:ml-auto'}`}>
            <div
                className={`timeline-dot absolute left-0 top-2 w-4 h-4 ${dotColor} rounded-full border-2 border-white ${
                    position === 'right' ? 'md:left-auto md:right-0' : ''
                }`}
            ></div>
            <div className="p-6 bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800">
                <div className="text-sm text-cyber-pink mb-2">{year}</div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-400">{description}</p>

                {showLocation && (
                    <button className="mt-3 text-xs flex items-center text-cyber-blue">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        VIEW LOCATION
                    </button>
                )}
            </div>
        </div>
    );
}
