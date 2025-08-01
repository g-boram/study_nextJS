'use client'

import Footer from '@/components/Footer'
import MovePageBar from '@/components/MovePageBar'
import Navbar from '@/components/Navbar'
import { NavProvider } from '@/context/NavStateContext'
import { ThemeProvider } from '@/context/ThemeContext'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'

interface Props {
  children?: React.ReactNode
}

export const NextLayout = ({ children }: Props) => {
  return (
    <>
      <SessionProvider>
        <ThemeProvider>
          <NavProvider>
            <Navbar />
            <div className="mt-10 mb-10 p-10 min-h-[100vh]">
              <MovePageBar />
              {children}
              <Toaster />
            </div>
            <Footer />
          </NavProvider>
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}
