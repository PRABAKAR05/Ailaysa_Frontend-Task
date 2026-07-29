// I am Batman
import type { Metadata, Viewport } from "next";
import { Poppins, Noto_Sans } from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-sans",
  display: "swap",
});

import { APP_NAME } from "@/lib/constants";
import { ClientLogger } from "@/components/ClientLogger";

export const metadata: Metadata = {
  title: APP_NAME,
  description: `${APP_NAME} — web and mobile app`,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${notoSans.variable}`}>
      <body>
        <ClientLogger />
        {children}
      </body>
    </html>
  );
}
