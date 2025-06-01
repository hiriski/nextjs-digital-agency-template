'use client'

import React, { FC, useCallback, useMemo } from 'react'

// components
import Box from '@mui/material/Box'
import { StyledRoundedButton } from '@/components/core'

// js cookie
import Cookie from 'js-cookie'

const saveCookies = (mode: string) => {
  Cookie.set('preferred_color_mode', mode)
}

const SwitchDarkMode: FC = () => {
  const isDark = useMemo(() => {
    return Cookie.get('preferred_color_mode') === 'dark'
  }, [])

  const toggleDarkMode = useCallback(() => {
    const cookie = Cookie.get('preferred_color_mode')
    saveCookies(cookie == 'dark' ? 'light' : 'dark')
  }, [])

  return (
    <Box
      sx={{
        fontSize: 20,
        marginLeft: '110px',
        '& svg': { width: 22, height: 'auto' },
      }}
    >
      <StyledRoundedButton color='default' onClick={toggleDarkMode}>
        {isDark ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={20}
            height={20}
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={20}
            height={20}
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
          </svg>
        )}
      </StyledRoundedButton>
    </Box>
  )
}

export default SwitchDarkMode
