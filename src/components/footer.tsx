// components
'use client'

import { AppConfig } from '@/configs'
import Box from '@mui/material/Box'
import { useCallback } from 'react'

const GITHUB_FOOTER_IMG =
  'https://github.com/hiriski/hiriski/raw/master/banners/banner-copyright-light(2025).png'

const Footer = () => {
  const onClick = useCallback(() => {
    window.open(AppConfig.authorGithubUrl, '_blank')
  }, [])
  return (
    <Box
      sx={{
        mt: 12,
        pb: 6,
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
        src={GITHUB_FOOTER_IMG}
        alt='Copyright'
        sx={{ width: '100%', cursor: 'pointer' }}
      />
    </Box>
  )
}

export default Footer
