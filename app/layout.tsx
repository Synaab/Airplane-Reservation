import type { Metadata } from "next";
import {Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Airplane Reservation",
  description: "صفحه رزرو پرواز",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${tajawal.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
