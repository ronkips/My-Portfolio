import "../styles/globals.css";
import { DarkModeProvider } from "@context/darkModeContext";

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;
