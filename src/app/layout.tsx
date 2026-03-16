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
  title: "Fresh Batch Box | Handcrafted Edmonton Cookie Subscription",
  description: "Handcrafted cookies & cupcakes baked fresh in Edmonton — delivered monthly to your door. Build your perfect box and support local YEG bakery.",
  openGraph: {
    title: "Fresh Batch Box | Edmonton's Fresh-Treat Subscription",
    description: "Monthly delivery of handcrafted cookies and cupcakes in Edmonton. Build your box today!",
    type: "website",
    locale: "en_CA",
    siteName: "Fresh Batch Box",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} font-sans antialiased bg-warm-beige text-deep-chocolate`}
      >
        <BoxProvider>
          {children}
        </BoxProvider>
      </body>
    </html>
  );
}
