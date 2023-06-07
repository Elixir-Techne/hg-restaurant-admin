'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

import Sidebar from '@/components/Sidebar'

export default function Home() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/') {
      router.replace('/dashboard')
    }
  }, [pathname, router])

  return <Sidebar />
}
