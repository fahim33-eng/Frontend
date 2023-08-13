"use client"
import Lottie from "lottie-react"
import doctor from '../../components/LottieFiles/doctor.json'
import { Caveat } from 'next/font/google'
import { useState } from "react"
const caveat = Caveat({ subsets: ['latin'] })

export default function page() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [image, setImage] = useState(null)
  return (
    <main className="min-h-screen w-full flex justify-start">
      <div className="flex flex-col h-screen w-[55%] items-center p-16 bg-gradient-to-r from-[#40a1ce] to-[#175d72]">
      <h1 className="mx-auto text-4xl text-white"><span className={caveat.className}>HealTechBD!</span> </h1>
      <h2 className=" py-3 shadow-md rounded-full px-4 font-semibold tracking-wider text-xl bg-gradient-to-r from-[#cad2d6] via-[#ffffff] to-[#fffcfc] bg-clip-text text-transparent">Start your journey! Sign Up Today</h2>

      <div className="px-4 py-8 w-[80%] my-8 bg-gradient-to-r from-[#1f89a3] to-[#22828f] flex rounded-lg shadow-lg drop-shadow-xl">
        <form className="space-y-4 py-4 px-2 w-full">
        <div className="flex mt-8 space-x-4">
          <div className='flex bg-[#f0f0f0] space-x-4 shadow-md rounded-full px-4 py-2 items-center'>
              <input required className='bg-transparent w-full focus:outline-none' onChange={e => setFirstName(e.target.value)} type="text" placeholder="First Name" value={firstName}/>
          </div>
          <div className='flex bg-[#f0f0f0] space-x-4 shadow-md rounded-full px-4 py-2 items-center'>
              <input required className='bg-transparent focus:outline-none w-full' onChange={e => setLastName(e.target.value)} type="text" placeholder="Last Name" value={lastName}/>
          </div>
        </div>
        <div className='flex bg-[#f0f0f0] space-x-4 shadow-md rounded-full px-4 py-2 items-center'>
            <input required className='bg-transparent w-full focus:outline-none' onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" value={email}/>
        </div>
        <div className='flex my-4 bg-[#f0f0f0] space-x-4 shadow-md rounded-full px-4 py-2 items-center'>
            <input required className='bg-transparent w-full focus:outline-none' onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" value={password}/>
        </div>
        <div className='flex my-4 bg-[#f0f0f0] space-x-4 shadow-md rounded-full px-4 py-2 items-center'>
            <input required className='bg-transparent w-full focus:outline-none' onChange={e => setPhone(e.target.value)} type="phone" placeholder="Contact Number" value={phone}/>
        </div>
          <div className="flex justify-start p-2 items-center bg-[#f0f0f0] rounded-full">
            <label className="w-full text-gray-500" htmlFor="imageInput">{image ? "Chosen File :" : "Upload Your Image :"}</label>
            <input className='focus:outline-none px-2 py-1 ml-[-8rem]' onChange={e => setImage(e.target.files[0])} id="imageInput" type="file" placeholder="Upload Your Ambulance Image Here"/>
          </div>
        </form>
      </div>
      
        <button className="bg-black mt-4 text-white px-6 py-2 rounded-full shadow-md mx-auto" type="submit">Submit</button>
      </div>
      <div className="flex items-center justify-center w-[50%]">
        <Lottie className=" h-screen items-center w-full" animationData={doctor} />
      </div>
    </main>
  )
}
