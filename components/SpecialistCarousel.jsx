"use client"
import { RiMentalHealthFill, RiHeartPulseLine } from 'react-icons/ri'
import { TbMedicalCrossOff } from 'react-icons/tb'
import { FaBrain } from 'react-icons/fa'
import { GiKidneys, GiCancer, GiLiver, GiBloodyStash } from 'react-icons/gi'
import { BsFillEyeFill } from 'react-icons/bs'
import { BiSolidDonateBlood } from 'react-icons/bi'
import { useState } from 'react'

export default function SpecialistCarousel() {
    const [specialist, setSpecialist] = useState("");
    console.log(specialist)
  return (
    <div className='px-24 py-12 flex space-x-6 mx-auto'>
        <div key={1} onClick={e => setSpecialist(e.target.id)} className='flex cursor-pointer flex-col items-center justify-center space-y-4' id='psychiatrist'>
            <RiMentalHealthFill />
            <p className='text-sm'>Psychiatrist</p>
        </div>
        <div key={2} onClick={e => setSpecialist(e.target.id)} className='flex cursor-pointer flex-col items-center justify-center space-y-4' id='cardiologist'>
            <RiHeartPulseLine />
            <p className='text-sm'>Cardiologist</p>
        </div>
        <div key={3} onClick={e => setSpecialist(e.target.id)} className='flex cursor-pointer flex-col items-center justify-center space-y-4' id='dermatologists'>
            <TbMedicalCrossOff />
            <p className='text-sm'>Dermatologists</p>
        </div>
        <div key={4} onClick={e => setSpecialist(e.target.id)} className='flex flex-col cursor-pointer items-center justify-center space-y-4' id='endocrinologists'>
            <GiBloodyStash />
            <p className='text-sm'>Endocrinologists</p>
        </div>
        <div key={10} onClick={e => setSpecialist(e.target.id)} className='flex cursor-pointer flex-col items-center justify-center space-y-4' id='gastroenterologists'>
            <GiLiver />
            <p className='text-sm'>Gastroenterologists</p>
        </div>
        <div key={5} onClick={e => setSpecialist(e.target.id)} className='flex cursor-pointer flex-col items-center justify-center space-y-4' id='hematologists'>
            <BiSolidDonateBlood />
            <p className='text-sm'>Hematologists</p>
        </div>
        <div key={6} onClick={e => setSpecialist(e.target.id)} className='flex cursor-pointer flex-col items-center justify-center space-y-4' id='nephrologists'>
            <GiKidneys />
            <p className='text-sm'>Nephrologists</p>
        </div>
        <div key={7} onClick={e => setSpecialist(e.target.id)} className='flex cursor-pointer flex-col items-center justify-center space-y-4' id='neurologists'>
            <FaBrain />
            <p className='text-sm'>Neurologists</p>
        </div>
        <div key={8} onClick={e => setSpecialist(e.target.id)} className='flex cursor-pointer flex-col items-center justify-center space-y-4' id='oncologists'>
            <GiCancer />
            <p className='text-sm'>Oncologists</p>
        </div>
        <div key={9} onClick={e => setSpecialist(e.target.id)} className='flex cursor-pointer flex-col items-center justify-center space-y-4' id='ophthalmologists'>
            <BsFillEyeFill />
            <p className='text-sm'>Ophthalmologists</p>
        </div>
    </div>
  )
}

