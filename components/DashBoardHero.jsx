"use client"
import { Caveat } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from './ui/button'
import { AiOutlineMenu } from 'react-icons/ai'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
const caveat = Caveat({ subsets: ['latin'] })

export default function DashBoardHero({ landing = false}) {
  return (
    <div className='flex justify-between items-center px-8 py-4'>
      <div>
        <h1 className={`${caveat.className} text-2xl font-bold`}>HealTechBD</h1>
      </div>
      <div className='space-x-4'>
        <Link href='/ai' className='hover:outline outline-1 outline-gray-700 py-2 px-4 rounded-lg transition-all .5s'>
          AI Consultation
        </Link>
        <Link href='/consultation' className='hover:outline outline-1 outline-gray-700 py-2 px-4 rounded-lg transition-all .5s'>
          Doctor's Consultation
        </Link>
        <Link href='/diagnosis' className='hover:outline outline-1 outline-gray-700 py-2 px-4 rounded-lg transition-all .5s'>
          Diagnosis
        </Link>
        <Link href='/medicine' className='hover:outline outline-1 outline-gray-700 py-2 px-4 rounded-lg transition-all .5s'>
          Order Medicine
        </Link>
        <Link href='/ambulance' className='hover:outline outline-1 outline-gray-700 py-2 px-4 rounded-lg transition-all .5s'>
          Ambulance Service
        </Link>
      </div>
      <div>
      <DropdownMenu className="z-50 bg-white">
        <DropdownMenuTrigger className='focus:outline-none outline-none border-none bg-white'>
          <div className='flex space-x-2 focus:outline-none outline-none border-none z-50'>
            <p>Menu</p>
            <AiOutlineMenu className='text-2xl' />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='z-50 bg-white'>
          <DropdownMenuItem className='p-2 my-4 cursor-pointer z-50'>My DashBoard</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='p-2 my-4 cursor-pointer z-50'>Sign Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      </div>
    </div>
  )
}
