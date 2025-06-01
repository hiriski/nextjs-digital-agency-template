'use client'

// @mui utils
import { createTheme as createMuiTheme, Theme } from '@mui/material/styles'

// theme configs
import { ThemeConfig } from './configs'
import Cookies from 'js-cookie'

export const createTheme = (): Theme => {
  const isDark = Cookies.get('preferred_color_mode') === 'dark' ? true : false
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

const theme = createTheme()

export default theme
