import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  spacing: (factor) => (factor === 'auto' ? 'auto' : `${0.25 * factor}rem`),
  palette: {
    primary: {
      main: '#067153',
    },
    secondary: {
      main: '#DE0D65',
    },
  },
  typography: {
    fontSize: 14,
    htmlFontSize: 16,
    fontFamily: 'Segoe UI',
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
})
