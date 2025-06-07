import { PaletteOptions } from '@mui/material'
import { grey } from '@mui/material/colors'

const paletteDark: PaletteOptions = {
  mode: 'dark',
  background: {
    default: '#38383d',
    paper: '#26262a',
  },
  text: {
    primary: grey[100],
    secondary: grey[300],
    disabled: grey[400],
  },
}

export default paletteDark
