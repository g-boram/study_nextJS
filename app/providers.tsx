'use client'

import Footer from '@/components/Footer'
import MovePageBar from '@/components/MovePageBar'
import Navbar from '@/components/Navbar'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'

interface Props {
  children?: React.ReactNode
}

export const NextLayout = ({ children }: Props) => {
  return (
    <>
      <SessionProvider>
        <Navbar />
        <div className="mt-10 mb-10 p-10 min-h-[100vh]">
          {/* TODO: path 경로 로그인 같은거 일때 안보이도록 분기처리 필요 */}
          <MovePageBar />
          {children}
          <Toaster />
        </div>
        <Footer />
      </SessionProvider>
    </>
  )
}
