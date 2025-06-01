import React, { FC, memo } from 'react'
import { Theme } from '@mui/material/styles'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'

interface Props extends IconButtonProps {
  enableOuterRipple?: boolean
  outerRippleColor?: string
}

const getSize = (size?: 'small' | 'medium' | 'large'): number => {
  const defaultSize = 40
  switch (size) {
    case 'small':
      return 36
    case 'large':
      return 44
    default:
      return defaultSize
  }
}

const StyledRoundedButton: FC<Props> = (props: Props) => {
  const {
    enableOuterRipple = true,
    outerRippleColor,
    children,
    size,
    ...rest
  } = props

  return (
    <IconButton
      sx={{
        ...(enableOuterRipple && {
          ':focus:before': {
            animation: '.5s click_animation cubic-bezier(.4,0,.2,1) 1',
          },
          '&:before': {
            content: '""',
            display: 'block !important',
            width: getSize(size),
            height: getSize(size),
            position: 'absolute',
            top: 0,
            backgroundColor: (theme: Theme) =>
              !outerRippleColor ? theme.palette.primary.main : outerRippleColor,
            transform: 'scale(0)',
            zIndex: 1,
            borderRadius: '50%',
            transition: (theme: Theme) =>
              theme.transitions.create(
                ['background-color', 'transform', 'scale'],
                { duration: 250 }
              ),
          },
          '& span': {
            lineHeight: 0,
          },
          '& .MuiSvgIcon-root': {
            fontSize: '1.375rem',
          },
        }),
      }}
      {...rest}
    >
      {children}
    </IconButton>
  )
}

export default memo(StyledRoundedButton)
