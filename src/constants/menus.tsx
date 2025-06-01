// components
import Box from '@mui/material/Box'

// icons
import WorkOutlinedIcon from '@/assets/icons/material-symbols--work-outline.svg'
import HomeOutlinedIcon from '@/assets/icons/fluent--home-32-regular.svg'
import LayersOutlinedIcon from '@/assets/icons/fluent--layer-24-regular.svg'
import FolderOutlinedIcon from '@/assets/icons/fluent--folder-32-regular.svg'
import ContactOutlinedIcon from '@/assets/icons/fluent--contact-card-group-28-regular.svg'
import InfoOutlinedIcon from '@/assets/icons/jam--info.svg'
import ContactSupportOutlinedIcon from '@/assets/icons/material-symbols--contact-support-outline-rounded.svg'
import PaperOutlinedIcon from '@/assets/icons/quill--paper.svg'
import EmailOutlinedIcon from '@/assets/icons/eva--email-outline.svg'
import ShieldOutlinedIcon from '@/assets/icons/hugeicons--shield-01.svg'
import ConversationOutlinedIcon from '@/assets/icons/ci--chat-conversation.svg'

export const companyMenus: IMenu[] = [
  {
    label: 'Home',
    path: '/',
    icon: (
      <Box component={HomeOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'Services',
    path: '/services',
    icon: (
      <Box component={LayersOutlinedIcon} sx={{ width: 20, height: 'auto' }} />
    ),
  },
  {
    label: 'Portfolio',
    path: '/portfolio',
    icon: (
      <Box component={FolderOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'Contact',
    path: '/contact',
    icon: (
      <Box component={ContactOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'Career',
    path: '/career',
    icon: (
      <Box component={WorkOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'About',
    path: '/about',
    icon: (
      <Box component={InfoOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
]

export const supportLinks: IMenu[] = [
  {
    label: 'Help Center',
    path: '/help-center',
    icon: (
      <Box
        component={ContactSupportOutlinedIcon}
        sx={{ width: 22, height: 'auto' }}
      />
    ),
  },
  {
    label: 'Contact Us',
    path: '/contact-us',
    icon: (
      <Box component={EmailOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },

  {
    label: 'Terms of Services',
    path: '/terms-of-services',
    icon: (
      <Box component={PaperOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'Privacy Policy',
    path: '/privacy-policy',
    icon: (
      <Box component={ShieldOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'Live Chat',
    path: '/live-chat',
    icon: (
      <Box
        component={ConversationOutlinedIcon}
        sx={{ width: 18, height: 'auto' }}
      />
    ),
  },
]
