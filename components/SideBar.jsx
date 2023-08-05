"use client"
import React, { useState } from 'react'
import { FiFilter } from 'react-icons/fi'
import { Button } from './ui/button'
import { Slider } from '@mui/material';


export default function SideBar() {
    function valueText(value) {
        return `${value} BDT`;
    }
    const [value, setValue] = useState([0, 100]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  return (
    <div className='w-80 border-r mx-auto border-r-gray-300 h-screen px-4'>
      <Button className="w-full space-x-4 bg-[#173f1a] text-md">
        <span className='mr-5'><FiFilter /></span>
        Filters
      </Button>
      <div className='flex space-x-4 items-center mt-8 mb-2 border-b border-gray-300'>
        <p className='text-sm text-gray-500'>Showing <span>20</span> of <span>20</span> results</p>
        <Button variant="link" className="text-[#4fb2c4]">Clear</Button>
      </div>
      <div className='space-y-5 my-3 pb-4  border-b border-gray-300'>
        <h2>Price Range : </h2>
        <div className='flex justify-around'>
            <p className='text-sm'>Min : <span className='border border-gray-400 p-1 w-4'>{value[0] * 100}</span> </p>
            <p className='text-sm'>Max : <span className='border border-gray-400 p-1'>{value[1] * 100}</span> </p>
        </div>
        <Slider
            getAriaLabel={() => 'Price Range'}
            value={value}
            onChange={handleChange}
            getAriaValueText={valueText}
            className='text-[#3e8147]'
        />
      </div>
    </div>
  )
}
