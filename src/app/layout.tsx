import { JSX } from 'react'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

// global styles
import './globals.css'

// @mui theme provider
import { CssBaseline, ThemeProvider } from '@mui/material'

// configs
import theme from '@/theme'
import { AppConfig } from '@/configs'

// components
import AppBar from '@/components/appbar/app-bar'
import Footer from '@/components/footer/footer'
import FooterGithubBanner from '@/components/footer-github-banner'

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
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <AppBar />
            {children}
            <Footer />
            <FooterGithubBanner />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
