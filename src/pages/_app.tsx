import GlobalContextProvider from "@/providers/GlobalContextProvider";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";
import { Poppins, Zilla_Slab } from "@next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import createEmotionCache from "../mui/createEmotionCache";
import theme from "../mui/theme";
import "./commonStyles.css";
import { motion, useScroll } from "framer-motion";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const zillaSlab = Zilla_Slab({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-zilla",
});

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const extendedTheme = extendTheme();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssVarsProvider theme={theme}>
        <style jsx global>
          {`
            :root {
              --font-poppins: ${poppins.style.fontFamily};
              --font-zilla-slab: ${zillaSlab.style.fontFamily};
            }
          `}
        </style>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <GlobalContextProvider>
          <Component {...pageProps} />
        </GlobalContextProvider>
      </CssVarsProvider>
    </CacheProvider>
  );
}
