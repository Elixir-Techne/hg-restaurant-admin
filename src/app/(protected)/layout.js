'use client'

import { Box } from '@mui/material'

import Sidebar from '@/components/Sidebar'

export default function ProtectedLayout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <div
        style={{
          width: '100%',
          height: '100vh',
          overflowY: 'auto',
          backgroundImage: `url(images/bg-image.png)`,
          backgroundRepeat: 'no - repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'right',
        }}
      >
        {children}
      </div>
    </Box>
  )
}
