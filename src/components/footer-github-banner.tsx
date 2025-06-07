'use client'
import { useCallback, useMemo } from 'react'

// components
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material'

const Footer = () => {
  const { palette } = useTheme()

  const footerBannerImg = useMemo(() => {
    const paletteMode = palette.mode
    return `https://github.com/hiriski/hiriski/raw/master/banners/banner-copyright-${paletteMode}(2025).png`
  }, [palette])

  const onClick = useCallback(() => {
    window.open('https://github.com/hiriski', '_blank')
  }, [])
  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        backgroundColor:
          palette.mode === 'dark' ? '#1c1b18' : 'background.default',
        borderTop: `1px solid ${theme.palette.divider}`,
      })}
    >
      <Stack
        sx={{
          py: 6,
          width: {
            xs: '90%',
            md: 820,
          },
          mx: 'auto',
        }}
      >
        <Box
          onClick={onClick}
          component='img'
          src={footerBannerImg}
          alt='Copyright'
          sx={{ width: '100%', cursor: 'pointer' }}
        />
      </Stack>
    </Box>
  )
}

export default Footer
