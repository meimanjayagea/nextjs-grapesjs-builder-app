
import { SpeedInsights } from '@vercel/speed-insights/next';
import localFont from "next/font/local";
import Head from 'next/head';
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
  description: 'website | Meiman Jaya Gea',
  key: "coartdev"
};


export default function RootLayout({children}: {children: React.ReactNode;}) {
  return (
    <html lang="en" suppressHydrationWarning>
       <Head>
            <title>coartdev</title>
            <meta name="website app | Meiman Jaya Gea" content="Meiman jaya Gea | Page Chat AI, Web Builder, Article, and Documentation" />
            <meta property="og:title" content="coartdev | Page Chat AI, Web Builder, Article, and Documentation " />
            <meta property="og:description" content="Web App Portofolio and Personal Documentation" />
            <meta property="og:type" content="Meiman Jaya Gea | Page Chat AI, Web Builder, Article, and Documentation  " />
            <link rel="icon" href='/favicon.ico' sizes="any" />
        </Head>
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
