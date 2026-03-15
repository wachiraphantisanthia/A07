import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import BookingLink from "@/components/BookingLink";  // ← Import Component ใหม่
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VenueVista",
  description: "Event Venue Booking Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950`}>
        <nav className="bg-gray-900 p-4 fixed w-full top-0 z-50 border-b border-gray-800">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo ด้านซ้าย - ไม่ใช้ event handler */}
            <div 
              className="text-white text-xl font-bold px-4 py-2 rounded-lg"
              style={{
                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)'
              }}
            >
              Venue
            </div>

            {/* ใช้ Client Component สำหรับ Booking Link */}
            <BookingLink />
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}