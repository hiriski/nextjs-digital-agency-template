import { FC } from 'react'

// Next
import Head from 'next/head'
import type { AppProps } from 'next/app'

// Emotion
import { CacheProvider } from '@emotion/react'
import createCache, { EmotionCache } from '@emotion/cache'

// Interfaces
import { NextPageWithLayout } from '@/features/app/interfaces'
import { MuiThemeProvider } from '@/components/providers'

// Mui
import CssBaseline from '@mui/material/CssBaseline'

// Fonts
import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/700.css'
import '@fontsource/plus-jakarta-sans/800.css'

// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
function createEmotionCache(): EmotionCache {
  return createCache({ key: 'css', prepend: true })
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

type AppPropsWithLayout = AppProps & {
  emotionCache: EmotionCache
  Component: NextPageWithLayout
}

const App: FC<AppPropsWithLayout> = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <MuiThemeProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </MuiThemeProvider>
    </CacheProvider>
  )
}

export default App
