'use client'

import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

interface Props {
  title: string
  alignItems?: 'center' | 'flex-start' | 'flex-end'
}

const FooterSectionTitle: FC<Props> = ({ title, alignItems }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mb: 2,
        alignItems: {
          xs: 'flex-start',
          md: alignItems || 'flex-start',
        },
      }}
    >
      <Typography
        component='p'
        variant='subtitle2'
        sx={{
          mb: 1,
          textTransform: 'uppercase',
          color: 'text.secondary',
          fontWeight: '500',
        }}
      >
        {title}
      </Typography>
      <Divider sx={{ width: 50 }} />
    </Box>
  )
}

export default FooterSectionTitle
