import Image from 'next/image'
import React from 'react'

export default function ReviewCard({ review }) {
  return (
    <div className='my-4 mx-4 p-3 rounded-md shadow-md bg-[#f3f3f3]'>
      <div className='justify-between flex items-center px-4'>
        <div className='flex items-center space-x-3'>
            <div className='relative w-12 h-12 rounded-full overflow-hidden'>
                <Image alt="User Image" src={"/surgeon.jpg"} layout="fill" objectFit="cover" />
            </div>
            <h1 className='text-md font-semibold'>{review.name}</h1>
        </div>
        <div className='flex space-x-1 items-center'>
            <h1 className='text-lg'>{review.postId < 6 ? review.postId : 5}.0</h1>
            <div className='relative w-32 h-16 overflow-hidden'>
                <Image alt="Review Image" src={`/${review.postId < 6 ? review.postId : "5"}.png`} layout="fill" objectFit="cover" />
            </div>
        </div>
      </div>
      <h1 className='text-gray-500 mt-4 px-4'>"{review.body}"</h1>
    </div>
  )
}
