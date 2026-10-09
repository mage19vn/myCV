import type { Metadata } from "next";
import "./globals.css";
import { SITE_PUBLISHED, cvData } from "@/content/cv";

export const metadata: Metadata = {
  title: `${cvData.name} - ${cvData.title}`,
  description: cvData.summary || "Personal CV",
  robots: SITE_PUBLISHED ? "index, follow" : "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen selection:bg-[var(--color-primary)] selection:text-white">
        {children}
      </body>
    </html>
  );
}
