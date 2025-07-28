'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function MovePageBar() {
  const { push } = useRouter()

  const pageList = [
    { url: '/', name: 'HOME', bg: 'bg-red-400', border: 'border-none' },
    { url: '/css', name: 'CSS', bg: 'bg-yellow-500', border: 'border-none' },
    {
      url: '/filter',
      name: 'Filter',
      bg: 'bg-blue-500',
      border: 'border-none',
    },
  ]
  return (
    <div className="h-20 flex justify-center items-center gap-2 my-2">
      {pageList.map((page, i) => (
        <button
          key={i}
          className={`${page.bg} ${page.border} text-black px-4 py-2 rounded-md border-2`}
          onClick={() => push(page.url)}
        >
          {page.name}
        </button>
      ))}
    </div>
  )
}
