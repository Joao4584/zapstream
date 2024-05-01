import "@/src/assets/globals.css";
import { Toaster } from "@/src/components/ui/sonner";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Dashboard - Inicio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right"
        />
        {children}
      </body>
    </html>
  )
}
