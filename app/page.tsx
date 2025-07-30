'use client'

import { useSession } from 'next-auth/react'

export default function Home() {
  const user = useSession()
  console.log('useSession() ----- ', user)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Home Page</div>
    </main>
  )
}
