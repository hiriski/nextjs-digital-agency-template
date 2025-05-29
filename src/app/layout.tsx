import { JSX } from 'react'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

// global styles
import './globals.css'

import { ThemeProvider } from '@mui/material'
import theme from '@/theme'
import { AppConfig } from '@/configs'
import Footer from '@/components/footer'

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
          <ThemeProvider theme={theme}>
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
