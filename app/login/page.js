"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiTwotoneLock } from 'react-icons/ai'
import { BsBriefcaseFill } from 'react-icons/bs' 
import { Caveat } from 'next/font/google'
const caveat = Caveat({ subsets: ['latin'] })
import { useRouter } from 'next/navigation'


export default function page() {
  const router = useRouter()
  let id = null
  const [emailInput, setEmailInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")

  async function handleSubmit() {
    const data = {
      email : emailInput,
      password : passwordInput
    }
    const endpoint = 'http://localhost:8080'
    const response = await fetch(`${endpoint}/signin`, {
      method: 'POST',
      headers : {'Content-Type': 'application/json'},
      body : JSON.stringify(data)
    })
    
    const ans = await response.json()
    id = ans.id
    if(id !=null) {
      router.push(`/dashboard/${id}`)
    }

  }
  
  return (
    <main className='min-h-screen bg-gradient-to-r from-[#40a1ce] to-[#bfecfa] flex items-center justify-center'> 
      <div className='bg-[#ffffff] rounded-lg shadow-md w-[64rem] h-[38rem] m-auto flex items-center p-4 justify-around'>
        <div className='flex flex-col justify-center items-center'>
            <Link href={'/'} className={`${caveat.className} text-4xl font-bold`} ><h1>HealTechBD</h1></Link>
            <Image src={"/registration.png"} alt='registration' width={"400"} height={"400"} />
        </div>
        <div className='flex flex-col justify-around items-center'>
            <h1 className='mb-16 text-xl font-semibold'>Professional Members Login</h1>
            <div className='space-y-8'>
                <div className='flex bg-[#f0f0f0] space-x-4 shadow-md rounded-full px-4 py-2 items-center'>
                    <BsBriefcaseFill />
                    <input className='bg-transparent focus:outline-none' onChange={e => setEmailInput(e.target.value)} type="email" placeholder="Email" value={emailInput}/>
                </div>
                <div className='flex bg-[#f0f0f0]  space-x-4 shadow-md rounded-full px-4 py-2 items-center'>
                    <AiTwotoneLock />
                    <input className='bg-transparent focus:outline-none' onChange={e => setPasswordInput(e.target.value)} type="password" placeholder="Password" value={passwordInput}/>
                </div>
            </div>
            <Button onClick={handleSubmit} className="my-8 rounded-full mx-auto">Sign In</Button>
            <p>New Here ?</p>
            <Link href={"/choose_profession"} className='underline font-semibold text-sm cursor-pointer my-2'>Create An Account</Link>
        </div>
      </div>
    </main>
  )
}
