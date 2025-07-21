'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function AppWrapper({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative animate-glow rounded-xl"
        >
            {children}
        </motion.div>
    );
}
