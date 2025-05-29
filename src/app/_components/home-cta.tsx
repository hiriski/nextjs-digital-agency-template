'use client'

import React from 'react'

// components
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '@/components/core'

// configs
import { AppConfig } from '@/configs'

// navigation
import Link from 'next/link'

const HomeCTA = () => {
  return (
    <Box
      id='home-cta'
      component='section'
      sx={{
        width: '100%',
        py: {
          xs: 6,
          md: 8,
          lg: 12,
        },
        backgroundColor: 'background.paper',
      }}
    >
      <Container>
        <Box
          sx={{
            backgroundImage: "url('/images/bg3.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            borderRadius: 2,
            color: '#fbfbfb',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              py: { xs: 6, md: 8 },
              px: { xs: 2, md: 0 },
              mx: 'auto',
              width: {
                xs: '100%',
                md: 600,
              },
            }}
          >
            <Typography
              component='h4'
              variant='h6'
              sx={{ mb: 2, lineHeight: 1.4 }}
            >
              Ready to create something amazing ?
            </Typography>
            <Typography variant='h2' sx={{ mb: 5, lineHeight: 1.6 }}>
              Start your business journey better with {AppConfig.appName}
            </Typography>
            <Link href='/contact'>
              <StyledButton variant='contained' color='light' size='large'>
                Work With Us
              </StyledButton>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeCTA
