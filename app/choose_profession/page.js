"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiTwotoneLock } from 'react-icons/ai'
import { BsBriefcaseFill } from 'react-icons/bs' 
import { Caveat } from 'next/font/google'
const caveat = Caveat({ subsets: ['latin'] })

export default function page() {

  const [emailInput, setEmailInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  return (
    <main className='min-h-screen  bg-gradient-to-r from-[#40a1ce] to-[#bfecfa] flex flex-col items-center p-8 py-12'> 
      <h1 className='text-2xl font-semibold'>Welcome to <span className={`${caveat.className} text-3xl font-bold`}>HealTechBD!</span></h1>
      <p className='my-4 text-xl'>Let's get started! At first please tell us about your profession : </p>
      <div className='space-y-6 my-4 flex flex-col'>
        <Link className='bg-[#f0f0f0] text-xl space-x-4 w-[24rem] text-center shadow-md rounded-full px-4 py-2 items-center' href={"/choose_profession/doctor"}>I'm a Doctor</Link>
        <Link className='bg-[#f0f0f0] text-xl w-[24rem] text-center space-x-4 shadow-md rounded-full px-4 py-2 items-center' href={"/choose_profession/hospital"}>I have a hospital / clinic</Link>
        <Link className='bg-[#f0f0f0] text-xl w-[24rem] text-center space-x-4 shadow-md rounded-full px-4 py-2 items-center' href={"/choose_profession/pharmacy"}>I have a Pharmacy</Link>
        <Link className='bg-[#f0f0f0] text-xl w-[24rem] text-center space-x-4 shadow-md rounded-full px-4 py-2 items-center' href={"/choose_profession/ambulance"}>I'm an Ambulance Provider</Link>
      </div>
    
    </main>
  )
}
