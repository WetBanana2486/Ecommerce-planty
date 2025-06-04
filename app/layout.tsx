import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planty",
  description: "Official website of planty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <body className="flex flex-col min-h-full bg-slate-50"> {/* Use min-h-full or min-h-screen */}
        {/* <Navbar /> */}
        <Header />
        <main className="flex-grow"> {/* flex-grow to push the footer down */}
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
