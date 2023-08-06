"use client"
import { Caveat } from 'next/font/google'
import Link from 'next/link'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { useState } from 'react'
import { Button } from './ui/button'
const caveat = Caveat({ subsets: ['latin'] })

export default function Hero({ landing = false}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
            {landing && 
              <Link href={"/professional_registration"}><Button className="rounded-full bg-[#40a1ce]">For Professionals</Button></Link>
            }
            <Dialog className='bg-black text-white py-2 px-4 rounded-full'>
             <DialogTrigger className='bg-black text-white py-2 px-4 rounded-full'>Sign In</DialogTrigger>
              <DialogContent className="p-12">
                <DialogHeader className={`${caveat.className} mx-auto font-bold text-xl`}>HealTechBD</DialogHeader>
                <form>
                  <div className='flex flex-col space-y-4'>
                    <div className='space-x-4'>
                      <label for="email" className='' >Email : &#160; &#160; &#160; &#160; </label>
                      <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} className='border-b border-b-1 border-black focus:outline-none'/>
                    </div>
                    <div className='space-x-4'>
                       <label className=''>Password : </label>
                       <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='border-b border-b-1 border-black focus:outline-none'/>
                    </div>
                  <button onClick={handleFormSubmit} className='bg-black mt-4 text-white px-6 py-2 rounded-full shadow-md mx-auto'>Submit</button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
      </div>
    </div>
  )
}
