import FeatureSection from '@/components/nextBnB/RoomDetail/FeatureSection'
import HeaderSection from '@/components/nextBnB/RoomDetail/HeaderSection'

import { ParamsProps, RoomType } from '../../../interface/nextBnb'
import type { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'

export default async function RoomPage({ params }: ParamsProps) {
  const { id } = params
  const data: RoomType = await getData()

  // const Comment = dynamic(() => import('@/components/Comment'), {
  //   loading: () => <Loader />,
  // })

  return (
    <div className="mt-8 mb-20 max-w-6xl mx-auto">
      <HeaderSection data={data} />
      <FeatureSection data={data} />
      {/* <Comment room={data} /> */}
    </div>
  )
}

async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rooms`)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  } catch (e) {
    console.error(e)
  }
}

export async function generateMetadata(
  { params }: ParamsProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.id

  // fetch data
  const room = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/rooms`,
    {},
  ).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const prevKeywords = (await parent)?.keywords || []

  return {
    title: `Nextbnb 숙소 - ${room?.title}`,
    description:
      room?.description ?? 'Fastcampus Nextbnb로 여행을 계획해보세요.',
    keywords: [room?.category, ...prevKeywords],
  }
}
