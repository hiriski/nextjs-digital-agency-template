import { alpha, PaletteOptions } from '@mui/material'
import { grey, common } from '@mui/material/colors'

const palette: PaletteOptions = {
  mode: 'light',
  background: {
    default: '#f5f5f9',
    paper: common.white,
  },
  text: {
    primary: grey[800],
    secondary: grey[600],
    disabled: grey[500],
  },
  divider: alpha('#000', 0.07),
}

export default palette
