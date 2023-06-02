'use client'

import TabFilter from '@/components/TabFilter'

export default function ProtectedLayout({ children }) {
  return (
    <div>
      <TabFilter />
      <div>{children}</div>
    </div>
  )
}
