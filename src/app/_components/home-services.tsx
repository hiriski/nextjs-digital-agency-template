'use client'

import React from 'react'

// components
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

// hooks
import { useTheme } from '@mui/material/styles'

// constants
import { services } from '@/constants/service'

// configs
import { AppConfig } from '@/configs'

type ServiceItemProps = {
  item: IService
}
const HomeServiceItem = ({ item }: ServiceItemProps) => {
  const onClick = (slug: string) => {
    console.log('slug->', slug)
  }

  return (
    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
      <Box
        sx={{
          cursor: 'pointer',
          borderRadius: 2,
          px: 5,
          py: 4,
          position: 'relative',
          overflow: 'hidden',
          transition: (theme) =>
            theme.transitions.create(['background-color', 'transform'], {
              duration: 450,
            }),
          backgroundColor: 'background.paper',
          '&:hover': {
            boxShadow: 2,
            transform: 'translateY(-4px)',

            '& button': {
              opacity: 1,
            },
          },
        }}
        onClick={() => onClick(item.slug)}
      >
        <Box
          sx={{
            img: {
              height: 64,
              width: 'auto',
            },
            mb: 3,
          }}
        >
          <Image
            src={item.image as string}
            alt={item.title}
            width={100}
            height={100}
          />
        </Box>
        <Typography
          component='h3'
          variant='h4'
          sx={{ fontSize: { xs: 18, md: 20 }, mb: 2 }}
        >
          {item.title}
        </Typography>

        <Box sx={{ height: 70, overflow: 'hidden' }}>
          <Typography
            component='p'
            sx={{ color: 'text.secondary', fontSize: 15 }}
          >
            {item.description}
          </Typography>
        </Box>
      </Box>
    </Grid>
  )
}

const HomeServices = () => {
  const { palette } = useTheme()
  return (
    <Box
      id='home-service'
      component='section'
      sx={{
        width: '100%',
        pt: { xs: 8, md: 14 },
        pb: { xs: 6, md: 12 },
        backgroundColor: palette.mode === 'dark' ? '#26273c' : '#087ae7',
      }}
    >
      <Container maxWidth='md'>
        <Box
          sx={{
            mb: 6,
            color: 'primary.contrastText',
            textAlign: { xs: 'center', md: 'left' },
            width: {
              xs: '100%',
              md: '70%',
            },
          }}
        >
          <Box
            sx={{
              mb: 3,
              borderRadius: 1,
              display: 'inline-block',
              padding: '6px 14px',
              backgroundColor: 'rgb(255,255,255,0.10)',
              color: '#fbfbfb',
            }}
          >
            <Typography
              sx={{
                fontSize: 12,
                letterSpacing: 1,
                textTransform: 'uppercase',
              }}
              variant='h5'
            >
              OUR SERVICES
            </Typography>
          </Box>
          <Typography
            variant='h1'
            sx={{
              mb: 2,
              lineHeight: 1.4,
              fontWeight: '800',
              textTransform: 'capitalize',
            }}
          >
            What do you need to keep your business growing?
          </Typography>
          <Typography
            sx={{
              color: '#ececec',
              mb: 1,
              fontSize: {
                xs: 16,
                md: 22,
              },
            }}
          >
            We provides a wide range of services aimed at helping Businesses,
            Organizations.
          </Typography>
        </Box>
      </Container>
      <Container
        sx={{
          position: 'relative',
          overflowX: {
            xs: 'hidden',
            lg: 'unset',
          },
        }}
      >
        {/* Shapes */}
        <Box sx={{ position: 'absolute', top: -10, left: -16 }}>
          <Image
            src='/images/shape-2-b.png'
            width={70}
            height={100}
            alt='Shape 2'
          />
        </Box>
        <Box sx={{ position: 'absolute', top: 40, right: -20 }}>
          <Image
            src='/images/shape-1-a.png'
            width={84}
            height={90}
            alt='Shape 1'
          />
        </Box>
        <Box sx={{ position: 'absolute', top: -40, right: 420, width: 60 }}>
          <Image
            src='/images/circle-b.svg'
            width={34}
            height={34}
            alt='Shape circle a'
          />
        </Box>
        <Box sx={{ position: 'absolute', top: 500, right: -46 }}>
          <Image
            src='/images/figure-shape-1-b.png'
            width={26}
            height={26}
            alt='Shape 3'
          />
        </Box>
        <Box sx={{ position: 'absolute', top: -30, right: 112 }}>
          <Image
            src='/images/figure-shape-4-a.png'
            width={43}
            height={38}
            alt='Shape 4'
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: 340,
            left: -40,
            transform: 'rotate(23deg)',
          }}
        >
          <Image
            src='/images/figure-shape-2.png'
            width={43}
            height={38}
            alt='Shape 4'
          />
        </Box>

        <Grid container spacing={3}>
          {services.map((item) => (
            <HomeServiceItem item={item} key={item.title} />
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 5, color: '#fbfbfb' }}>
          <Typography>
            Since its establishment in 2016, {AppConfig.appName} has focused on
            digital marketing
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeServices
