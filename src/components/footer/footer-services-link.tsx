'use client'

import React from 'react'
import RouterLink from 'next/link'
import Box from '@mui/material/Box'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { Theme } from '@mui/material/styles'
import { FooterSectionTitle } from '@/components/footer'
import { services } from '@/constants/service'

// icons
import ArrowIcon from '@/assets/icons/material-symbols--call-made.svg'

const FooterServicesLink = () => {
  return (
    <Box sx={{ textAlign: 'left' }}>
      <FooterSectionTitle title='Services' />
      {services.map((item, index) => (
        <MuiLink
          key={String(index)}
          component={RouterLink}
          href={`/services/${item.slug}`}
          target='_blank'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            textDecoration: 'none',
            color: 'text.primary',
            marginLeft: '-8px',
            height: 32,
            '& svg': {
              transform: 'translateX(-16px)',
              transition: (theme: Theme) =>
                theme.transitions.create(['transform'], { duration: 250 }),
            },
            '& p': {
              ml: 0,
              transform: 'translateX(-8px)',
              transition: (theme: Theme) =>
                theme.transitions.create(['transform'], { duration: 250 }),
            },
            overflow: 'hidden',
            '&:hover': {
              color: 'primary.main',
              textDecorationColor: 'underline',
              textDecoration: 'underline',
              '& svg': {
                transform: 'translateX(0)',
              },
              '& p': {
                transform: 'translateX(0)',
                ml: 0.75,
              },
            },
          }}
        >
          <Box component={ArrowIcon} sx={{ width: 18, height: 18 }} />
          <Typography sx={{ fontWeight: '500' }}>{item.title}</Typography>
        </MuiLink>
      ))}
    </Box>
  )
}

export default FooterServicesLink
