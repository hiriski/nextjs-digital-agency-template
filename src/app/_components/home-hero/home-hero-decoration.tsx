'use client'

import React, { memo } from 'react'

// components
import Image from 'next/image'
import Box from '@mui/material/Box'

// motion
import { motion } from 'framer-motion'

// styles
import { animatedDecorations } from './home-hero-decoration.styles'

const HomeHeroDecoration = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      {animatedDecorations.map((item, index) => (
        <Box
          key={String(index)}
          sx={{
            position: 'absolute',
            ...item.sxRoot,
          }}
        >
          <motion.div
            initial={item.initial}
            animate={item.animate}
            transition={item.transition}
          >
            <Box sx={item.sxImgContainer}>
              <Image
                src={item.image.imageUrl}
                width={item.image.width}
                height={item.image.height}
                quality={90}
                alt='Decoration img'
              />
            </Box>
          </motion.div>
        </Box>
      ))}
    </Box>
  )
}

export default memo(HomeHeroDecoration)
