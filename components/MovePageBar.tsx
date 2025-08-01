'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

import { useNavbar } from '@/context/NavStateContext'
import { commonPageList, nextBnBPageList } from '@/constants/common'

export default function MovePageBar() {
  const { push } = useRouter()
  const { state } = useNavbar()

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
