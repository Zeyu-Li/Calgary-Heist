import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const validUrl = () => {
    // if ()
  }
  return <Component {...pageProps} />
}

export default MyApp
