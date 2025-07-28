'use client'
import React, { useState } from 'react'

import { RxDividerVertical } from 'react-icons/rx'
import { AiOutlineSearch } from 'react-icons/ai'
import { RxCross2 } from 'react-icons/rx'

import cn from 'classnames'
import NextBnbFilterLayout from './nextBnbFilterLayout'

type DetailFilterType = 'location' | 'checkIn' | 'checkOut' | 'guest'
interface FilterProps {
  location: string
  checkIn: string
  checkOut: string
  guest: number
}

export default function NextBnbFilter() {
  const [showFilter, setShowFilter] = useState<boolean>(false)
  const [detailFilter, setDetailFilter] = useState<null | DetailFilterType>(
    null,
  )
  const [filterValue, setFilterValue] = useState<FilterProps>({
    location: '',
    checkIn: '',
    checkOut: '',
    guest: 0,
  })

  return (
    <div className="flex flex-col items-center">
      <div>NextBnbFilter</div>
      {showFilter === false ? (
        <div className="w-full sm:w-[500px] border py-1.5 border-gray-200 rounded-full shadow hover:shadow-lg cursor-pointer flex justify-between pl-6 pr-2">
          <div
            role="presentation"
            className="flex justify-center gap-1 cursor-pointer"
            onClick={() => setShowFilter(true)}
          >
            <div className="my-auto font-semibold text-sm">어디든지</div>
            <RxDividerVertical className="text-gray-200 my-auto text-2xl" />
            <div className="my-auto font-semibold text-sm">언제든</div>
            <RxDividerVertical className="text-gray-200 my-auto text-2xl" />
            <div className="my-auto font-semibold text-sm">게스트</div>
          </div>
          <button
            id="filter-open-btn"
            aria-label="filter-open-btn"
            type="button"
            onClick={() => setShowFilter(true)}
            data-cy="filter-open-btn"
            className="bg-rose-500 text-white rounded-full w-8 h-8 my-auto"
          >
            <AiOutlineSearch className="text-lg m-auto font-semibold" />
          </button>
        </div>
      ) : (
        <div className="sm:w-[1000px] cursor-pointer w-full relative">
          <div className="flex justify-center gap-7 h-14 text-center items-center">
            <button
              type="button"
              className="font-semibold underline underline-offset-8"
            >
              숙소
            </button>
            <button
              type="button"
              className="text-gray-700"
              onClick={() => window.alert('서비스 준비중입니다.')}
            >
              체험
            </button>
            <button
              type="button"
              className="text-gray-700"
              onClick={() => window.alert('서비스 준비중입니다.')}
            >
              온라인 체험
            </button>
            <button
              type="button"
              className="underline underline-offset-8 text-gray-500 hover:text-black"
              onClick={() => setShowFilter(false)}
            >
              <RxCross2 />
            </button>
          </div>
          <div className="w-[90%] sm:max-w-3xl absolute flex flex-col sm:flex-row border border-gray-200 rounded-lg py-4 sm:py-2 sm:rounded-full shadow-sm bg-white hover:shadow-lg cursor-pointer justify-between top-20 inset-x-0 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-4 w-full relative sm:pl-2">
              <button
                type="button"
                data-cy="filter-location-btn"
                onClick={() => setDetailFilter('location')}
                className={cn(
                  'font-semibold text-xs rounded-full hover:bg-gray-100 py-3 px-6 text-left',
                  {
                    'shadow bg-white': detailFilter === 'location',
                  },
                )}
              >
                여행지
                <div className="text-gray-500 text-xs">
                  {filterValue?.location || '여행지 검색'}
                </div>
              </button>
              <button
                type="button"
                onClick={() => setDetailFilter('checkIn')}
                className={cn(
                  'font-semibold text-xs rounded-full hover:bg-gray-100 py-3 px-6 text-left',
                  {
                    'shadow bg-white': detailFilter === 'checkIn',
                  },
                )}
              >
                체크인
                <div className="text-gray-500 text-xs">
                  {filterValue?.checkIn || '날짜 추가'}
                </div>
              </button>
              <button
                type="button"
                onClick={() => setDetailFilter('checkOut')}
                className={cn(
                  'font-semibold text-xs rounded-full hover:bg-gray-100 py-3 px-6 text-left',
                  {
                    'shadow bg-white': detailFilter === 'checkOut',
                  },
                )}
              >
                체크아웃
                <div className="text-gray-500 text-xs">
                  {filterValue?.checkOut || '날짜 추가'}
                </div>
              </button>
              <button
                type="button"
                onClick={() => setDetailFilter('guest')}
                className={cn(
                  'font-semibold text-xs rounded-full hover:bg-gray-100 py-3 px-6 text-left',
                  {
                    'shadow bg-white': detailFilter === 'guest',
                  },
                )}
              >
                여행자
                <div className="text-gray-500 text-xs">
                  {`${filterValue?.guest} 명` || '게스트 추가'}
                </div>
              </button>
              {detailFilter === 'location' && (
                <LocationFilter
                  filterValue={filterValue}
                  detailFilter={detailFilter}
                  setFilterValue={setFilterValue}
                  setDetailFilter={setDetailFilter}
                />
              )}
              {/* <SearchFilter /> */}
            </div>
            <button
              type="button"
              data-cy="filter-submit-btn"
              className="bg-rose-600 text-white rounded-full h-10 mx-4 sm:w-24 mt-4 sm:mt-2 my-auto flex justify-center gap-1 px-3 py-2 hover:shadow hover:bg-rose-500"
              onClick={() => {
                setShowFilter(false)
                setDetailFilter(null)
              }}
            >
              <AiOutlineSearch className="font-semibold text-xl my-auto" />
              <div className="my-auto">검색</div>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

interface FilterComponentProps {
  filterValue: FilterProps
  detailFilter: DetailFilterType
  setFilterValue: React.Dispatch<React.SetStateAction<FilterProps>>
  setDetailFilter: React.Dispatch<React.SetStateAction<DetailFilterType | null>>
}

const LocationFilter = ({
  filterValue,
  setFilterValue,
  setDetailFilter,
  detailFilter,
}: FilterComponentProps) => {
  return (
    <NextBnbFilterLayout
      dataTitle="filter-location-wrapper"
      title="지역으로 검색하기"
      isShow={detailFilter === 'location'}
    >
      <div className="flex flex-wrap gap-4 mt-4">
        {['서울', '경기', '부산', '대구', '인천', '광주', '대전', '울산']?.map(
          (value) => (
            <button
              key={value}
              type="button"
              data-cy={`filter-location-${value}`}
              className={cn(
                'border rounded-lg px-5 py-2.5 hover:bg-gray-200 focus:bg-rose-500',
                {
                  'bg-rose-600 text-white': filterValue.location === value,
                },
              )}
              onClick={() => {
                setFilterValue({
                  ...filterValue,
                  location: value,
                })
                setDetailFilter('checkIn')
              }}
            >
              {value}
            </button>
          ),
        )}
        <button
          className={cn(
            'border rounded-lg px-5 py-2.5 hover:bg-gray-200 focus:bg-rose-500',
            {
              'bg-rose-600 text-white': filterValue.location === '',
            },
          )}
          onClick={() => {
            setFilterValue({
              ...filterValue,
              location: '',
            })
            setDetailFilter('checkIn')
          }}
        >
          전체
        </button>
      </div>
    </NextBnbFilterLayout>
  )
}
