import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Tanmay Dhar | Data Analyst & MBA",
  description: "Personal Portfolio of Tanmay Dhar, MBA in Business Analytics & Data Science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={outfit.className}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
