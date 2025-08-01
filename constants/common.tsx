import {
  SlHome,
  SlDiamond,
  SlMap,
  SlMenu,
  SlDoc,
  SlNote,
  SlCreditCard,
} from 'react-icons/sl'

export const commonPageList = [
  { url: '/', name: 'HOME', bg: 'bg-red-100', icon: <SlHome /> },
  {
    url: '/common/css',
    name: 'CSS',
    bg: 'bg-red-200',
    icon: <SlDiamond />,
  },
  {
    url: '/common/form',
    name: 'Form',
    bg: 'bg-red-300',
    icon: <SlNote />,
  },
]

export const nextBnBPageList = [
  {
    url: '/nextBnB/filter',
    name: 'Filter',
    bg: 'bg-blue-100',
    icon: <SlMenu />,
  },
  {
    url: '/nextBnB/faqs',
    name: 'FAQ',
    bg: 'bg-blue-200',
    icon: <SlDoc />,
  },
  {
    url: '/nextBnB/roomsDetail',
    name: 'Rooms Detail',
    bg: 'bg-blue-300',
    icon: <SlMap />,
  },
  {
    url: '/payments?customerKey=123&roomTitle=Ocean%20View%20Suite&checkIn=2025-08-10&checkOut=2025-08-13&guestCount=2&totalAmount=450000&totalDays=3&bookingId=9876',
    name: 'Toss',
    bg: 'bg-blue-400',
    icon: <SlCreditCard />,
  },
  {
    url: '/nextBnB/register',
    name: 'Form',
    bg: 'bg-blue-500',
    icon: <SlNote />,
  },
]
