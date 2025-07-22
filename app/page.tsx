'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const { push } = useRouter()
  return (
    <div>
      <button onClick={() => push('/css')}>CSS Page 이동버튼</button>
    </div>
  )
}
