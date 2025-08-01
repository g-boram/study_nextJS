'use client'

import { useNavbar } from '@/context/NavStateContext'
import { useTheme } from '@/context/ThemeContext'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { GiCrownedHeart } from 'react-icons/gi'

// 로그인 O 사용자 메뉴
const LOGIN_O_USER_MENU = [
  { id: 1, title: 'Login_1', url: '#' },
  { id: 2, title: '마이 페이지', url: '/users/mypage' },
  { id: 3, title: '로그아웃 하기', url: '#', signOut: true },
]

// 로그인 X 사용자 메뉴
const LOGIN_X_USER_MENU = [
  { id: 1, title: '로그인 하기', url: '/users/signin' },
  { id: 2, title: '회원가입 하기', url: '#' },
  { id: 3, title: 'LogOut_3', url: '#' },
]

const CENTER_MENU = [
  { id: 1, title: 'HOME', url: '/', hover: 'text-rose-200', state: 'home' },
  {
    id: 2,
    title: 'COMMON',
    url: '/common',
    hover: 'text-yellow-200',
    state: 'common',
  },
  {
    id: 3,
    title: 'NEXTBnB',
    url: '/nextBnB',
    hover: 'text-blue-200',
    state: 'bnb',
  },
]

// 오른쪽 토글 버튼 네비바
// 로그인 여부에 따른 메뉴 리스트 및 버튼 글씨로 로그인 보여줌
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  const { status } = useSession()
  const { theme, toggleTheme } = useTheme() // 테마 관리
  const { state, onClickNavbar } = useNavbar() // 네비바 상태값 관리
  const router = useRouter()

  return (
    <nav
      className="
        h-20 
        w-full 
        z-[9999]
        p-4 
        flex
        justify-between
        align-center
        top-0
        bg-gray-900
        fixed
        shadow-sm 
        sm:px-10
      "
    >
      {/* ---------- Logo ---------- */}
      <div
        className="
          grow
          basis-0
          hidden
          my-auto
          font-semibold
          text-lg
          text-gray-100
          cursor-pointer
          sm:text-xl
          sm:flex
          sm:gap-2
        "
      >
        <GiCrownedHeart className="text-4xl my-auto hover:text-rose-500 transition" />
        <div className="my-auto">Logo</div>
      </div>
      {/* ---------- Center ---------- */}
      <div
        className="
          w-full
          sm:w-[540px]
          py-3
          px-5
          flex
          justify-between
          align-middle
          border
          border-gray-200
          rounded-full
          shadow-lg
          shadow-gray-500
          cursor-pointer
        "
      >
        {CENTER_MENU.map((v, i) => (
          <div
            key={i}
            className={`text-gray-100 hover:${v.hover}`}
            onClick={() => {
              onClickNavbar(v.state)
              router.push(v.url)
            }}
          >
            {v.title}
          </div>
        ))}
      </div>
      {/* ---------- Right ---------- */}
      <div
        className="
          hidden 
          grow
          basis-0
          sm:flex
          justify-end
          gap-4
          align-middle
          my-auto
        "
      >
        <button
          type="button"
          onClick={() => setShowMenu((val) => !val)}
          className="
            relative
            flex
            
            align-middle
            gap-3
            rounded-full
            my-auto
            px-4
            py-3
            bg-gray-50
          "
        >
          {status === 'unauthenticated' ? 'Login-X' : 'Login-O'}
        </button>
        {showMenu && (
          <div
            className="
              absolute
              top-24
              right-8
              w-32
              border 
              border-gray-200 
              bg-white
              shadow-lg 
              p-2 
              flex 
              flex-col
              gap-2 
              rounded-md
            "
          >
            {status === 'unauthenticated'
              ? LOGIN_X_USER_MENU.map((menu) => (
                  <button
                    type="button"
                    key={menu.id}
                    className="h-10 hover:bg-gray-100 text-sm text-gray-700 rounded-full"
                    onClick={() => {
                      router.push(menu.url)
                      setShowMenu(false)
                    }}
                  >
                    {menu.title}
                  </button>
                ))
              : LOGIN_O_USER_MENU.map((menu) => (
                  <button
                    type="button"
                    key={menu.id}
                    className="h-10 hover:bg-gray-100 text-sm text-gray-700 rounded-full"
                    onClick={() => {
                      menu.signOut ? signOut() : null
                      router.push(menu.url)
                      setShowMenu(false)
                    }}
                  >
                    {menu.title}
                  </button>
                ))}
          </div>
        )}
      </div>
    </nav>
  )
}
