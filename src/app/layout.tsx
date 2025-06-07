import { JSX } from 'react'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

// configs
import { AppConfig } from '@/configs'

// components
// import AppBar from '@/components/appbar/app-bar'
import Footer from '@/components/footer/footer'
import FooterGithubBanner from '@/components/footer-github-banner'

// @mui provider
import MuiThemeProvider from '@/plugins/@mui/components/@mui-theme.provider'

// app context provider
import { AppContextProvider } from '@/contexts'

// global styles
import './globals.css'

const AppBar = dynamic(() => import('@/components/appbar/app-bar'), {
  loading: () => <div>Loading...</div>,
  ssr: !!false,
})

const plugJakartaSans = Plus_Jakarta_Sans({
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: AppConfig.appName,
  description: AppConfig.appDescription,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang='en'>
      <body className={plugJakartaSans.variable}>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <AppContextProvider>
            <MuiThemeProvider>
              <AppBar />
              {children}
              <Footer />
              <FooterGithubBanner />
            </MuiThemeProvider>
          </AppContextProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
