import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sneha Nethsara — Full Stack Developer",
  description:
    "Student Developer passionate about Web Development, FiveM Development, Discord Bots, and creating modern digital experiences. Based in Sri Lanka.",
  keywords: [
    "Sneha Nethsara",
    "Full Stack Developer",
    "Web Developer",
    "FiveM Developer",
    "Discord Bot Developer",
    "Portfolio",
    "Sri Lanka",
  ],
  authors: [{ name: "Sneha Nethsara" }],
  openGraph: {
    title: "Sneha Nethsara — Full Stack Developer",
    description:
      "Student Developer passionate about Web Development, FiveM Development, Discord Bots, and creating modern digital experiences.",
    url: "https://zaikodev.xyz",
    siteName: "Sneha Nethsara",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050816] text-[#f1f5f9] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
