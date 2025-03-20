import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { UserContextProvider } from "@/providers/UserProvider";

// Configure your fonts!
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// CUSTOMIZE: Update these values for your specific project!
const SITE_NAME = "Next.js Starter Kit";
const SITE_DESCRIPTION = "A modern, SEO-optimized starter kit for your Next.js projects with pre-built components and responsive design.";
const SITE_URL = "https://your-domain.com";

// SEO metadata configuration!
export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME} - Modern Web Application Template`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "next.js", 
    "react", 
    "typescript", 
    "tailwind css", 
    "starter kit", 
    "boilerplate", 
    "template"
  ],
  authors: [{ name: "Your Name or Company" }],
  creator: "Your Name or Company",
  publisher: "Your Name or Company",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  // CUSTOMIZE: Update with your actual domain!
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    // CUSTOMIZE: Add your actual OG image!
    images: [
      {
        url: "/images/og-image.jpg", // Create this image in your public folder!
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    // CUSTOMIZE: Add your Twitter handle without @
    creator: "yourhandle",
    // CUSTOMIZE: Add your actual Twitter image!
    images: ["/images/twitter-image.jpg"], // Create this image in your public folder!
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Viewport Configuration!
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <UserContextProvider>{children}</UserContextProvider>
      </body>
    </html>
  );
}
