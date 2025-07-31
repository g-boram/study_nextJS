// import prisma from '@/db'
import { NextResponse } from 'next/server'

// import { getServerSession } from 'next-auth'
// import { authOptions } from '../auth/[...nextauth]/route'
// import axios from 'axios'
import { RoomType } from '@/interface/nextBnb'
import { roomsMockData } from '@/app/mockData/nextBnBData'

export async function GET(req: Request) {
  return NextResponse.json(roomsMockData, { status: 200 })
}
