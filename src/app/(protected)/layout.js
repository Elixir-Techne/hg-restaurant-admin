'use client'

import { Box, useMediaQuery } from '@mui/material'
import { usePathname } from 'next/navigation'

import Sidebar from '@/components/Sidebar'

export default function ProtectedLayout({ children }) {
  const pathname = usePathname()
  const isMobile = useMediaQuery('(max-width:768px)')
  return (
    <Box display="flex" flexDirection={isMobile ? 'column' : 'row'}>
      {pathname.includes('sign-up') || pathname.includes('sign-in') ? null : (
        <Sidebar />
      )}
      <div
        style={{
          width: '100%',
          height: '100vh',
          overflowY: 'auto',
          backgroundImage: `url(images/lightBgImage.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'right',
        }}
      >
        {isMobile && <div style={{ height: '50px' }}></div>}
        {children}
      </div>
    </Box>
  )
}
