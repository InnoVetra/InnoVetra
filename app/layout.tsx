import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InnoVetra Technologies LLC | Intelligent Infrastructure",
  description:
    "AI, digital twins, infrastructure intelligence, and resilient cities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}