import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Fit Log",
  description: "A simple fitness log app to track your workouts and progress.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <main className="grow container mx-auto py-12">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
