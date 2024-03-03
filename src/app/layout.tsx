import type { Metadata } from "next";
import "@/app/globals.scss";
import { Pacifico } from "next/font/google";

export const metadata: Metadata = {
  title: "Kotaro's Works",
  description:
    "Kotaro from WebCreator is a site where he posts his blog and portfolio, and is currently seeking work opportunities through inquiries!",
};

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${pacifico.variable}`}>
      <body>{children}</body>
    </html>
  );
}
