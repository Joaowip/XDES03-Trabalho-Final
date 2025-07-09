import type { Metadata } from "next";
import {Cormorant_Garamond} from 'next/font/google';
import "@/app/globals.css";
import Header from "./ui/header";
import Footer from "./ui/footer";
import { Toaster } from "react-hot-toast";

const Cormorant = Cormorant_Garamond({ 
  weight: ['700'], 
  subsets: ['latin']});

export const metadata: Metadata = {
  title: "HP Rank"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={Cormorant.className}>
      <body>
        <Header />
        {children}
        <Footer />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
