import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
  spacing: (factor) => `${0.25 * factor}rem`,
  palette: {
    primary: {
      main: '#067153',
    },
    secondary: {
      main: '#DE0D65',
    },
  },
  typography: {
    fontFamily: 'Roboto',
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