"use client"
import Lottie from "lottie-react"
import doctor from '../../components/LottieFiles/doctor.json'
import { Caveat } from 'next/font/google'
const caveat = Caveat({ subsets: ['latin'] })

export default function page() {
  return (
    <main className="h-screen w-full flex justify-start">
      <div className="flex flex-col h-screen w-[50%] items-center p-16 bg-gradient-to-r from-[#40a1ce] to-[#175d72]">
      <h1 className="mx-auto text-4xl text-white"><span className={caveat.className}>HealTechBD!</span> </h1>
      <h2 className=" py-3 shadow-md rounded-full px-4 font-semibold tracking-wider text-xl bg-gradient-to-r from-[#cad2d6] via-[#ffffff] to-[#fffcfc] bg-clip-text text-transparent">Start your journey! Sign Up Today</h2>

      <div className="px-4 py-8 my-8 bg-gradient-to-r from-[#1f89a3] to-[#22828f] flex flex-8 rounded-lg shadow-lg drop-shadow-xl">
        <form className="space-y-4 py-4 px-2">
          <div className="space-x-4">
            <label className="text-white">First Name : </label>
            <input type="text" className="border-b text-white border-b-1 bg-transparent border-white focus:outline-none" />
          </div>
            <label className="text-white">Last Name : </label>
            <input type="text" className="border-b text-white border-b-1 bg-transparent border-white focus:outline-none"/>
          <div>
            <label className="text-white">Email :  &#160;  &#160;  &#160;  &#160; </label>
            <input type="email" className="border-b text-white border-b-1 bg-transparent border-white focus:outline-none"/>
          </div>
          <div>
            <label className="text-white">Password : </label>
            <input type="password" className="border-b text-white border-b-1 bg-transparent border-white focus:outline-none" />
          </div>
          <div>
            <label className="text-white">Contact No. : </label>
            <input type="text" className="border-b text-white border-b-1 bg-transparent border-white focus:outline-none"/>
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
