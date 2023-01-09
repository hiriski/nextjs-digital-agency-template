import React, { FC, PropsWithChildren } from 'react'

// Mui
import { ThemeProvider } from '@mui/material/styles'

// Theme config
import { createTheme } from '@/features/theme/config'

const MuiThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = createTheme('light')
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export { MuiThemeProvider }
