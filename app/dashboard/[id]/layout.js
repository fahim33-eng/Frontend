"use client"
import DashBoardHero from '@/components/DashBoardHero'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { GiMoneyStack } from 'react-icons/gi'
GiMoneyStack

export default function RootLayout({ params, children }) {
  const [currentState, setCurrentState] = useState("upcoming")
  return (
    <main>
      <nav>
        <DashBoardHero />
      </nav>
      <div className='flex mt-4'>
        <div className='w-96 text-white flex items-center flex-col border-r mx-auto border-r-gray-300 h-screen bg-gradient-to-r from-[#103153] to-[#0f2441]'>
          <div className="relative mt-8 w-32 h-32 rounded-full flex items-center overflow-hidden">
            <Image src={"/surgeon.jpg"} layout="fill" objectFit="cover" alt="Doctor's Image" />
          </div>
          <h1 className='text-xl text-white my-4'>Hi, John!</h1>
          <p className='text-lg'>Balance : <span className='font-bold underline text-xl'>2000</span> BDT <Link href={`/transaction/${params.id}?type=Recharge`}><Button className="rounded-full bg-[#25b6c9]">Recharge <GiMoneyStack className='ml-4 text-white' /></Button></Link></p>
          <div onClick={() => setCurrentState("cart")} className={`${currentState == 'cart' && "bg-white text-black"} flex py-4 border-b border-b-[#f0f0f0] cursor-pointer justify-between px-8 mt-8 w-full items-center`}>
              <Link className='h-full w-full' href={`/dashboard/${params.id}/cart`}>Go To Cart</Link>
              <AiOutlineArrowRight />
          </div>
          <div onClick={() => setCurrentState("upcoming")}  className={`${currentState == 'upcoming' && "bg-white text-black"} flex border-b border-b-[#f0f0f0] py-4 cursor-pointer justify-between px-8 w-full items-center`}>
            <Link className='h-full w-full' href={`/dashboard/${params.id}/`}>Upcoming Events</Link>
              <AiOutlineArrowRight />
          </div>
          <div onClick={() => setCurrentState("recent")}  className={`${currentState == 'recent' && "bg-white text-black"} flex border-b border-b-[#f0f0f0] py-4 cursor-pointer justify-between px-8 w-full items-center`}>
              <Link className='h-full w-full' href={`/dashboard/${params.id}/recent`}>Recent Events</Link>
              <AiOutlineArrowRight />
          </div>
          <div onClick={() => setCurrentState("update")}  className={`${currentState == 'update' && "bg-white text-black"} flex border-b border-b-[#f0f0f0] py-4 cursor-pointer justify-between px-8 w-full items-center`}>
              <Link className='h-full w-full' href={`/dashboard/${params.id}/update_info`}>Update Information</Link>
              <AiOutlineArrowRight />
          </div>
          <Button className="mt-12 rounded-full">Sign Out</Button>
        </div>
        <div className='flex-1 p-3'>
            {children}

        </div>
      </div>
    </main>
  )
}
