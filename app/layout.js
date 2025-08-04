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
  title: "Questra — Explore. Learn. Advance.",
  description:
    "Questra is your AI-powered agent for intelligent exploration, research, and discovery. Where curiosity meets cognition.",

  openGraph: {
    title: "Questra — Explore. Learn. Advance.",
    description:
      "Questra is your AI-powered research agent designed for intelligent exploration and deep insight discovery.",
    url: "https://questra-ai-nine.vercel.app", 
    siteName: "Questra",
    images: [
      {
        url: "https://questra-ai-nine.vercel.app/og-image.png", // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Questra - AI Research Agent",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Questra — Your AI Agent for Intelligent Exploration",
    description:
      "Meet Questra — a modern AI assistant that helps researchers and thinkers discover insights, faster.",
    site: "@questra_ai", // your Twitter handle
    creator: "@questra_ai",
    images: ["https://questra-ai-nine.vercel.app/og-image.png"],
  },

  metadataBase: new URL("https://questra-ai-nine.vercel.app/"), // ensure base is set for static exports
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#3D8BFF"
}


export default function RootLayout({ children }) {
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
