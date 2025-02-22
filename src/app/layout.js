import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Jost } from 'next/font/google';
import Navbar from "@/components/Navbar";
import TopHeader from "@/components/Top";
import Footer from "@/components/Footer2";

const jost = Jost({
  subsets: ['latin'], // Specify the subsets you need
  weight: ['400', '700'], // Specify the weights you intend to use
  display: 'swap', // Use 'swap' to ensure text is displayed immediately
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ColpAI",
  description: "AI-driven app for early cervical cancer detection and empowerment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
      <TopHeader/>
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
