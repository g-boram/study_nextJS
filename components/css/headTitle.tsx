import React from 'react'

type props = {
  title?: string
  desc?: string
}

const HeadTitle = ({ title, desc }: props) => {
  return (
    <div className="flex justify-center items-start flex-col mr-10">
      <div className="text-black text-xl">{title}</div>
      <div className="text-gray-500 text-xs">{desc}</div>
    </div>
  )
}

export default HeadTitle
