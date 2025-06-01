import { Theme } from '@emotion/react'
import { SxProps } from '@mui/material'
import {
  AnimationControls,
  TargetAndTransition,
  Transition,
  VariantLabels,
} from 'framer-motion'

type AnimateDecoration = {
  sxRoot: SxProps<Theme>
  sxImgContainer: SxProps<Theme>
  initial: TargetAndTransition | VariantLabels | boolean
  animate: AnimationControls | TargetAndTransition | VariantLabels | boolean
  transition: Transition
  image: {
    imageUrl: string
    width: number
    height: number
  }
}

export const animatedDecorations: Array<AnimateDecoration> = [
  {
    sxRoot: {
      top: -30,
      right: 40,
    },
    sxImgContainer: {
      width: 330,
    },
    initial: { rotate: -20, opacity: 0, scale: 2, x: 200 },
    animate: { rotate: 0, opacity: 1, scale: 1, x: 0 },
    transition: {
      delay: 0.35,
      type: 'spring',
      bounce: 0,
    },
    image: {
      imageUrl: '/images/hero/flowerpot.png',
      width: 550,
      height: 471,
    },
  },
  {
    sxRoot: {
      top: 0,
      left: 0,
    },
    sxImgContainer: {
      width: 250,
    },
    initial: { rotate: 10, opacity: 0, scale: 1.25, x: -100 },
    animate: { rotate: 0, opacity: 1, scale: 1, x: 0 },
    transition: {
      delay: 0.35,
      type: 'spring',
      bounce: 0,
    },
    image: {
      imageUrl: '/images/hero/camera.png',
      width: 458,
      height: 309,
    },
  },
  {
    sxRoot: {
      left: 234,
      bottom: 272,
      transform: 'rotate(-45deg)',
    },
    sxImgContainer: {
      width: 40,
    },
    initial: { rotate: -50, opacity: 0, y: 400 },
    animate: { rotate: 0, opacity: 1, y: 0 },
    transition: {
      delay: 0.52,
      type: 'spring',
      bounce: 0,
    },
    image: {
      imageUrl: '/images/hero/paperclip.png',
      width: 100,
      height: 90,
    },
  },
  {
    sxRoot: {
      left: 274,
      bottom: 216,
      transform: 'rotate(13deg)',
    },
    sxImgContainer: {
      width: 40,
    },
    initial: { rotate: -50, opacity: 0, y: 400 },
    animate: { rotate: 0, opacity: 1, y: 0 },
    transition: {
      delay: 0.52,
      type: 'spring',
      bounce: 0,
    },
    image: {
      imageUrl: '/images/hero/paperclip.png',
      width: 100,
      height: 90,
    },
  },
  {
    sxRoot: {
      left: -110,
      bottom: -160,
    },
    sxImgContainer: {
      width: 520,
    },
    initial: { rotate: 0, opacity: 0, y: 300 },
    animate: { rotate: 0, opacity: 1, y: 0 },
    transition: {
      delay: 0.35,
      type: 'spring',
      bounce: 0,
    },
    image: {
      imageUrl: '/images/hero/papers.png',
      width: 900,
      height: 1000,
    },
  },
  {
    sxRoot: {
      left: 270,
      bottom: 106,
    },
    sxImgContainer: {
      width: 148,
    },
    initial: { rotate: -50, opacity: 0, y: 400 },
    animate: { rotate: 0, opacity: 1, y: 0 },
    transition: {
      delay: 0.52,
      type: 'spring',
      bounce: 0,
    },
    image: {
      imageUrl: '/images/hero/edding.png',
      width: 217,
      height: 320,
    },
  },
  {
    sxRoot: {
      bottom: 0,
      left: 100,
    },
    sxImgContainer: {
      width: 200,
    },
    initial: { rotate: -50, opacity: 0, y: 400 },
    animate: { rotate: 0, opacity: 1, y: 0 },
    transition: {
      delay: 0.48,
      type: 'spring',
      bounce: 0,
    },
    image: {
      imageUrl: '/images/hero/marker.png',
      width: 200,
      height: 300,
    },
  },
  {
    sxRoot: {
      right: -60,
      bottom: -84,
    },
    sxImgContainer: {
      width: 460,
    },
    initial: { rotate: 0, opacity: 0, scale: 1.1, x: 200 },
    animate: { rotate: -32, opacity: 1, scale: 1, x: 0 },
    transition: {
      delay: 0.35,
      type: 'spring',
      bounce: 0,
    },
    image: {
      imageUrl: '/images/hero/mac.png',
      width: 500,
      height: 480,
    },
  },
  {
    sxRoot: {
      bottom: -90,
      right: 320,
    },
    sxImgContainer: {
      width: 206,
    },
    initial: { rotate: 20, opacity: 0, scale: 1.1, x: 200 },
    animate: { rotate: -6, opacity: 1, scale: 1, x: 0 },
    transition: {
      delay: 0.2,
      type: 'spring',
      bounce: 0,
    },
    image: {
      imageUrl: '/images/hero/smartphone.png',
      width: 500,
      height: 500,
    },
  },
]
