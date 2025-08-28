// src/app/layout.js
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Server component: metadata can be exported here
export const metadata = {
  title: 'Zainab | Portfolio',
  description: 'Tech-driven portfolio of Zainab – Full Stack Developer & Digital Strategist',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[var(--color-bg)] text-[var(--color-text)] dark:bg-gray-900 dark:text-gray-100">
        {/* Navbar is a client component */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow pt-24">{children}</main>

        {/* Footer is a client component */}
        <Footer />
      </body>
    </html>
  );
}
