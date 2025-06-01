'use client'

import React, { ReactNode } from 'react'

// components
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { SectionTitle } from '@/components/core'

// hooks
import { useTheme } from '@mui/material/styles'

interface Data {
  id: number
  title: string
  icon?: ReactNode
  color: string
}

export const data: Data[] = [
  {
    id: 1,
    title: 'Digital Marketing',
    icon: null,
    color: '#ff3700',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    icon: null,
    color: '#ff9e1d',
  },
  {
    id: 3,
    title: 'Development',
    icon: null,
    color: '#3397ff',
  },
  {
    id: 3,
    title: 'AI & Machine Learning',
    icon: null,
    color: '#5cb460',
  },
]

interface ItemProps {
  item: {
    id: number
    title: string
    icon?: ReactNode
    color: string
  }
}
const FeatureItem = ({ item }: ItemProps) => {
  return (
    <Box
      sx={{
        mb: { xs: 3, md: 0 },
        '&:hover': {
          '& .circle': {
            borderRadius: 2,
          },
        },
      }}
    >
      <Box
        className='circle'
        sx={{
          backgroundColor: item.color || 'primary.main',
          color: 'primary.contrastText',
          width: 44,
          height: 44,
          flex: 1,
          borderRadius: '50%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: (theme) => theme.transitions.create(['border-radius']),

          '& svg': {
            fontSize: 22,
          },
        }}
      >
        {item.icon}
      </Box>
      <Typography component='h6' variant='h6' sx={{ fontSize: 13, mt: 1.7 }}>
        {item.title}
      </Typography>
    </Box>
  )
}

const HomeAbout = () => {
  const { palette } = useTheme()
  return (
    <Box
      id='home-about'
      sx={{
        width: '100%',
        py: {
          xs: 10,
          md: 14,
          lg: 18,
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:
          palette.mode === 'dark' ? '#1b2b3c' : 'background.paper',
      }}
    >
      <Container>
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 7 }} sx={{ pr: 6 }}>
            <Box sx={{ position: 'relative', width: { xs: '100%', md: 400 } }}>
              <SectionTitle>ABOUT US ?</SectionTitle>
              <Typography
                variant='h1'
                component='h2'
                sx={{ mb: 3, fontWeight: '700' }}
              >
                Who Are We?
              </Typography>
            </Box>
            <Box sx={{ position: 'relative', zIndex: 2 }}>
              <Typography
                sx={{
                  color: 'text.primary',
                  fontWeight: '600',
                  fontSize: { xs: 19, md: 24 },
                  mb: 2,
                }}
              >
                A company that transforms ideas into beautiful things.
              </Typography>
              <Typography
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: 16, md: 18 },
                  mb: 4,
                  lineHeight: 1.6,
                }}
              >
                We are a digital and marketing agency that believes in the power
                of strategy and creative ideas.
              </Typography>
            </Box>
            <Box>
              <Grid
                container
                spacing={1}
                sx={{ position: 'relative', zIndex: 2 }}
              >
                {data.map((item, index) => (
                  <Grid key={String(item.id + index)} size={{ xs: 6, md: 3 }}>
                    <FeatureItem item={item} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: 'relative',
                overflowX: { xs: 'hidden', md: 'unset' },
              }}
            >
              <Box sx={{ position: 'absolute', top: -100, right: 132 }}>
                <svg
                  width='600'
                  height='600'
                  viewBox='0 0 1358 1089'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <defs>
                    <linearGradient
                      id='figure_moving'
                      x1='0%'
                      x2='86.603%'
                      y1='50%'
                      y2='0%'
                    >
                      <stop
                        offset='0%'
                        stopColor={
                          palette.mode === 'dark'
                            ? '#171717'
                            : 'rgb(252,253,253)'
                        }
                        stopOpacity='1'
                      ></stop>
                      <stop
                        offset='99%'
                        stopColor={
                          palette.mode === 'dark'
                            ? '#171717'
                            : 'rgb(248,250,251)'
                        }
                        stopOpacity='1'
                      ></stop>
                    </linearGradient>
                  </defs>
                  <path
                    d='M1357.57 464.94C1357.57 605.537 1180.32 1063.16 848.987 1088.34C505.565 1088.34 591.877 719.737 426.004 719.737C311.195 719.737 0 831.507 0 525.037C0 218.566 368.288 0.336304 674.758 0.336304C981.229 0.336304 1357.57 158.47 1357.57 464.94Z'
                    fill='url(#figure_moving)'
                  ></path>
                </svg>
              </Box>
              <Box
                sx={{
                  top: 24,
                  right: 300,
                  position: 'absolute',
                  borderRadius: 2,
                  overflow: 'hidden',
                  lineHeight: 0,
                }}
              >
                <Image
                  src='/images/dotted-1.png'
                  width={125}
                  height={125}
                  quality={97}
                  alt='about img'
                />
              </Box>
              <Box
                sx={{
                  top: 252,
                  right: -32,
                  position: 'absolute',
                  borderRadius: 2,
                  overflow: 'hidden',
                  lineHeight: 0,
                }}
              >
                <Image
                  src='/images/shape-2-b.png'
                  width={60}
                  height={100}
                  quality={97}
                  alt='about img'
                />
              </Box>
              <Box
                sx={{
                  top: -10,
                  right: 0,
                  position: 'absolute',
                  borderRadius: 2,
                  overflow: 'hidden',
                  lineHeight: 0,
                  width: 330,
                  height: 330,
                }}
              >
                <Image
                  src='/images/about-1.jpg'
                  width={350}
                  height={350}
                  quality={100}
                  alt='about img'
                />
              </Box>
              <Box
                sx={{
                  top: 120,
                  right: 160,
                  position: 'absolute',
                  borderRadius: 2,
                  overflow: 'hidden',
                  lineHeight: 0,
                  width: 290,
                  height: 290,
                }}
              >
                <Image
                  src='/images/about-2.jpg'
                  width={330}
                  height={330}
                  quality={100}
                  alt='about img'
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeAbout
