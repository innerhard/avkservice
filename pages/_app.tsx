import '../styles/globals.css'
import "@fontsource/roboto"
import type { AppProps } from 'next/app'
import Head from 'next/head';



function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}
export default MyApp
