import { FaqType } from '@/interface/nextBnb'
import { NextResponse } from 'next/server'

export async function GET() {
  const data: FaqType[] = [
    {
      id: 1,
      title: '예약을 변경하거나 취소하려면 어떻게 하나요?',
      desc: '예약 내역 페이지에서 변경 또는 취소 버튼을 눌러 쉽게 수정할 수 있습니다.',
    },
    {
      id: 2,
      title: '호스트에게 직접 연락할 수 있나요?',
      desc: '예약이 완료되면 메시지를 통해 호스트와 직접 소통할 수 있습니다.',
    },
    {
      id: 3,
      title: '환불 정책은 어떻게 되나요?',
      desc: '숙소마다 환불 정책이 다르며, 상세 페이지에서 확인할 수 있습니다.',
    },
    {
      id: 4,
      title: '결제는 어떤 방식으로 이루어지나요?',
      desc: '신용카드, 체크카드, 간편결제 등 다양한 결제 수단을 지원합니다.',
    },
    {
      id: 5,
      title: '리뷰는 어떻게 작성하나요?',
      desc: '체크아웃 후 예약 내역에서 숙소 리뷰를 남길 수 있습니다.',
    },
  ]

  return NextResponse.json(data, {
    status: 200,
  })
}
