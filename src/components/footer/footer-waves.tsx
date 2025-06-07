'use client'

import React, { FC } from 'react'
import Box from '@mui/material/Box'

interface Props {
  isDark: boolean
}

const FooterWaves: FC<Props> = ({ isDark }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: 'auto',
        transform: 'translateY(6px)',
        '& svg': {
          width: {
            xs: '150%',
            md: '125%',
          },
        },
      }}
    >
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill={isDark ? '#1c1b18' : '#f5f5f5'}
          fillOpacity='1'
          d='M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,197.3C672,171,768,117,864,106.7C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
    </Box>
  )
}

export default FooterWaves
