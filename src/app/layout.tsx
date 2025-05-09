import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import {Poppins} from 'next/font/google'
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Rodape from "@/components/Rodape/Rodape";


const font = Poppins({
  weight:['100', '200', '300','400','500','600','700','800','900'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Projeto PCD",
  description: "Portal PCD - Acessibilidade e Informação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${font.className} antialiased`}>
        <ResponsiveNav/>
        {children}
        <Rodape/>
      </body>
    </html>
  );
}
