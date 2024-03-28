import { Toaster } from "react-hot-toast";
import "@/src/assets/globals.css";
import DashboardLayout from "@/src/components/DashboardLayout";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "Dashboard - Inicio",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {


    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" type="image/ico" />
            </head>
            <body className={`w-screen h-screen relative ${inter.className}`}>
                <DashboardLayout>
                    {children}
                </DashboardLayout>
            </body>
        </html>
    );
}
