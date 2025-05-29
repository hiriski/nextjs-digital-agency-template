'use client'

import React, { memo, useEffect, useState } from 'react'

// components
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Link } from 'react-scroll'

// assets
import MouseIcon from '@/assets/icons/iconamoon--mouse-light.svg'
import Logo from '@/assets/logo.svg'

// motion
import { motion, AnimatePresence } from 'framer-motion'

// configs
// import { AppConfig } from '@/configs'

const MotionTypography = motion(Typography)

const HomeHeroContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const SERVICES_TEXTS = [
    'Digital Marketing',
    'UI/UX Design',
    'Web & Mobile App Development',
    'Cloud Solutions',
    'Data & Analytics',
    'AI & Machine Learning',
    'E-Commerce Solutions',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SERVICES_TEXTS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [SERVICES_TEXTS.length])

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.5,
      }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.15,
        type: 'spring',
        bounce: 0.15,
      }}
    >
      <Stack
        direction='column'
        sx={{
          position: 'relative',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Stack
          direction='row'
          sx={(theme) => ({
            mb: 2,
            transition: theme.transitions.create(['all'], {
              duration: theme.transitions.duration.complex,
            }),
            div: {
              transition: theme.transitions.create(['all'], {
                duration: theme.transitions.duration.complex,
              }),
            },
          })}
        >
          <Box
            sx={() => ({
              width: 24,
              height: 'auto',
              mr: 1.5,
              mt: '2px',
            })}
          >
            <Box component={Logo} />
          </Box>
          <Box>
            <AnimatePresence mode='wait'>
              <MotionTypography
                key={currentIndex}
                variants={{
                  initial: { y: 20 },
                  animate: { y: 0 },
                  exit: { opacity: 0, y: -20 },
                }}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                }}
                sx={(theme) => ({
                  fontSize: {
                    xs: 17,
                    md: 18,
                  },
                  fontWeight: '600',
                  color: theme.palette.primary.main,
                })}
              >
                {SERVICES_TEXTS[currentIndex]}
              </MotionTypography>
            </AnimatePresence>
          </Box>
        </Stack>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            component='h2'
            sx={{
              mb: 2,
              fontSize: { xs: 34, md: 46, lg: 62 },
              lineHeight: 1.2,
              fontWeight: '800',
            }}
          >
            Let&apos;s Grow Your
            <br />
            Business.
          </Typography>
          <Typography
            sx={{
              mb: 4,
              color: 'text.secondary',
              fontWeight: 500,
              lineHeight: 2,
              fontSize: {
                xs: 14,
                md: 17,
              },
            }}
          >
            A Digital Modern Agency specializing in <strong>Design </strong>,
            <strong>Development </strong>, <strong>Branding </strong>,
            <br />
            and <strong>Online Marketing </strong> to elevate your business.
          </Typography>
        </Box>
        <motion.div
          initial={{
            opacity: 0,
            y: 200,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            type: 'spring',
            bounce: 0,
          }}
        >
          <Box
            sx={() => ({
              mt: '120px',
              mb: '-120px',
              textAlign: 'center',
            })}
          >
            <Link
              to='home-about'
              offset={0}
              spy={true}
              smooth={true}
              duration={400}
              style={{ display: 'block' }}
            >
              <Box
                component={MouseIcon}
                height={50}
                width={50}
                sx={(theme) => ({
                  color: theme.palette.text.secondary,
                })}
              />
              <Typography
                sx={{
                  color: 'text.disabled',
                  fontWeight: '500',
                  fontSize: 12,
                  mt: 1.2,
                }}
              >
                Scroll for more
              </Typography>
            </Link>
          </Box>
        </motion.div>
      </Stack>
    </motion.div>
  )
}

export default memo(HomeHeroContent)
