import { JSX } from 'react'

import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

const HomePage = (): JSX.Element => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background.default',
      }}
    >
      <Typography variant='h2'>Hello World</Typography>
    </Box>
  )
}

export default HomePage
