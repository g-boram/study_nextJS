import React from 'react'

const RainbowBorder = () => {
  return (
    <div>
      <div className="inline-block rounded-xl p-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 animate-border-glow shadow-[0_0_12px_rgba(255,0,255,0.5)]">
        <button className="bg-white dark:bg-gray-900 text-black dark:text-white px-6 py-2 rounded-xl font-semibold">
          무지개 버튼 ✨
        </button>
      </div>
      <div className="rounded-xl p-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 animate-border-glow shadow-[0_0_12px_rgba(255,0,255,0.5)] w-fit">
        <input
          type="text"
          placeholder="검색어 입력"
          className="bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-2 rounded-xl outline-none w-64"
        />
      </div>
      <div
        className="relative inline-block rounded-xl p-[2px] bg-[linear-gradient(270deg,_#ff00ff,_#00ffff,_#00ff00,_#ff00ff)] 
  bg-[length:400%_400%] animate-gradient-border shadow-[0_0_12px_rgba(255,0,255,0.4)]"
      >
        <button className="bg-white dark:bg-gray-900 text-black dark:text-white px-6 py-2 rounded-xl font-semibold w-full h-full">
          부드럽게 흐르는 버튼 🌈
        </button>
      </div>
      <div
        className="relative inline-block rounded-xl p-[2px] bg-[linear-gradient(270deg,_#f0f,_#0ff,_#0f0,_#f0f)]
  bg-[length:400%_400%] animate-gradient-border shadow-[0_0_10px_rgba(255,0,255,0.3)] w-fit"
      >
        <input
          type="text"
          placeholder="입력해보세요"
          className="bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-2 rounded-xl outline-none w-64"
        />
      </div>
    </div>
  )
}

export default RainbowBorder
