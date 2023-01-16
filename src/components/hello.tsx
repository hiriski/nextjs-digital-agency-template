import { FC } from 'react'

// Mui
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Hello: FC = () => {
  return (
    <Box sx={{ height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h2">Hello 🔥</Typography>
    </Box>
  )
}

export { Hello }
