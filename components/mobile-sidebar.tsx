'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export function MobileSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out md:hidden">
            <div className="flex flex-col h-full px-6 py-4">
                <div className="flex items-center justify-between mb-8">
                    <button onClick={onClose} className="text-gray-300 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav className="flex flex-col justify-center items-center h-full space-y-8 -mt-16">
                    <Link href="#" onClick={onClose} className="text-2xl text-gray-300 hover:text-white transition-colors">
                        Memories
                    </Link>
                    <Link href="#" onClick={onClose} className="text-2xl text-gray-300 hover:text-white transition-colors">
                        Gallery
                    </Link>
                    <Link href="#" onClick={onClose} className="text-2xl text-gray-300 hover:text-white transition-colors">
                        Timeline
                    </Link>
                </nav>
            </div>
        </div>
    );
}
