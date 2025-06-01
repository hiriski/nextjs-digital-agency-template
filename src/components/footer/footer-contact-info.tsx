'use client'

import React, { FC, ReactNode } from 'react'
import { Box, Typography } from '@mui/material'
import { FooterSectionTitle } from '@/components/footer'

// icons
import EmailIcon from '@/assets/icons/eva--email-outline.svg'
import PhoneIcon from '@/assets/icons/eva--phone-outline.svg'
import LocationIcon from '@/assets/icons/tdesign--location.svg'

interface ContactInfoItemProps {
  icon: ReactNode
  label: string
  value: string
  link: string
}

const ContactInfoItem: FC<ContactInfoItemProps> = ({
  icon,
  label,
  value,
  link,
}: ContactInfoItemProps) => {
  return (
    <Box
      sx={{
        mb: 2.2,
        display: 'block',
        width: {
          xs: '100%',
          md: 360,
        },
        color: 'text.primary',
        textDecoration: 'none',
        ':hover': {
          color: 'primary.main',
        },
      }}
      component='a'
      href={link}
    >
      <Box
        sx={{
          display: 'flex',
        }}
      >
        {icon}
        <Box>
          <Typography
            dangerouslySetInnerHTML={{ __html: value }}
            sx={{ mb: 0.6, fontSize: 15, lineHeight: 1.3 }}
            variant='h6'
          />
        </Box>
      </Box>
      <Typography
        variant='subtitle1'
        sx={{ color: 'text.secondary', ml: '32px' }}
      >
        {label}
      </Typography>
    </Box>
  )
}

const FooterContactInfo: FC = () => {
  return (
    <Box sx={{ mb: { xs: 4, md: 0 } }}>
      <FooterSectionTitle title='Contact Info' />
      <ContactInfoItem
        value='info@example.com'
        label='Response within 24hrs'
        link='mailto:info@example.com'
        icon={
          <Box
            component={EmailIcon}
            sx={{ mr: 1.4, width: 22, height: 'auto' }}
          />
        }
      />
      <ContactInfoItem
        value='+62 812000xxxx'
        label='Sen - Jum / 9am - 5:30pm'
        link='https://wa.me/62812000xxxx'
        icon={
          <Box
            component={PhoneIcon}
            sx={{ mr: 1.4, width: 22, height: 'auto' }}
          />
        }
      />
      <ContactInfoItem
        value='123 Business St., Suite 456, City, State, ZIP Code, Country'
        label='Office'
        link='#'
        icon={
          <Box
            component={LocationIcon}
            sx={{ mr: 1.4, width: 22, height: 'auto' }}
          />
        }
      />
    </Box>
  )
}

export default FooterContactInfo
