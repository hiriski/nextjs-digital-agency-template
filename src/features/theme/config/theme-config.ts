import merge from 'lodash.merge'

import { createTheme as createMuiTheme, Theme } from '@mui/material/styles'
import type { PaletteMode } from '@mui/material'

// Theme config
import { paletteBase } from './theme.palette-base'
import { paletteLight } from './theme.palette-light'
import { paletteDark } from './theme.palette-dark'
import { typography } from './theme.typography'
import { shadows } from './theme.shadows'
import { components } from './theme.components'

const createTheme = (mode?: PaletteMode): Theme => {
  const palette = mode === 'dark' ? merge(paletteBase, paletteDark) : merge(paletteBase, paletteLight)
  return createMuiTheme({
    palette,
    typography,
    shadows,
    components,
  })
}

export { createTheme }
