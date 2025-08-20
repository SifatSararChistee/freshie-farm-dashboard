import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/header";
import Footer from "@/Components/footer";
import Sidebar from "@/Components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Freshie Farm Clone",
  description: "Freshie Farm Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header></Header>
        <div className="flex h-[700px] mx-auto max-w-7xl mt-4 gap-4">

          {/* left sidebar */}
          <div className="w-[30%] bg-white/95 backdrop-blur rounded-2xl p-5 shadow-xl h-fit flex flex-col">
              <Sidebar></Sidebar>
          </div>

            {/* childerns */}
          <div>
              {children}
          </div>
        </div>
      
        <Footer></Footer>
      </body>
    </html>
  );
}
