import type { AppProps } from "next/app";
import "../firebaseConfig";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
