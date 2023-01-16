import { TypographyOptions } from '@mui/material/styles/createTypography'

const fontFamily = [
  // eslint-disable-next-line max-len
  '"Plus Jakarta Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
].join(',')

const typography: TypographyOptions = {
  fontFamily,
  fontWeightLight: 300,
  fontWeightRegular: 500,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    fontSize: 34,
  },
  h2: {
    fontWeight: 700,
    fontSize: 30,
  },
  h3: {
    fontSize: 28,
    fontWeight: 700,
  },
  h4: {
    fontSize: 24,
    fontWeight: 700,
  },
  h5: {
    fontSize: 20,
    fontWeight: 700,
  },
  h6: {
    fontSize: 16,
    fontWeight: 700,
  },
  body1: {
    fontSize: '0.875rem',
  },
  body2: {
    fontSize: '0.875rem',
  },
  subtitle1: {
    fontSize: '0.8rem',
  },
  subtitle2: {
    fontSize: '0.75rem',
  },
}

export { typography }
