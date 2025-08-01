'use client'
import { useState } from 'react'
import RoomRegisterCategory from './category/page' // 1
import RoomRegisterInfo from './info/page' // 2
import RoomRegisterAddress from './address/page' // 3
import RoomRegisterFeature from './feature/page' //4
import RoomRegisterImage from './image/page' // 5

export default function RegisterPage() {
  const [roomForm, setRoomForm] = useState({
    images: [],
    title: '',
    address: '',
    desc: '',
    bedroomDesc: '',
    price: 0,
    category: '',
    lat: '',
    lng: '',
    freeCancel: false,
    selfCheckIn: false,
    officeSpace: false,
    hasMountainView: false,
    hasShampoo: false,
    hasFreeLaundry: false,
    hasAirConditioner: false,
    hasWifi: false,
    hasBarbeque: false,
    hasFreeParking: false,
  })

  return (
    <>
      {/* Stepper 1 */}
      <RoomRegisterCategory roomForm={roomForm} setRoomForm={setRoomForm} />
      {/* Stepper 2 */}
      <RoomRegisterInfo roomForm={roomForm} setRoomForm={setRoomForm} />
      {/* Stepper 3 */}
      <RoomRegisterAddress roomForm={roomForm} setRoomForm={setRoomForm} />
      {/* Stepper 4 */}
      <RoomRegisterFeature roomForm={roomForm} setRoomForm={setRoomForm} />
      {/* Stepper 5 */}
      <RoomRegisterImage roomForm={roomForm} setRoomForm={setRoomForm} />
    </>
  )
}
