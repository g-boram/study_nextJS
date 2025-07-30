'use client'
import { RoomType } from '../../../interface/nextBnb'

import dayjs from 'dayjs'
import 'dayjs/locale/ko'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function BookingSection({ data }: { data: RoomType }) {
  const router = useRouter()
  const [filterValue, setFilterValue] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guest: 0,
    category: '',
  })

  const [totalValue, setTotalValue] = useState({
    guestCount: 0,
    dayCount: 0,
  })

  const totalAmount = data?.price * totalValue.dayCount

  const handleSubmit = (filter: any) => {
    const checkInDate = filter.checkIn ? dayjs(filter.checkIn) : dayjs()
    const checkOutDate = filter.checkOut ? dayjs(filter.checkOut) : dayjs()
    const guestCount = filter.guest || 1
    const dayCount = checkOutDate?.diff(checkInDate, 'days')

    setTotalValue({ guestCount, dayCount })
  }

  const onChangeCheckIn = (e: any) => {
    setFilterValue({
      ...filterValue,
      checkIn: e?.target?.value,
    })
  }

  const onChangeCheckOut = (e: any) => {
    setFilterValue({
      ...filterValue,
      checkOut: e?.target?.value,
    })
  }

  const onChangeGuest = (e: any) => {
    setFilterValue({
      ...filterValue,
      guest: e?.target?.value,
    })
  }

  return (
    <div className="w-full">
      <div className="mt-8 shadow-lg rounded-lg border border-gray-300 px-6 py-8 md:sticky md:top-20">
        <div className="text-gray-600 flex justify-between items-center">
          <div>
            <span className="font-semibold text-lg md:text-xl text-black">
              {data?.price} 원
            </span>{' '}
            / 박
          </div>
          <div className="text-xs">후기 ?? 개</div>
        </div>
        <form className="mt-2">
          <div className="mt-2">
            <label className="text-xs font-semibold" htmlFor="checkin-input">
              체크인
            </label>
            <input
              type="date"
              id="checkin-input"
              value={filterValue.checkIn || dayjs().format('YYYY-MM-DD')}
              min={dayjs().format('YYYY-MM-DD')}
              className="w-full px-4 py-3 border border-gray-400 rounded-md text-xs mt-1"
              onChange={onChangeCheckIn}
            />
          </div>
          <div className="mt-2">
            <label className="text-xs font-semibold" htmlFor="checkout-input">
              체크아웃
            </label>
            <input
              id="checkout-input"
              type="date"
              value={filterValue.checkOut || dayjs().format('YYYY-MM-DD')}
              min={filterValue.checkIn || dayjs().format('YYYY-MM-DD')}
              className="w-full px-4 py-3 border border-gray-400 rounded-md text-xs mt-1"
              onChange={onChangeCheckOut}
            />
          </div>
          <div className="mt-2">
            <label className="text-xs font-semibold" htmlFor="guest-input">
              인원
            </label>
            <select
              id="guest-input"
              onChange={onChangeGuest}
              value={filterValue.guest}
              className="w-full px-4 py-3 border border-gray-400 rounded-md text-xs mt-1"
            >
              {[...Array(20)]?.map((_, i) => (
                <option value={i + 1} key={i}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-6">
            <button
              type="button"
              // disabled={!checkFormValid}
              onClick={() => handleSubmit(filterValue)}
              className="bg-rose-500 hover:bg-rose-600 text-white rounded-md py-2.5 w-full disabled:bg-gray-300"
            >
              예약하기
            </button>
            <p className="text-center text-gray-600 mt-4 text-xs md:text-sm">
              예약 확정 전에는 요금이 청구되지 않습니다.
            </p>
          </div>
        </form>
        <div className="mt-4 flex flex-col gap-2 border-b border-b-gray-300 pb-4 text-xs md:text-sm">
          <div className="flex justify-between">
            <div className="text-gray-600 underline underline-offset-4">
              {data?.price?.toLocaleString()} x {totalValue.dayCount}박
            </div>
            <div className="text-gray-500">₩{totalAmount}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-gray-600 underline underline-offset-4">
              nextBnb 수수료
            </div>
            <div className="text-gray-500">₩0</div>
          </div>
          <div className="flex justify-between mt-6">
            <div>{totalValue.guestCount}</div>
            <div>{totalValue.dayCount} 박</div>
          </div>
          <div className="flex justify-between mt-6">
            <div>총 합계</div>
            <div>₩{totalAmount}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
