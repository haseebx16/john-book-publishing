"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { useEffect } from "react";
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import { SpeedInsights } from "@vercel/speed-insights/next";
import TitleUpdater from './components/TitleUpdater';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  fallback: ['Arial', 'sans-serif'],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    // Defer Tawk.to script loading until after page load
    const loadTawk = () => {
      const script = document.createElement("script");
      script.src = "https://embed.tawk.to/67a64544825083258e11df9f/1ijgnt5jj";
      script.async = true;
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      document.body.appendChild(script);
    };

    // Load after page is interactive
    if (document.readyState === 'complete') {
      setTimeout(loadTawk, 2000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(loadTawk, 2000);
      });
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Kindle Publishing Hub</title>
        <meta name="description" content="Kindle Publishing Hub - Expert book publishing services for authors" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://embed.tawk.to" />
        <link rel="preload" href="/bg-image.jpg" as="image" fetchPriority="high" />
      <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16944365395"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-aw" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16944365395');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16851710462"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-aw" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16851710462');
          `}
        </Script>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P495WRFL4E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-g" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P495WRFL4E');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased`}
      >
        <TitleUpdater />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}