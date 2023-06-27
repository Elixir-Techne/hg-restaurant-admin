'use client'

import { Box, useMediaQuery } from '@mui/material'
import { usePathname } from 'next/navigation'
import React from 'react'

import Sidebar from '@/components/Sidebar'

import { UseStyle } from './styles'

export default function ProtectedLayout({ children }) {
  const pathname = usePathname()
  const isMobile = useMediaQuery('(max-width:768px)')
  const classes = UseStyle()
  return (
    <Box
      className={classes.mainContainer}
      flexDirection={isMobile ? 'column' : 'row'}
    >
      {pathname.includes('sign-up') || pathname.includes('sign-in') ? null : (
        <Sidebar />
      )}
      <Box className={classes.subContainer}>
        {isMobile && <div style={{ height: '50px' }}></div>}
        {children}
      </Box>
    </Box>
  )
}
