'use client';

import { MouseEvent, useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const toggleTheme = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
        const body = document.body;

        body.style.setProperty('--x', `${clientX}px`);
        body.style.setProperty('--y', `${clientY}px`);
        body.style.setProperty('--color', newTheme === 'dark' ? '#1f2937' : '#f3f4f6');

        gsap.to(body, {
            '--circle-size': '150%',
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: () => {
                setTheme(newTheme);
                gsap.to(body, {
                    '--circle-size': '0%',
                    duration: 0.3,
                    delay: 0.1
                });
            }
        });
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative flex w-10 h-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={resolvedTheme}
                    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.3 }}
                    className="absolute"
                >
                    {resolvedTheme === 'dark' ? (
                        <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    ) : (
                        <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    )}
                </motion.div>
            </AnimatePresence>
        </button>
    );
}
