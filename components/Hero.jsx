"use client"
import { Caveat } from 'next/font/google'
import Link from 'next/link'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { useState } from 'react'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { AiOutlineMenu } from 'react-icons/ai'

const caveat = Caveat({ subsets: ['latin'] })

export default function Hero({ landing = false}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signedIn, setSignedIn] = useState(false)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
    setEmail('')
    setPassword('')
  }
  return (
    <div className='flex justify-between items-center px-8 py-4'>
      <div>
        <Link href={'/'} className={`${caveat.className} text-2xl font-bold`} ><h1>HealTechBD</h1></Link>
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
      <div className='flex cursor-pointer items-center space-x-8'>
          <div className='flex space-x-8 items-center'>
            {landing && !signedIn && 
              <Link href={"/choose_profession"}><Button className="rounded-full bg-[#40a1ce]">For Professionals</Button></Link>
            }
            {!signedIn ?
            <Link href={"/login"}><Button className="rounded-full">Sign In</Button></Link> 
            :
           <DropdownMenu>
            <DropdownMenuTrigger className='focus:outline-none outline-none border-none'>
              <div className='flex space-x-2 focus:outline-none outline-none border-none'>
                <p>Menu</p>
                <AiOutlineMenu className='text-2xl' />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-white mr-8'>
              <DropdownMenuItem className='p-2 my-4 cursor-pointer'><Link href={`/dashboard/1/`}>My DashBoard</Link></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='p-2 my-4 cursor-pointer'>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          }
          </div>
      </div>
    </div>
  )
}



