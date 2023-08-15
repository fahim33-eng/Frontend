"use client"
import Lottie from 'lottie-react'
import loader from '../components/LottieFiles/angry_bird.json'

export default function loading() {
  return (
    <div>
        <Lottie animationData={loader} className='w-full h-full'/>   
    </div>
  )
}
