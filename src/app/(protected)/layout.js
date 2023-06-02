'use client'

import Sidebar from '@/components/sidebar'

export default function ProtectedLayout({ children }) {
  return (
    <>
      <Sidebar />
      <div>{children}</div>
    </>
  )
}
