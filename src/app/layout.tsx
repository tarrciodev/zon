import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ZON",
    description:
        "ZON |Marketing Digital, Desenvolvimento Web e criação de Aplicativos, Branding Design Gráfico",
    keywords:
        "zon, Marketing Digital, Websites, Ecommerces, Aplicativos, Android, IOS, Links Partocinados, ADDS, Design Gráfico, Identidade Visual",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className='overflow-x-hidden flex flex-col h-screen'>
                {children}
                <Toaster position='bottom-left' />
            </body>
        </html>
    );
}
