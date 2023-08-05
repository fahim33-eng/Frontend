"use client"
import Hero from "@/components/Hero"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { BsFillCameraVideoFill } from 'react-icons/bs' 
import { TbCircleLetterH } from 'react-icons/tb'
import { GiNotebook } from 'react-icons/gi' 
export default function page({ params }) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => res.json())
    .then((data) => {
      setData(data)
      console.log(data)
      setLoading(false)
    })
}, [])
  return (
    <main className="relative min-h-screen bg-gradient-to-r from-[#40a1ce] to-[#bfecfa]">
      <nav className="bg-white">
        <Hero />
      </nav>
      <div className="flex space-x-6 items-center justify-center mt-[5%]">
        <Button className="text-xl p-8 rounded-full"><span className="mr-4"><BsFillCameraVideoFill/></span>Take Online Consultation</Button>
        <Button className="text-xl p-8 rounded-full"><span className="mr-4"><GiNotebook/></span>Book An Appointment</Button>
      </div>
      <div className="flex w-4/5 justify-between bg-white mt-12 mx-auto">
        <div className="p-8">
          <div className="flex space-x-2 items-center">
            <div className="text-3xl bg-black text-white rounded-full"><TbCircleLetterH/></div>
            <h1>PROFILE</h1>
          </div>
          <h1 className="my-4 text-4xl font-bold">{data?.name}</h1>
          <h1>{data?.address.city}</h1>
        </div>
        <div className="relative w-[32rem] h-[24rem] overflow-hidden">
          <Image src={"/surgeon.jpg"} layout="fill" objectFit="cover" alt="Doctor's Image" />
        </div>
      </div>
    </main>
  )
}
