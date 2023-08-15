import React from 'react'
import { FiClock } from 'react-icons/fi'
import { CiLocationOn } from 'react-icons/ci'
import { BiSolidTimer } from 'react-icons/bi'
import { Button } from './ui/button'
import Link from 'next/link'
BiSolidTimer


const getTimeFormatted = (timestamp) => {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours; 
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${formattedMinutes} ${ampm}`;
};
const getTimeDifference = (eventTime) => {
    const currentTime =  new Date().getTime()
    const timeDifference = eventTime - currentTime;
    return Math.ceil(timeDifference / 60000)
};


export default function UserEventCard({ userEvent, id }) {
  
  return (
    <div className='p-3 text-white rounded-md bg-gradient-to-r from-[#103153] to-[#103153] z-0'>
      <div className='flex justify-between items-center'>
        <Link href={`/video/${id}`}><Button disabled = {getTimeDifference(userEvent.time) > 0} className={`${getTimeDifference(userEvent.time) > 0 ? "bg-[#bbbbbb] text-black" : "bg-[#7bff00]"} hover:bg-[#478b08] text-black font-bold `}>Join Meeting</Button></Link>
        <div className='flex space-x-3 items-center'>
            <FiClock />
            <h1 className='font-semibold text-lg'>{getTimeFormatted(userEvent.time)}</h1>
        </div>
      </div>
        <h1 className='my-4'>Appointment With <span className='font-semibold text-md'>Dr. {userEvent.d_name}</span></h1>
        <div className='flex justify-between px-2 py-1'>
            <div className='flex space-x-4 items-center'>
                <CiLocationOn />
                <h1 className='font-semibold text-md' >Online</h1>
            </div>
            <div className='flex space-x-4 items-center'>
                <BiSolidTimer />
                <h1 className='font-semibold text-md'>{getTimeDifference(userEvent.time)} minutes to go</h1>
            </div>
        </div>
    </div>
  )
}
