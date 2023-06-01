import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#067153',
    },
    secondary: {
      main: '#DE0D65',
    },
  },
  typography: {
    fontFamily: 'Segoe UI',
    fontSize: 14,
    htmlFontSize: 16,
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
