import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ZON | Digital ",
    description:
        "Marketing Digital, Web Development, Mobile Development, Branding and Graphic Design",
    keywords: "zon, Marketing Digital, Websites, Ecommerces, Aplicativos, Android, IOS, Links Partocinados, ADDS, Design Gráfico, Identidade Visual",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>
                {children}
                <Toaster position='bottom-left' />
            </body>
        </html>
    );
}
