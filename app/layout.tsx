import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skora.site"),
  title: "Skora",
  description:
    "Skora – practice coding interviews with an AI mentor and realistic mock interviewer. Track your roadmap, write code in-browser, and get honest feedback on every solution.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/branding.png",
  },
  openGraph: {
    title: "Skora – AI-powered coding interview practice",
    description:
      "Practice coding interviews with an AI mentor and mock interviewer in your browser. Follow a curated roadmap, get live feedback, and track your LeetCode-style progress.",
    url: "https://skora.site",
    siteName: "Skora",
    images: [
      {
        url: "/branding.png",
        width: 1152,
        height: 768,
        alt: "Skora – AI-powered coding interview practice",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skora – AI-powered coding interview practice",
    description:
      "Practice coding interviews with an AI mentor and mock interviewer. Solve problems in-browser, get detailed feedback, and track your progress.",
    images: ["/branding.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global Google Analytics (gtag.js) – loaded once for the whole app.
            Only loads when NEXT_PUBLIC_GA_MEASUREMENT_ID is configured. */}
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}');
                `,
              }}
            />
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
