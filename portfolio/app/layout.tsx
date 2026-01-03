import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "David | Software Developer",
  description: "Software developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="border-b p-4">
          <nav className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
