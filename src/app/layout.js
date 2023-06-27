'use client'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import React from 'react'

import { OrdersDetailProvider } from '@/context/orderDetailContext'
import { theme } from '@/theme'

import '../styles/form.css'
import './global.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body>
          <OrdersDetailProvider>{children}</OrdersDetailProvider>
        </body>
      </ThemeProvider>
    </html>
  )
}
