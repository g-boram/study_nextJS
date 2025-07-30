// import prisma from '@/db'
import { NextResponse } from 'next/server'

// import { getServerSession } from 'next-auth'
// import { authOptions } from '../auth/[...nextauth]/route'
// import axios from 'axios'
import { RoomType } from '@/interface/nextBnb'

export async function GET(req: Request) {
  const mockRooms: RoomType = {
    id: 1,
    images: ['https://picsum.photos/800/600'],
    title: '도심 속 감성 가득한 아파트',
    address: '서울특별시 마포구 연남동',
    desc: '감성적인 인테리어의 아늑한 도심 속 숙소입니다.',
    bedroomDesc: '침실 1개 · 퀸 사이즈 침대 1개 · 최대 2인 숙박 가능',
    price: 85000,
    category: '아파트',
    lat: '37.5665',
    lng: '126.9780',
    freeCancel: false,
    selfCheckIn: true,
    officeSpace: true,
    hasMountainView: false,
    hasShampoo: true,
    hasFreeLaundry: true,
    hasAirConditioner: true,
    hasWifi: true,
    hasBarbeque: false,
    hasFreeParking: false,
    createdAt: '2025-07-20T14:30:00.000Z',
    updatedAt: '2025-07-27T08:15:00.000Z',
  }

  return NextResponse.json(mockRooms, { status: 200 })
}
