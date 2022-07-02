import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LayOut from '../layout';
import {NFTContextProvider} from "../context/state";

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <LayOut>
      <NFTContextProvider>
      <Component {...pageProps} />
      </NFTContextProvider>
    </LayOut>
  )
}

export default MyApp
