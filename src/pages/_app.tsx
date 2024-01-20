// pages/_app.js

import "@/styles/globals.css";
import { AppProps } from "next/app";
// import { Inter as FontSans } from "next/font/google";

// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

import { ClerkProvider } from "@clerk/nextjs";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <div className={`font-sans antialiased `}>
        <Component {...pageProps} />
      </div>
    </ClerkProvider>
  );
}

export default MyApp;
