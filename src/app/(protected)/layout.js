'use client'

import Sidebar from '@/components/Sidebar'

export default function ProtectedLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <div
        style={{
          height: '100vh',
          overflowY: 'auto',
          backgroundImage: `url(images/bg-image.png)`,
          backgroundRepeat: 'no - repeat',
          backgroundSize: 'cover',
        }}
      >
        {children}
      </div>
    </div>
  )
}
