import type { Metadata } from "next";
import { Playfair_Display, Libre_Baskerville, Geist_Mono } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-serif-heading",
  subsets: ["latin"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-serif-body",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Communication Coach | Build Confidence in Every Conversation",
  description: "Your personal AI-powered communication coach. Practice interviews, master important conversations, and express yourself with confidence—tailored feedback for job seekers and early-career professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${libreBaskerville.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
