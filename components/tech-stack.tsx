import { SiHtml5, SiCss3, SiTailwindcss, SiTypescript, SiNextdotjs, SiReact, SiFramer } from 'react-icons/si';

const technologies = [
    {
        name: 'HTML',
        icon: <SiHtml5 className="w-full h-full" />,
        color: 'text-orange-500'
    },
    {
        name: 'CSS',
        icon: <SiCss3 className="w-full h-full" />,
        color: 'text-blue-500'
    },
    {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className="w-full h-full" />,
        color: 'text-cyan-400'
    },
    {
        name: 'TypeScript',
        icon: <SiTypescript className="w-full h-full" />,
        color: 'text-blue-600'
    },
    {
        name: 'Next.js',
        icon: <SiNextdotjs className="w-full h-full" />,
        color: 'text-white'
    },
    {
        name: 'React',
        icon: <SiReact className="w-full h-full" />,
        color: 'text-blue-400'
    },
    {
        name: 'Framer Motion',
        icon: <SiFramer className="w-full h-full" />,
        color: 'text-purple-500'
    }
];

export function TechStack() {
    return (
        <section className="py-12 container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                <span className="text-gradient">Tech Stack</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {technologies.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center group">
                        <div className={`w-16 h-16 md:w-20 md:h-20 relative mb-3 ${tech.color} transition-all duration-300 group-hover:scale-110`}>
                            {tech.icon}
                        </div>
                        <span className="text-sm md:text-base font-medium text-gray-300 text-center">{tech.name}</span>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center text-gray-400 max-w-2xl mx-auto">
                <p className="text-sm md:text-base">
                    Website ini dibangun dengan teknologi modern untuk memberikan pengalaman terbaik dengan performa optimal.
                </p>
            </div>
        </section>
    );
}
