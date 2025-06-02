import type { Metadata } from "next";
import { Exo, Courier_Prime } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/globals/nav-bar";

const exo = Exo({
    variable: "--font-exo",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Novium",
    description: "DigitalExperiencesThatDriveResults",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${exo.variable} antialiased bg-novium-bg`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
