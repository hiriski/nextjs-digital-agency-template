// components
'use client'

import { AppConfig } from '@/configs'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { useCallback } from 'react'

const GITHUB_FOOTER_IMG =
  'https://github.com/hiriski/hiriski/raw/master/banners/banner-copyright-light(2025).png'

const FooterGithubBanner = () => {
  const onClick = useCallback(() => {
    window.open(AppConfig.authorGithubUrl, '_blank')
  }, [])
  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        backgroundColor: 'background.default',
        border: `1px solid ${theme.palette.divider}`,
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
          src={GITHUB_FOOTER_IMG}
          alt='Copyright'
          sx={{ width: '100%', cursor: 'pointer' }}
        />
      </Stack>
    </Box>
  )
}

export default FooterGithubBanner
