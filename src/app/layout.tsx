import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Yeah We Good',
  description:
    'Hands-on product leadership services from Cody Musser for building and scaling products and businesses.',
  openGraph: {
    title: 'Yeah We Good',
    description:
      'Hands-on product leadership services from Cody Musser for building and scaling products and businesses.',
    url: 'https://yourdomain.com',
    siteName: 'Yeah We Good',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yeah We Good – Cody Musser Product Leadership',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yeah We Good',
    description:
      'Hands-on product leadership services from Cody Musser for building and scaling products and businesses.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
