import Navbar from "@/components/Fragments/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const disable = ["auth", "admin", "member"];

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { pathname } = useRouter();
  return (
    <SessionProvider session={session}>
      <div className={lato.className}>
        <Head>
          <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
        </Head>
        {!disable.includes(pathname.split("/")[1]) && <Navbar />}
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
