import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import clsx from "clsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LANTOSOA Mirindra Lucien",
  description: "Mirindra's portfolio, fullstack developer with DevOps skills",
  keywords: ['portfolio', 'fullstack developer', 'React', 'Next.js', 'Node.js', 'Adonis', 'web development', 'ML portfolio'],
  authors: [{ name: 'LANTOSOA Mirindra Lucien', url: 'https://mirindra-lan.vercel.app' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/icon.pg',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'LANTOSOA Mirindra - Fullstack Developer',
    description: 'Mirindra\'s portfolio, fullstack developer with DevOps skills.',
    url: 'https://mirindra-lan.vercel.app',
    siteName: 'Mirindra Lucien Portfolio',
    images: [
      {
        url: '/images/portfolio-preview.png',
        width: 800,
        height: 600,
        alt: 'Mirindra Lucien Portfolio Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LANTOSOA Mirindra - Fullstack Developer',
    description: 'Mirindra\'s portfolio, fullstack developer with DevOps skills.',
    images: ['/images/portfolio-preview.png'],
    creator: '@mirindra',
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(`${geistSans.variable} ${geistMono.variable} antialiased`)}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
