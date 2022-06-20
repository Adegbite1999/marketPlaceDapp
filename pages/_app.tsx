import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LayOut from '../layout'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <LayOut>
      <Component {...pageProps} />
    </LayOut>
  )
}

export default MyApp
