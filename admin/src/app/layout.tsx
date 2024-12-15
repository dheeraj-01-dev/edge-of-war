import type { Metadata } from "next";
import "./globals.css";

import { Exo_2 } from "next/font/google";
import Script from "next/script";
import { cookies } from "next/headers";

const exo = Exo_2({ weight: "400", subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Edge of War",
  description: "battleroyale esports",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const cookieStore = cookies();
    const adminToken = (await cookieStore).get("__eow_admin_token")?.value;
  
    if(!adminToken){
      return(
        <html>
          <body>
            <div>
              Not Authorized !
            </div>
          </body>
        </html>
      )
    };

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
