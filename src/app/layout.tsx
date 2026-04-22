import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "@/app/globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "GNJR - Gremio Nacional de Juventudes Rurales de Chile",
    description: "Jóvenes rurales organizados para transformar el territorio. Innovación, representatividad y desarrollo desde y para el mundo rural.",
    generator: "v0.app",
    keywords: "juventud rural, Chile, agricultura, desarrollo rural, innovación, territorio, GNJR",
    icons: {
        icon: [
            {
                url: "/icon-light-32x32.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/icon-dark-32x32.png",
                media: "(prefers-color-scheme: dark)",
            },
            {
                url: "/icon.svg",
                type: "image/svg+xml",
            },
        ],
        apple: "/apple-icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`font-sans antialiased`}>
                <div className="min-h-screen">
                    <Navigation />
                    {children}
                    <Footer />
                </div>
                <Analytics />
            </body>
        </html>
    );
}
