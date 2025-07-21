import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Rajdhani } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const rajdhani = Rajdhani({
    subsets: ['latin'],
    weight: ['400', '600', '700']
});

export const metadata: Metadata = {
    title: 'Nostalgist - Digital Memory Archive',
    description: 'Rekam jejak kenangan sekolah menengah dalam bentuk galeri foto, timeline interaktif, dan soundtrack nostalgia',
    keywords: ['kenangan sekolah', 'galeri foto nostalgia', 'timeline kenangan', 'memory archive', 'sekolah menengah', 'nostalgia musik'],
    authors: [{ name: 'Xenvoid 404' }],
    openGraph: {
        title: 'Nostalgist - Digital Memory Archive',
        description: 'Rekam jejak kenangan sekolah menengah dalam bentuk galeri foto, timeline interaktif, dan soundtrack nostalgia',
        url: 'https://esempe.web.id',
        siteName: 'Nostalgist',
        images: [
            {
                url: 'https://esempe.web.id/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Nostalgist - Digital Memory Archive'
            }
        ],
        locale: 'id_ID',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nostalgist - Digital Memory Archive',
        description: 'Rekam jejak kenangan sekolah menengah dalam bentuk galeri foto, timeline interaktif, dan soundtrack nostalgia',
        images: ['https://esempe.web.id/og-image.jpg']
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png'
    },
    manifest: '/site.webmanifest',
    metadataBase: new URL('https://esempe.web.id'),
    alternates: {
        canonical: '/'
    },
    verification: {
        google: 'your-google-verification-code'
    },
    category: 'personal blog'
};

export default function RootLayout({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" className={`${rajdhani.className} scroll-smooth`} suppressHydrationWarning>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://storage.googleapis.com" crossOrigin="anonymous" />
            </head>
            <body className="font-[var(--font-rajdhani)] antialiased min-h-screen relative overflow-x-hidden">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
