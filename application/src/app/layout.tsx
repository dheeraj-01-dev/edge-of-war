import type { Metadata } from "next";
import "./globals.css";

import { Exo_2 } from "next/font/google";
import Script from "next/script";

const exo = Exo_2({ weight: "400", subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Edge of War",
  description: "battleroyale esports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
      <body className={exo.className}>
        {children}
        <div id="globalToast">
          <div id="toastText">Say me Anything!</div>
        </div>
      </body>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
    </html>
  );
}
