// src/app/layout.js
import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Zainab | Portfolio',
  description: 'Tech-driven portfolio of Zainab – Full Stack Developer & Digital Strategist',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth bg-[var(--color-bg)]">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="min-h-screen flex flex-col font-sans text-[var(--color-text)]">
        {/* Navbar */}
        {/* This ensures your new Navbar is used across all pages */}
        <Navbar />

        {/* Main content */}
        {/* pt-24 ensures content doesn't go under the fixed navbar */}
        <main className="flex-grow pt-24">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
