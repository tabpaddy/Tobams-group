import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({ variable: "--font-lato", subsets: ["latin"], weight: ["400", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "Training and Development | Tobams Group",
  description: "Training and development programmes from Tobams Group.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${lato.variable} antialiased`}><body>{children}</body></html>;
}
