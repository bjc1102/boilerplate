import Head from 'next/head'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../styles/theme'

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>boilerplate</title>
      </Head>
      <ThemeProvider theme={Theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
