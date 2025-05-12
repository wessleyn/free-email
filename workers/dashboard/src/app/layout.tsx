export const runtime = "edge";

import "@styles/globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Free Email",
  description: "Free email, one catch, bring your domain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Free Email" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
