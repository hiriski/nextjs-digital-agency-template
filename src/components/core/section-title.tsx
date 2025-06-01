import React, { FC, ReactNode } from 'react'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'

interface Props {
  children: ReactNode
  sx?: SxProps
}

const SectionTitle: FC<Props> = ({ children }: Props) => {
  return (
    <Typography
      variant='h2'
      component='h2'
      sx={{
        fontSize: 14,
        color: 'primary.main',
        position: 'relative',
        letterSpacing: '0.02rem',
        pl: 4,
        mb: 2,
        '&:before': {
          content: '""',
          position: 'absolute',
          display: 'inline-block',
          top: '50%',
          transform: 'translateY(-60%)',
          left: '0',
          width: 20,
          height: '0.05rem',
          backgroundColor: 'primary.main',
        },
      }}
    >
      {children}
    </Typography>
  )
}

export default SectionTitle
