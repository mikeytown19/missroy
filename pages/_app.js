import globalStyles from "../theme/globalStyles";
import { AnimatePresence } from "framer-motion";
import "@fontsource/dm-sans";
import "@fontsource/inter";
globalStyles();

export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
