"use client"
import Image from 'next/image'
import { Nunito, Oswald } from 'next/font/google'
import Lottie from 'lottie-react'
import doctor from '../components/LottieFiles/landing_page_animation1.json'
import drugAnime from '../components/LottieFiles/animation_lkbh50ap.json'


const nunito = Nunito({ subsets: ['latin'] })
const oswald = Oswald({ subsets: ['latin'] })
import Link from 'next/link'
import Hero from '@/components/Hero'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { animated, useSpring } from '@react-spring/web'
import { motion } from "framer-motion"
import AnimatedText from '@/components/AnimatedText'
import Footer from '@/components/Footer'
import UserCard from '@/components/UserCard'
import UserCardCarousel from '@/components/UserCardCarousel'

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_ENDPOINT)

  return (
    <main className="relative min-h-screen bg-gradient-to-r from-[#40a1ce] to-[#bfecfa]">
      <nav className='sticky z-50 bg-white'>
        <Hero landing = {true} />
      </nav>
      <div  className=''>
        <Parallax pages={6} style={{ top: '0', left: '0' }} >
          <ParallaxLayer className='flex flex-col items-center'>
            <section className='min-h-screen flex items-center'>
              <div className='flex w-full justify-between items-center p-16'>
                <div className='max-w-[644px]'>
                  <h1 className={`${nunito.className} text-white text-4xl font-bold bg-gradient-to-r from-[#a9e3fa] via-[#a970eb] to-[#d374ff] bg-clip-text text-transparent p-6`}>Your Health, Reimagined :</h1>
                  <h3 className='text-white text-xl px-6 tracking-wide leading-7'>Welcome to our revolutionary healthcare platform, where Cutting-Edge Technology meets Compassionate Care. We believe in reimagining the way healthcare is delivered.Our team of expert doctors and healthcare professionals is dedicated to providing you with personalized and exceptional care.</h3>
                  <div className='flex space-x-6 p-6 items-center'>
                    <h1 className='text-white text-xl underline'>Discover your path to optimal health : </h1>
                    <button className='bg-black text-white px-6 py-3 rounded-full shadow-md transition-all duration-300 ease-in-out'><Link href="/signup">JOIN US</Link></button>
                  </div>
                </div>
                <Lottie className='w-[60%] mt-10' animationData={doctor} />
              </div>
            </section>
          </ParallaxLayer>
          <ParallaxLayer offset={1} factor={1} speed={0.2} style={{ backgroundImage : 'url(/surgeon.jpg)', backgroundSize : 'cover' }} />
          <ParallaxLayer offset={1} speed={.5} >
            <section className='flex space-x-8 mt-16justify-start items-center'>
              <div className='flex z-100 flex-col space-y-8 items-center justify-start'>
                <h1 className={`w-[90%] mt-24 z-50 text-white text-center text-5xl ${oswald.className}` }>"Say goodbye to long waits and hello to hassle-free appointments! Book your doctor's visit with just a click - the fastest way to get the care you need!"</h1>
                <button className='bg-yellow-300 mx-auto rounded-full px-4 py-2'><Link href="/signup">Try Booking An Appointment</Link></button>  
              </div>
              <div className='w-[60%]'>
                <span></span>
              </div>
            </section>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.1}  style={{ backgroundImage : 'url(/telemedicine.jpg)', backgroundSize : 'cover' }} />
          <ParallaxLayer offset={2} speed={.8}>
            <section className='flex justify-end items-start'>
              <div className='w-[50%]'>
                <span></span>
              </div>
              <div className='flex flex-col space-y-8 w-full justify-end items-center'>
                <h1 className={`w-[90%] text-white text-center text-4xl ${oswald.className}` }>Experience the Future of Healthcare: Connect with Experienced Doctors from Anywhere! Our online doctor consultations bring the expertise of skilled medical professionals directly to your screen.</h1>
                <button className='bg-[#456794] mx-auto text-white rounded-full px-4 py-2'><Link href="/signup">Try Online Consultation</Link></button>  
              </div>
            </section>
          </ParallaxLayer>
          <ParallaxLayer offset={3} factor={1.5} speed={2} style={{ backgroundImage : 'url(/drug.jpg)', backgroundSize : 'cover' }} />
          <ParallaxLayer offset={3} speed={.5} >
              <Lottie animationData={drugAnime} className='w-[20%] mx-auto mt-[-100px]'/>   
            <section className='flex space-x-8 mt-64 justify-start items-center'>
              <div className='flex z-100 flex-col space-y-8 items-center justify-start'>
                <h1 className={`w-[90%] z-50 text-white text-center text-5xl ${oswald.className}` }>Embrace the power of technology to have your prescribed medications delivered right to your doorstep, saving you time, effort, and unnecessary trips.</h1>
                <button className='bg-yellow-500 mx-auto text-white rounded-full px-4 py-2'><Link href="/signup">Order Medicine Online</Link></button>  
              </div>
              <div className='w-[60%]'>
                <span></span>
              </div>
            </section>
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={2} className='mt-[-400px]' factor={2}  style={{ backgroundImage : 'url(/ai.jpg)', backgroundSize : 'cover' }} />
          <ParallaxLayer offset={4} speed={1}>
            <section className='flex justify-end items-start'>
              <div className='flex flex-col space-y-8 w-full justify-end items-center'>
                <h1 className={`w-[90%] text-[#fff] mt-[400px] text-center text-4xl ${oswald.className}` }>Our AI Health Consultant utilizes advanced algorithms and vast medical knowledge to provide personalized insights, tailored to your unique needs.</h1>
                <button className='bg-[#689367] mx-auto text-white rounded-full px-4 py-2'><Link href="/signup">Try It Out</Link></button>  
              </div>
              <div className='w-[50%]'>
                <span></span>
              </div>
            </section>
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={3} className='space-y-16 bg-gradient-to-r from-[#40a1ce] to-[#bfecfa] mt-[-1200px] flex flex-col items-center '>
            <h1 className='text-4xl'>What Users Have Told About Us : </h1> 
            <UserCardCarousel />
          </ParallaxLayer>
        </Parallax>
      </div>
    </main>
  )
}


