import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Om Rindhe| Web & MERN StacK, Software Developer",
  description:
    "Explore my portfolio featuring everything about me, my projects and my Contact information.",
  keywords: ["web developer", "MERN stack", "Next.js", "portfolio", "React"],
  openGraph: {
    title: "Om Rindhe | Web & MERN Stack, Software Developer",
    description:
      "Explore my portfolio featuring everything about me, my projects and my Contact information.",
    url: "mdmiranahmad.vercel.app",
    siteName: "Md Miran Ahmad Portfolio",
    images: [
      {
        url: "#",
        width: 1200,
        height: 630,
        alt: "Omm Rindhe Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Rindhe | Web & MERN Stack, Software Developer",
    description:
      "Explore my portfolio featuring everything about me, my projects and my Contact information.",
    // images: ["#],
  },
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
