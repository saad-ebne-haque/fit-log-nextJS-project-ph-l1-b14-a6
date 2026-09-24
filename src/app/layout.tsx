import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";


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
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      
        <main className="grow">
          {children}
        </main>
      </body>
    </html>
  );
}
