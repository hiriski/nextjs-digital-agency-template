import { JSX } from 'react'
import dynamic from 'next/dynamic'

// components
import Stack from '@mui/material/Stack'
import PageLoader from '@/components/section-loader'

const HomeHero = dynamic(() => import('./_components/home-hero'), {
  loading: () => <PageLoader />,
})

const HomePage = (): JSX.Element => {
  return (
    <Stack direction='column'>
      <HomeHero />
    </Stack>
  )
}

export default HomePage
