import type { AppProps } from 'next/app'
import { store } from '@/store'
import Popup from '@/features/popup'
import { Provider } from 'react-redux'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Popup />
    </Provider>
  )
}

export default MyApp
