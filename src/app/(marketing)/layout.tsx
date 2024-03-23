import { Toaster } from "react-hot-toast";
import "@/src/assets/globals.css";
import "./style.css";
import { Inter } from 'next/font/google'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Marcio Silva - Inicio",
  description: "Advogado Marcio Silva Jundiai Casos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./images/logo-ms.png" type="image/png" />
      </head>
      <body className={`${inter.className}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
