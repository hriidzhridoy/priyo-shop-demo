import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer1";
import Intro from "@/components/Footer/Intro";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PriyoShop - B2B Marketplace for MSMEs in Bangladesh",
  description:
    "PriyoShop is an AI-powered B2B marketplace using EV logistics & embedded finance to transform MSME retail in Bangladesh.",
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
        <Header />
        <div className="pt-12">{children}</div>
        <Intro />

        {/* <Footer /> */}
      </body>
    </html>
  );
}
