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
      <body className="bg-black text-primary antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
