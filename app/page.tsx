'use client';
import { useState } from 'react';
import { BackgroundElement } from '@/components/background-element';
import { Header } from '@/components/header';
import { MobileSidebar } from '@/components/mobile-sidebar';
import { HeroSection } from '@/components/hero-section';
import { MusicPlayer } from '@/components/music-player';
import { MemoryFragments } from '@/components/memory-fragments';
import { Timeline } from '@/components/timeline';
import { FrienNetwork } from '@/components/friend-network';
import { TechStack } from '@/components/tech-stack';
import { Footer } from '@/components/footer';

export default function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <main>
            <BackgroundElement />
            <Header onOpenSidebar={() => setIsSidebarOpen(true)} />
            <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <div className="space-y-16 pb-16">
                <HeroSection />
                <MusicPlayer />
                <MemoryFragments />
                <Timeline />
                <FrienNetwork />
                <TechStack />
            </div>

            <Footer />
        </main>
    );
}
