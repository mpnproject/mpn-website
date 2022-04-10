import React, { FC } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "~/styles/global";
import theme from "~/styles/theme";

interface Props {
  pageProps: any,
  Component: any,
}

const App: FC<Props> = ({ Component, pageProps }) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );

export default App;
