import Image from 'next/image';

export function BackgroundElement() {
    return (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
            <div className="absolute w-full h-full radial-gradient">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyber-purple-light blur-[100px] opacity-30">
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyber-pink blur-[100px] opacity-25">
                        <Image
                            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fbcf2584-9faf-40c9-a2c4-1d048f8cc03b.png"
                            alt="Abstract cyberpunk grid lines in purple hues blending into the background"
                            fill
                            className="absolute bottom-0 left-0 w-full opacity-10 mix-blend-overlay"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
