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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Move CSS variable-dependent styling here */}
      <body className="min-h-screen flex flex-col font-sans bg-[var(--color-bg)] text-[var(--color-text)]">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow pt-24">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
