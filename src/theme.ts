'use client'
import { createTheme as createMuiTheme, Theme } from '@mui/material/styles'

import paletteBase from './configs/theme/palette-base'
import paletteDark from './configs/theme/palette-dark'
import paletteLight from './configs/theme/palette-light'
import typography from './configs/theme/typography'
import breakpoints from './configs/theme/breakpoints'
import shadows from './configs/theme/shadows'

export const createTheme = (isDark?: boolean): Theme => {
  const palette = isDark
    ? { ...paletteBase, ...paletteDark }
    : { ...paletteBase, ...paletteLight }
  return createMuiTheme({
    palette,
    typography,
    breakpoints,
    shadows,
  })
}

const theme = createTheme(false)

export {
  paletteBase,
  paletteDark,
  paletteLight,
  typography,
  breakpoints,
  shadows,
}
export default theme
