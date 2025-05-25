import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@mui/material/Typography'
import { FC, JSX } from 'react'

interface TypographyProps extends MuiTypographyProps {
  type?: 'primary' | 'secondary'
}

const Typography: FC<TypographyProps> = ({
  type = 'secondary',
  ...rest
}): JSX.Element => {
  return (
    <MuiTypography
      {...rest}
      fontFamily={type === 'primary' ? 'Be Vietnam Pro' : undefined}
    ></MuiTypography>
  )
}

export default Typography
