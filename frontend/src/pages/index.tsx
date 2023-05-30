import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className='font-sans bg-black text-white'> Hello</h1>
    </div>
  )
}
