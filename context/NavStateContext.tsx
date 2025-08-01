'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

interface NavStateProps {
  state: string
  onClickNavbar: (val: string) => void
}

const NavStateContext = createContext<NavStateProps | undefined>(undefined)

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<string>('')

  // mount 시 localStorage에서 기존 값 불러오기
  useEffect(() => {
    const savedState = localStorage.getItem('nav-state')
    if (savedState) setState(savedState)
  }, [])

  // state가 바뀔 때 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('nav-state', state)
  }, [state])

  const onClickNavbar = (val: string) => {
    setState(val)
  }

  return (
    <NavStateContext.Provider value={{ state, onClickNavbar }}>
      {children}
    </NavStateContext.Provider>
  )
}

// 커스텀 훅
export const useNavbar = () => {
  const context = useContext(NavStateContext)
  if (!context) throw new Error('useNavbar must be used within a NavProvider')
  return context
}
