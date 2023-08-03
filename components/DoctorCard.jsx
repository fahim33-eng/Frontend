"use client"
import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai"

export default function DoctorCard({ id, name, imageUrl, hospital, fee, rating }) {
  console.log("DoctorCard")
  console.log(`${id} ${name}`)
  return (
    <div key={id} className="my-4 cursor-pointer">
      <div className="relative w-64 h-64 rounded-md overflow-hidden">
        <Image src={imageUrl} layout="fill" objectFit="cover" alt="Doctor's Image" />
      </div>
      <div className="flex justify-between items-center p-2">
        <h3 className="font-bold">{name}</h3>
       <div className="flex space-x-1 items-center">
        <AiFillStar />
        <p>{rating}</p>
       </div>
      </div>
      <p className="px-2 text-sm">{hospital}</p>
      <div className="px-2 flex items-center">
        <p className="text-sm border-b-[1px] border-black"><span className="font-bold">{fee + 10}.00</span> BDT including all charges</p>
      </div>
    </div>
  )
}


// https://picsum.photos/200/300 -> Random image