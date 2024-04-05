import ThemeRegistry from "@/component/ThemeRegistry";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeRegistry>
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </ThemeRegistry>
  );
}
