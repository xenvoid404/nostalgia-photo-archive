import { BackgroundElement } from '@/app/components/background-element';
import { Header } from '@/app/components/header';
import { MobileSidebar } from '@/app/components/mobile-sidebar';

export default function Home() {
    return (
        <>
            <BackgroundElement />
            <Header />
            <MobileSidebar />
        </>
    );
}
