import { alpha, PaletteOptions } from '@mui/material'
import { grey, common } from '@mui/material/colors'

const palette: PaletteOptions = {
  mode: 'light',
  background: {
    default: '#f5f5f9',
    paper: common.white,
  },
  text: {
    primary: '#202020',
    secondary: '#5c5c5c', //grey[500],
    disabled: grey[400],
  },
  divider: alpha('#000', 0.07),
}

export default palette
