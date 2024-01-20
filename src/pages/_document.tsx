import { Html, Head, Main, NextScript } from "next/document";
// import { Inter } from "next/font/google";

// export const fontSans = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });
import { ClerkProvider } from "@clerk/nextjs";

import { cn } from "../lib/utils";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
