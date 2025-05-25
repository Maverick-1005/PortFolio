import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Loading from "./components/Loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ansh Mishra | Portfolio",
  description: "Portfolio website showcasing my work and skills",
  icons: {
    icon: [
      {
        url: '/A.svg',
        href: '/A.svg',
      }
    ]
  },
  manifest: '/manifest.json'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Loading />
        {children}
      </body>
    </html>
  );
}
