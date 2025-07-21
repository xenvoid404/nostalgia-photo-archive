import * as React from 'react';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { AppWrapper } from '@/components/app-wrapper';
import './globals.css';

export const metadata: Metadata = {
    title: 'Our Story - Digital Memory Archive',
    description: 'Rekam jejak kenangan sekolah menengah dalam bentuk galeri foto, timeline interaktif, dan soundtrack nostalgia',
    keywords: ['kenangan sekolah', 'galeri foto nostalgia', 'timeline kenangan', 'memory archive', 'sekolah menengah', 'nostalgia musik'],
    authors: [{ name: 'Xenvoid 404' }],
    openGraph: {
        title: 'Our Story - Digital Memory Archive',
        description: 'Rekam jejak kenangan sekolah menengah dalam bentuk galeri foto, timeline interaktif, dan soundtrack nostalgia',
        url: 'https://ourstory.example.com',
        siteName: 'Our Story',
        images: [
            {
                url: 'https://ourstory.example.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Our Story - Digital Memory Archive'
            }
        ],
        locale: 'id_ID',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Our Story - Digital Memory Archive',
        description: 'Rekam jejak kenangan sekolah menengah dalam bentuk galeri foto, timeline interaktif, dan soundtrack nostalgia',
        images: ['https://ourstory.example.com/og-image.jpg']
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
    metadataBase: new URL('https://ourstory.example.com'),
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
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://storage.googleapis.com" crossOrigin="anonymous" />
            </head>
            <body className="font-sans antialiased min-h-screen relative overflow-x-hidden">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <AppWrapper>{children}</AppWrapper>
                </ThemeProvider>
            </body>
        </html>
    );
}
