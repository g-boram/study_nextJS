import { NextResponse } from 'next/server'

import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { userMockData } from '@/app/mockData/nextBnBData'

// import prisma from '@/db'

export async function GET(req: Request) {
  const session = await getServerSession(authOptions)
  const data = userMockData

  if (!session?.user) {
    return NextResponse.json(
      { error: 'Unauthorized user' },
      {
        status: 401,
      },
    )
  }

  return NextResponse.json(data, {
    status: 200,
  })
}
