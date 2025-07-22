import type { Metadata } from "next";
import { Domine } from "next/font/google";
import "./globals.css";

export const domine = Domine({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Berlin",
  description: "Berlin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${domine.className} tracking-wider text-stone-800 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
