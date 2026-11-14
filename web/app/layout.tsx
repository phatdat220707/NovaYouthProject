import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BinCheck HK — Find cigarette-disposal facilities",
  description: "Explore disposal records and the evidence behind them. Nova Youth demonstration prototype.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
