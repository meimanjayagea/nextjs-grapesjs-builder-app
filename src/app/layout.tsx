
import { SpeedInsights } from '@vercel/speed-insights/next';
import localFont from "next/font/local";
import "./globals.css";
import "./styled-custom.scss";

import {Analytics} from '@vercel/analytics/react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: "coartdev",
  description: 'Meiman Jaya Gea | APP'
};


export default function RootLayout({children}: {children: React.ReactNode;}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
