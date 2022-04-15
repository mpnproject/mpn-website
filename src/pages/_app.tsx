/* eslint-disable max-len */
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "~/styles/global";
import { theme } from "~/styles/theme";

// eslint-disable-next-line max-lines-per-function
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
        </style>
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
