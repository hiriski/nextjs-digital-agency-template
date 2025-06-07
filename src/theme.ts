'use client'

// @mui utils
import { createTheme as createMuiTheme, Theme } from '@mui/material/styles'

// theme configs
import { ThemeConfig } from './configs'

export const createTheme = (isDark?: boolean): Theme => {
  const palette = isDark
    ? { ...ThemeConfig.paletteBase, ...ThemeConfig.paletteDark }
    : { ...ThemeConfig.paletteBase, ...ThemeConfig.paletteLight }

  return createMuiTheme({
    palette,
    typography: ThemeConfig.typography,
    breakpoints: ThemeConfig.breakpoints,
    shadows: ThemeConfig.shadows,
  })
}
