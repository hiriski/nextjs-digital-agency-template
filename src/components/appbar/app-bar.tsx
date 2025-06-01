'use client'

import React, { FC, Fragment, useCallback, useMemo } from 'react'

// components
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import AppBarNavigation from './app-bar-navigations'
import AppBarSwitchDarkMode from './switch-dark-mode'
import AnimatedHamburgerMenu from './animated-hamburger-menu'

// hooks
import { useWindowScroll } from 'react-use'
import { useMediaQuery } from '@mui/material'
import { useTheme, Theme } from '@mui/material/styles'
import { usePathname, useRouter } from 'next/navigation'

// assets
import Logo from '@/assets/logo.svg'

const AppBar: FC = () => {
  const theme = useTheme()
  const { y: scrollY } = useWindowScroll()
  const mobileMatches = useMediaQuery(theme.breakpoints.down('md'))

  const router = useRouter()
  const pathName = usePathname()

  const shouldFloating = useMemo(() => {
    return scrollY > 120
  }, [scrollY])

  const backgroundColor = useMemo(() => {
    if (shouldFloating) {
      return theme.palette.mode === 'light'
        ? 'rgb(255 255 255 / 80%)'
        : 'rgb(0 0 0 / 80%)'
    } else {
      return 'transparent'
    }
  }, [shouldFloating, theme])

  const onClickLogo = useCallback(() => {
    if (pathName === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }, [pathName, router])

  return (
    <Fragment>
      <Box
        sx={{
          position: 'fixed',
          boxSizing: 'border-box',
          top: 0,
          left: '50%',
          transform: 'translate(-50%, 0%)',
          width: {
            xs: '100%',
            md: 1200,
          },
          zIndex: 1100, // zIndex @mui AppBar
          textAlign: 'center',
        }}
      >
        <Container
          sx={{
            px: {
              xs: '16px !important',
              md: '0 !important',
            },
            pt: {
              xs: 1,
              md: 0,
            },
          }}
        >
          <Box
            className={shouldFloating ? 'floating' : 'fixed-top'}
            sx={{
              mt: {
                xs: 1,
                md: 2.4,
              },
              backgroundColor,
              display: 'flex',
              alignItems: 'center',
              transition: (theme: Theme) =>
                theme.transitions.create([
                  'transform',
                  'margin-top',
                  'background-color',
                  'padding',
                ]),
              backdropFilter: shouldFloating ? 'blur(8px)' : 'unset',
              borderRadius: 10,
              padding: 0,
              '&.floating': {
                mt: 1.4,
                padding: {
                  xs: '12px 16px',
                  md: '14px 20px',
                },
                boxShadow: 3,
              },
            }}
          >
            <Box
              onClick={onClickLogo}
              aria-label={'Back to home'}
              component={Logo}
              sx={{
                width: 'auto',
                cursor: 'pointer',
                height: shouldFloating ? 32 : 40,
                transition: (theme: Theme) =>
                  theme.transitions.create(['transform', 'height']),
              }}
            />
            {mobileMatches ? (
              <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
                <AnimatedHamburgerMenu />
              </Box>
            ) : (
              <>
                <AppBarNavigation />
                <AppBarSwitchDarkMode />
              </>
            )}
          </Box>
        </Container>
      </Box>
    </Fragment>
  )
}

export default AppBar
