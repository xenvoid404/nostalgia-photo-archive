import Image from 'next/image';

export function BackgroundElement() {
    return (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
            <div className="absolute w-full h-full radial-gradient">
                <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-cyber-nebula blur-3xl opacity-20">
                    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-cyber-cosmic blur-3xl opacity-15">
                        <Image
                            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fbcf2584-9faf-40c9-a2c4-1d048f8cc03b.png"
                            alt="Abstract cyberpunk grid lines in purple hues blending into the background"
                            fill
                            className="absolute bottom-0 left-0 w-full opacity-5 mix-blend-overlay"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
