'use client'

import React, { FC, ReactNode } from 'react'
import { styled } from '@mui/system'
import Box from '@mui/material/Box'
import { Theme } from '@mui/material'
import { ButtonProps } from '@mui/material/Button'

interface BaseButtonProps
  extends Pick<ButtonProps, 'onClick' | 'type' | 'startIcon' | 'endIcon'> {
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'secondary' | 'dark' | 'light'
  size?: 'small' | 'medium' | 'large'
  rounded?: boolean
}
interface StyledButtonRootProps extends BaseButtonProps {
  theme?: Theme
}

const StyledButtonRoot = styled('button', {
  shouldForwardProp: (prop) =>
    prop !== 'variant' && prop !== 'color' && prop !== 'size',
})<StyledButtonRootProps>(({ theme, color, variant, size, rounded }) => ({
  cursor: 'pointer',
  minWidth: 40,
  fontSize: 13,
  fontWeight: 600,
  lineHeight: 1.5,
  letterSpacing: 1,

  // boxShadow: 'rgb(3 3 3 / 12%) 0px 32px 54px',

  display: 'inline-flex',
  alignItems: 'center',
  userSelect: 'none',
  // transform: 'perspective(1px) translateZ(0px)',
  transform: 'unset',
  position: 'relative',
  overflow: 'hidden',
  border: 'none',
  whiteSpace: 'nowrap',
  WebkitTapHighlightColor: 'transparent',
  verticalAlign: 'middle',
  outline: 'none !important',
  transition: theme.transitions.create(['transform']),

  // hover
  '&:hover': {
    transform: 'translateY(-3px)',
  },

  '& svg': {
    fontSize: 20,
  },

  // rounded
  ...(rounded && {
    borderRadius: '2rem',
  }),
  ...(!rounded && {
    borderRadius: theme.shape.borderRadius,
  }),

  // sizes and variants
  ...(size === 'small' &&
    variant === 'outlined' && {
      padding: '4px 10px',
    }),
  ...(size === 'medium' &&
    variant === 'outlined' && {
      padding: '6px 14px',
    }),
  ...(size === 'large' &&
    variant === 'outlined' && {
      padding: '10px 18px',
    }),

  ...(size === 'small' &&
    variant !== 'outlined' && {
      padding: '6px 12px',
    }),
  ...(size === 'medium' &&
    variant !== 'outlined' && {
      padding: '8px 16px',
    }),
  ...(size === 'large' &&
    variant !== 'outlined' && {
      padding: '12px 20px',
    }),

  // variants
  ...(variant !== 'contained' && {
    backgroundColor: 'transparent',
    boxShadow: 'none !important',
  }),

  // colors & varians
  ...(color === 'primary' &&
    variant === 'contained' && {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    }),
  ...(color === 'secondary' &&
    variant === 'contained' && {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.contrastText,
    }),
  ...(color === 'dark' &&
    variant === 'contained' && {
      backgroundColor: '#313d56',
      color: theme.palette.primary.contrastText,
    }),
  ...(color === 'light' &&
    variant === 'contained' && {
      backgroundColor: theme.palette.primary.contrastText,
      color: '#444',
    }),

  ...(color === 'primary' &&
    variant === 'outlined' && {
      border: `2px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
    }),
  ...(color === 'secondary' &&
    variant === 'outlined' && {
      border: `2px solid ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.main,
    }),
  ...(color === 'dark' &&
    variant === 'outlined' && {
      border: `2px solid #313d56`,
      color: '#313d56',
    }),
  ...(color === 'light' &&
    variant === 'outlined' && {
      border: `2px solid #313d56`,
      color: `#313d56`,
    }),

  ...(color === 'primary' &&
    variant === 'text' && {
      color: theme.palette.primary.main,
    }),
  ...(color === 'secondary' &&
    variant === 'text' && {
      color: theme.palette.secondary.main,
    }),
  ...(color === 'dark' &&
    variant === 'text' && {
      color: '#313d56',
    }),
  ...(color === 'light' &&
    variant === 'text' && {
      color: theme.palette.primary.contrastText,
    }),
}))

interface Props extends BaseButtonProps {
  children: ReactNode
  // endIcon?: ReactNode
  // startIcon?: ReactNode
}

const StyledButton: FC<Props> = (props: Props) => {
  const { children, onClick, startIcon, endIcon, rounded, ...rest } = props
  return (
    <StyledButtonRoot onClick={onClick} rounded={rounded} {...rest}>
      {startIcon && (
        <Box component='span' sx={{ display: 'inherit', mr: 1, ml: -0.5 }}>
          {startIcon}
        </Box>
      )}
      <Box component='span'>{children}</Box>
      {endIcon && (
        <Box component='span' sx={{ display: 'inherit', ml: 1, mr: -0.5 }}>
          {endIcon}
        </Box>
      )}
    </StyledButtonRoot>
  )
}

export default StyledButton
