'use client';

import { Box, useMediaQuery } from '@mui/material'

import { Box } from '@mui/material'

import Sidebar from '@/components/Sidebar'

export default function ProtectedLayout({ children }) {
  const isMobile = useMediaQuery('(max-width:768px)')
  return (
    <Box display="flex" flexDirection={isMobile ? 'column' : 'row'}>
      <Sidebar />
      <div
        style={{
          width: '100%',
          height: '100vh',
          overflowY: 'auto',
          backgroundImage: `url(images/bg-image.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'right'
        }}
      >
        {isMobile && <div style={{ height: '50px' }}></div>}
        {children}
      </div>
    </Box>
  )
}