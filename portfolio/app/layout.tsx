import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header"


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
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <Header/>
        <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
