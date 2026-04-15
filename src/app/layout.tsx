import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wasif Sadiq | Software Engineer",
  description: "Software Engineer | Flutter Specialist | AI Enthusiast - Building high-performance mobile applications and intelligent systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} min-h-full antialiased bg-black text-white px-4 sm:px-6 lg:px-8`}>
        {children}
      </body>
    </html>
  );
}