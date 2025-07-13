import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

interface Props {
  children?: React.ReactNode
}

export const NextLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <div className="mt-10 mb-10 p-10 min-h-[100vh] bg-red-100">
        {children}
      </div>
      <Footer />
    </>
  )
}
