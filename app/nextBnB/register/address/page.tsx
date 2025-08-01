'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { FormUrl } from '@/constants'
import Stepper from '@/components/nextBnB/form/Stepper'
import AddressSearch from '@/components/nextBnB/form/AddressSearch'
import NextButton from '@/components/nextBnB/form/NextButton'

interface RoomAddressProps {
  address?: string
}

export default function RoomRegisterAddress({ roomForm, setRoomForm }: any) {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RoomAddressProps>()

  const onSubmit = (data: RoomAddressProps) => {
    setRoomForm({
      ...roomForm,
      address: data?.address || '',
    })
    router.push(FormUrl.FEATURE)
  }

  useEffect(() => {
    if (roomForm) {
      setValue('address', roomForm.address)
    }
  }, [roomForm, setValue])

  useEffect(() => {
    router.prefetch(FormUrl.FEATURE)
  }, [router])

  return (
    <div className="mb-20 border-2 border-neutral-200 rounded-lg p-10">
      <Stepper count={3} />
      <form
        className="mt-10 flex flex-col gap-6 px-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-semibold text-lg md:text-2xl text-center">
          숙소의 위치를 입력해주세요
        </h1>
        <AddressSearch
          register={register}
          errors={errors}
          setValue={setValue}
        />
        <NextButton type="submit" />
      </form>
    </div>
  )
}
