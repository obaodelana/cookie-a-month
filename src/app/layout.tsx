import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import "./globals.css";
import { BoxProvider } from "@/context/BoxContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cookie a Month | Sweetness Delivered",
  description: "A cookie a month, keeps the cravings at bay. Sweetness delivered to your doorstep in Edmonton.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} font-quicksand antialiased bg-[#fffafb] text-slate-900`}
      >
        <BoxProvider>
          {children}
        </BoxProvider>
      </body>
    </html>
  );
}
