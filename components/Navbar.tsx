'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { GiCrownedHeart } from 'react-icons/gi'
import { GiRose } from 'react-icons/gi'

const menus = [
  { id: 1, title: 'Menu1', url: '/menu1' },
  { id: 2, title: 'Menu2', url: '/menu2' },
  { id: 3, title: 'Menu3', url: '/menu3' },
  { id: 4, title: 'Menu4', url: '/menu4' },
  { id: 5, title: 'Menu5', url: '/menu5' },
]

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
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
        <div className="text-gray-100 hover:text-rose-200">Center-1</div>
        <div className="text-gray-100 hover:text-yellow-200">Center-2</div>
        <div className="text-gray-100 hover:text-blue-200">Center-3</div>
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
          Right
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
            {menus?.map((menu) => (
              <button
                type="button"
                key={menu.id}
                className="h-10 hover:bg-gray-100 text-sm text-gray-700 rounded-full"
                onClick={() => router.push(menu.url)}
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
