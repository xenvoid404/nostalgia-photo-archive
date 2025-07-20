'use client';

import { BackgroundElement } from '@/components/background-element';
import { Header } from '@/components/header';
import { MobileSidebar } from '@/components/mobile-sidebar';
import { useState } from 'react';

export default function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <BackgroundElement />
            <Header onOpenSidebar={() => setIsSidebarOpen(true)} />
            <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </>
    );
}
