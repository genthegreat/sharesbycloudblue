import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from 'react';
import { scrapeWebsite } from '../server/scraper';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Run the scraper on app start
    scrapeWebsite();
  }, []);

  return <Component {...pageProps} />;
}
