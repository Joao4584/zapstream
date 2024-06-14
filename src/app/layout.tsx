import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import "@/src/assets/globals.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";

import { Providers } from '@/src/providers';


const inter = Inter({ subsets: ['latin'], fallback: ['sans-serif'] })

export const metadata: Metadata = {
  title: "ZapStream - Dashboard", description: "Next 14 App @2024",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={"pt-BR"} suppressHydrationWarning>
      <body className={inter.className + "w-screen h-screen "}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
