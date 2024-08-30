import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../src/createEmotionCache'
import Head from 'next/head'
import { NextPage } from 'next'
import { AppGlobalStyles } from '@/layouts/AppGlobalStyles'


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()


export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
  Component: NextPageWithLayout
}

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
        <title>{'Tavern'}</title>
      </Head>
      <AppGlobalStyles>
        {getLayout(<Component {...pageProps} />)}
      </AppGlobalStyles>
    </CacheProvider>
  )
}

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
