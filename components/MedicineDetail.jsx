"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import {useSetRecoilState } from 'recoil'
import { cartItems } from '@/atom/globalVariables'

export default function MedicineDetail({ medicineDetail, cartItems, setCartItems }) {
    const [number, setNumber] = useState(0)
    const [buttonClicked, setButtonClicked] = useState(false)

    function handleAddToCart() {
        if(!buttonClicked) {
            setCartItems([...cartItems, medicineDetail])
        }
    }
  return (
    <div key={medicineDetail.id} className='flex justify-between items-center p-4 shadow-xl rounded-lg'>
        <div>
            <div className='w-[40rem]'>
                <h1 className='text-lg font-semibold uppercase'>{medicineDetail.title}</h1>
            <p className='text-sm mb-2'>Company Name</p>
            </div>
            <span className='text-sm px-4 py-2 rounded-full text-white bg-gray-500 my-2'><span className='font-semibold text-xl'>{medicineDetail.id}</span> BDT per piece </span>
        </div>
        <div className='flex space-x-4 text-xl '>
            <p onClick={() => setNumber((prev) => prev > 0 ? prev - 1 : prev)} className='px-1 rounded-md border text-2xl border-black cursor-pointer'>-</p>
            <p className='text-xl font-semibold'>{number}</p>
            <p onClick={() => setNumber(prev => prev + 1)} className='px-1 rounded-md border border-black text-2xl cursor-pointer'>+</p>
        </div>
        <div className='space-y-2 flex flex-col items-center justify-center'>
            <h1>Total : <span className='font-bold text-lg'>{number * medicineDetail.id}</span> BDT</h1>
            <Button onClick={() => {
                setButtonClicked(prev => !prev)
                handleAddToCart()
            }} className={`${!buttonClicked ? "bg-[#2699b6]" : "bg-[#803131]"} w-48`}>{buttonClicked ? "Remove From Cart" : "Add To Cart"}</Button>
        </div>
    </div>
  )
}
