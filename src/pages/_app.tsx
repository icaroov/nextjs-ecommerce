import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '~app/styles/global'
import theme from '~app/styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>NextJS Boilerplate</title>
        <link rel="shortcut icon" href="/assets/img/icon-2.png" />
        <link rel="apple-touch-icon" href="/assets/img/icon-2.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A TypeScript + Next.js boilerplate that includes all you need to build fantastic projects."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
