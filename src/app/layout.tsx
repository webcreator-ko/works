import type { Metadata } from "next";
import "@/app/globals.scss";

export const metadata: Metadata = {
  title: "Kotaro's Works",
  description:
    "Kotaro from WebCreator is a site where he posts his blog and portfolio, and is currently seeking work opportunities through inquiries!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
