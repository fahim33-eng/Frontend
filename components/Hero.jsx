"use client"
import { Caveat } from 'next/font/google'
import { MenuOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { useState } from 'react'
const caveat = Caveat({ subsets: ['latin'] })
export default function Hero() {
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
        <Link href={'/'} className={`${caveat.className} text-xl font-bold`} ><h1>HealTechBD</h1></Link>
      </div>
      <div className='space-x-4'>
        <Link href='/' className='hover:outline outline-1 outline-gray-700 py-2 px-4 rounded-lg transition-all .5s'>
          AI Consultation
        </Link>
        <Link href='/' className='hover:outline outline-1 outline-gray-700 py-2 px-4 rounded-lg transition-all .5s'>
          Doctor's Serial
        </Link>
        <Link href='/' className='hover:outline outline-1 outline-gray-700 py-2 px-4 rounded-lg transition-all .5s'>
          Online Consultation
        </Link>
        <Link href='/' className='hover:outline outline-1 outline-gray-700 py-2 px-4 rounded-lg transition-all .5s'>
          Order Medicine
        </Link>
      </div>
      <div className='flex cursor-pointer items-center space-x-8'>
          <div className='flex space-x-8 items-center'>
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
