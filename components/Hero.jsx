"use client"
import { Caveat } from 'next/font/google'
import { MenuOutlined } from '@ant-design/icons'
import Link from 'next/link'
const caveat = Caveat({ subsets: ['latin'] })
export default function Hero() {
  return (
    <div className='flex justify-between items-center px-8 py-4'>
      <div>
        <h1 className={`${caveat.className} text-xl font-bold`} >HealTechBD</h1>
      </div>
      <div className='space-x-4'>
        <Link href='/'>
          AI Consultation
        </Link>
        <Link href='/'>
          Doctor's Serial
        </Link>
        <Link href='/'>
          Online Consultation
        </Link>
      </div>
      <div className='flex cursor-pointer items-center space-x-8'>
          <div className='flex space-x-8 items-center'>
            <Link href="/" className='bg-black text-white py-2 px-4 rounded-full'>Sign In</Link>
          </div>
      </div>
    </div>
  )
}
