'use client'

import { Box } from '@mui/material'

import Sidebar from '@/components/Sidebar'

export default function ProtectedLayout({ children }) {
  return (
    <Box display="flex">
      <Sidebar />
      <div
        style={{
          height: '100vh',
          overflowY: 'auto',
          backgroundImage: `url(images/bg-image.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
        }}
      >
        {children}
      </div>
    </Box>
  )
}
