'use client'

// @mui utils
import { createTheme as createMuiTheme, Theme } from '@mui/material/styles'

// theme configs
import { ThemeConfig } from './configs'

export const createTheme = (isDarkMode?: boolean): Theme => {
  const palette = isDarkMode
    ? { ...ThemeConfig.paletteBase, ...ThemeConfig.paletteDark }
    : { ...ThemeConfig.paletteBase, ...ThemeConfig.paletteLight }
  return createMuiTheme({
    palette,
    typography: ThemeConfig.typography,
    breakpoints: ThemeConfig.breakpoints,
    shadows: ThemeConfig.shadows,
  })
}

const theme = createTheme(false)

export default theme
