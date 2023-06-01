import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import { theme } from '@/theme'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body>{children}</body>
      </ThemeProvider>
    </html>
  )
}
