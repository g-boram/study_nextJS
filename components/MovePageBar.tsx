'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import {
  SlHome,
  SlDiamond,
  SlMap,
  SlMenu,
  SlDoc,
  SlCreditCard,
} from 'react-icons/sl'
import { useNavbar } from '@/context/NavStateContext'

export default function MovePageBar() {
  const { push } = useRouter()
  const { state } = useNavbar()

  const commonPageList = [
    { url: '/', name: 'HOME', bg: 'bg-red-100', icon: <SlHome /> },
    {
      url: '/common/css',
      name: 'CSS',
      bg: 'bg-red-200',
      icon: <SlDiamond />,
    },
  ]

  const nextBnBPageList = [
    {
      url: '/nextBnB/filter',
      name: 'Filter',
      bg: 'bg-blue-100',
      icon: <SlMenu />,
    },
    {
      url: '/nextBnB/faqs',
      name: 'FAQ',
      bg: 'bg-blue-200',
      icon: <SlDoc />,
    },
    {
      url: '/nextBnB/roomsDetail',
      name: 'Rooms Detail',
      bg: 'bg-blue-300',
      icon: <SlMap />,
    },
    {
      url: '/payments?customerKey=123&roomTitle=Ocean%20View%20Suite&checkIn=2025-08-10&checkOut=2025-08-13&guestCount=2&totalAmount=450000&totalDays=3&bookingId=9876',
      name: 'Toss',
      bg: 'bg-blue-400',
      icon: <SlCreditCard />,
    },
  ]
  return (
    <div className="min-h[30] flex flex-col justify-center items-center gap-2 my-2">
      <div className="flex items-center gap-5">
        <div className="h-20 flex gap-2 py-4">
          {/* commonPageList */}
          {state === 'common' &&
            commonPageList.map((page, i) => (
              <button
                key={i}
                className={`${page.bg}  text-black px-4 py-2 rounded-md text-sm flex gap-2 items-center`}
                onClick={() => push(page.url)}
              >
                {page.name} {page.icon ? page.icon : ''}
              </button>
            ))}
          {/* nextBnBPageList */}
          {state === 'bnb' &&
            nextBnBPageList.map((page, i) => (
              <button
                key={i}
                className={`${page.bg}  text-black px-4 py-2 rounded-md text-sm flex gap-2 items-center`}
                onClick={() => push(page.url)}
              >
                {page.name} {page.icon ? page.icon : ''}
              </button>
            ))}
        </div>
      </div>
    </div>
  )
}
