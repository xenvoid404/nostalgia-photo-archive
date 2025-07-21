'use client';
import Link from 'next/link';
import { ReactNode } from 'react';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

export function MobileSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const sidebarVariants: Variants = {
        hidden: { opacity: 0, x: '100%' },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                damping: 25,
                stiffness: 200
            }
        },
        exit: {
            opacity: 0,
            x: '100%',
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        }
    };

    const menuItemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 + i * 0.1,
                duration: 0.4,
                ease: 'easeOut'
            }
        }),
        exit: { opacity: 0 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={sidebarVariants}
                    className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-md md:hidden"
                >
                    <div className="flex flex-col h-full px-6 py-4">
                        <div className="flex justify-end mb-8">
                            <button onClick={onClose} aria-label="Close menu" className="text-gray-300 hover:text-white z-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <nav className="flex flex-col justify-center items-center h-full space-y-8 -mt-16">
                            {['Memories', 'Gallery', 'Timeline'].map((item, index) => (
                                <motion.div key={item} custom={index} initial="hidden" animate="visible" exit="exit" variants={menuItemVariants}>
                                    <MobileNavLink onClose={onClose} href="#">
                                        {item}
                                    </MobileNavLink>
                                </motion.div>
                            ))}
                        </nav>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function MobileNavLink({ href, onClose, children }: { href: string; onClose: () => void; children: ReactNode }) {
    return (
        <Link
            href={href}
            onClick={e => {
                e.preventDefault();
                onClose();
            }}
            className="text-2xl text-gray-300 hover:text-white transition-colors"
        >
            {children}
        </Link>
    );
}
