import { JSX } from 'react'
import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

// global styles
import './globals.css'

import { ThemeProvider } from '@mui/material'
import theme from '@/theme'
import { AppConfig } from '@/configs'

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['300', '400', '500', '700'],
  variable: '--font-be-vietnam-pro',
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
      <body className={beVietnamPro.variable}>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
