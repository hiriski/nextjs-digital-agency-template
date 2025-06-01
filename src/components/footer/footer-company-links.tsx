'use client'

import React, { FC, ReactNode } from 'react'
import { Box, Typography } from '@mui/material'
import MuiLink from '@mui/material/Link'
import RouterLink from 'next/link'
import { Theme } from '@mui/material'
import { FooterSectionTitle } from '@/components/footer'
import { companyMenus } from '@/constants/menus'

interface LinkItemProps {
  label: string
  path: string
  icon?: ReactNode
}

const LinkItem: FC<LinkItemProps> = ({ label, path, icon }) => {
  return (
    <MuiLink
      component={RouterLink}
      href={`/services/${path}`}
      target='_blank'
      sx={{
        textDecoration: 'none',
        alignItems: 'center',
        mb: 0.5,
        color: 'text.primary',
        display: 'flex',
        alignItem: 'center',
        justifyContent: {
          xs: 'flex-start',
          md: 'flex-end',
        },

        // Icon
        '& svg': {
          fontSize: 18,
          verticalAlign: 'middle',
          zIndex: 2,
        },
        '& p': {
          marginRight: 1,
        },

        '& .icon-container': {
          position: 'relative',
          height: 28,
          width: 28,
          alignItems: 'center',
          justifyContent: 'center',
          '&:before': {
            zIndex: -1,
            content: '""',
            display: 'block !important',
            width: 28,
            height: 28,
            position: 'absolute',
            top: 0,
            backgroundColor: (theme: Theme) => theme.palette.primary.main,
            transform: 'scale(0)',
            borderRadius: '50%',
            transition: (theme: Theme) =>
              theme.transitions.create(
                ['background-color', 'transform', 'scale'],
                { duration: 250 }
              ),
          },
        },
        '&:hover': {
          color: 'primary.main',
          '& .icon-container': {
            color: '#fff',
            '&:before': {
              transform: 'scale(1)',
              zIndex: 1,
            },
          },
        },
      }}
    >
      <Typography
        component='p'
        sx={{
          display: 'inline-block',
          color: 'inherit',
          fontWeight: '500',
        }}
      >
        {label}
      </Typography>
      <Box
        className='icon-container'
        sx={{ display: { xs: 'none', md: 'flex' } }}
      >
        {icon}
      </Box>
    </MuiLink>
  )
}

const FooterCompanyLinks: FC = () => {
  return (
    <Box>
      <FooterSectionTitle title='Company' alignItems='flex-end' />
      {companyMenus.map((item, index) => (
        <LinkItem
          key={item.label + String(index)}
          label={item.label}
          path={item.path}
          icon={item.icon}
        />
      ))}
    </Box>
  )
}

export default FooterCompanyLinks
