import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milztech — Creativity & Technology",
  description: "Quiet Intelligence. Minimal site with calm motion.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
