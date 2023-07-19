"use client"
import Image from 'next/image'
import { Nunito, Oswald } from 'next/font/google'
import Lottie from 'lottie-react'
import doctor from '../components/LottieFiles/landing_page_animation1.json'
import nurse from '../components/LottieFiles/flying_nurse.json'
const nunito = Nunito({ subsets: ['latin'] })
const oswald = Oswald({ subsets: ['latin'] })
import Link from 'next/link'
import Hero from '@/components/Hero'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#40a1ce] to-[#bfecfa]">
      <nav className='sticky z-50 bg-white'>
        <Hero />
      </nav>
      <div  className='overflow-hidden overscroll-none'>
        <Parallax pages={6} style={{ top: '0', left: '0' }} >
          <ParallaxLayer className='flex items-center'>
            <section className='min-h-screen flex items-center'>
              <div className='flex justify-between items-center p-16'>
                <div className='mt-10 max-w-[644px]'>
                  <h1 className={`${nunito.className} text-white text-4xl font-bold bg-gradient-to-r from-[#a9e3fa] via-[#a970eb] to-[#d374ff] bg-clip-text text-transparent p-6`}>Your Health, Reimagined :</h1>
                  <h3 className='text-white text-xl px-6 tracking-wide leading-7'>Welcome to our revolutionary healthcare platform, where Cutting-Edge Technology meets Compassionate Care. We believe in reimagining the way healthcare is delivered.Our team of expert doctors and healthcare professionals is dedicated to providing you with personalized and exceptional care.</h3>
                  <div className='flex space-x-6 p-6 items-center'>
                    <h1 className='text-white text-xl underline'>Discover your path to optimal health : </h1>
                    <button className='bg-black text-white px-6 py-3 rounded-full shadow-md transition-all duration-300 ease-in-out'><Link href="/signup">JOIN US</Link></button>
                  </div>
                </div>
                <Lottie className='w-[684px] mt-10' animationData={doctor} />
              </div>
            </section>
            </ParallaxLayer>
          <ParallaxLayer offset={1} speed={.5} >
            <section className='flex space-x-8 justify-start items-center'>
              <div className='flex flex-col mt-64 space-y-8 items-center justify-start'>
                <h1 className={`w-[70%] text-center text-3xl ${oswald.className}` }>"Say goodbye to long waits and hello to hassle-free appointments! Book your doctor's visit with just a click - the fastest way to get the care you need!"</h1>
                <button className='bg-black mx-auto text-white rounded-full px-4 py-2'><Link href="/signup">Try Booking An Appointment</Link></button>  
              </div>
              <div className='w-[60%]'>
                <span></span>
              </div>
            </section>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={1}>
            <Image src={'/surgeon.jpg'} alt='Doctor Model' width={"484"} height={"484"} className='ml-auto mr-8 rounded-md'/>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1}>
            <section className='flex justify-end items-start'>
              <div className='w-[50%]'>
                <span></span>
              </div>
              <div className='flex flex-col space-y-8 w-full justify-end items-center'>
                <h1 className={`w-[70%] text-center text-3xl ${oswald.className}` }>Experience the Future of Healthcare: Connect with Experienced Doctors from Anywhere! Our online doctor consultations bring the expertise of skilled medical professionals directly to your screen.</h1>
                <button className='bg-black mx-auto text-white rounded-full px-4 py-2'><Link href="/signup">Try An Online Consultation</Link></button>  
              </div>
            </section>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={3}>
            <Image src={'/telemedicine.jpg'} alt='Doctor Model' width={"484"} height={"484"} className='h-auto mt-[-850px] mr-auto ml-8 rounded-md'/>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={1} >
            <section className='flex justify-start'>
              <div className='flex flex-col space-y-8 items-center justify-start'>
                <h1 className={`w-[70%] text-center text-3xl ${oswald.className}` }>"Say goodbye to long waits and hello to hassle-free appointments! Book your doctor's visit with just a click - the fastest way to get the care you need!"</h1>
                <button className='bg-black mx-auto text-white rounded-full px-4 py-2'><Link href="/signup">Try Booking An Appointment</Link></button>  
              </div>
              <div className='w-[50%]'>
                <span></span>
              </div>
            </section>
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={1}>
            <section className='flex justify-end items-start'>
              <div className='w-[50%]'>
                <span></span>
              </div>
              <div className='flex flex-col space-y-8 w-full justify-end items-center'>
                <h1 className={`w-[70%] text-center text-3xl ${oswald.className}` }>Experience the Future of Healthcare: Connect with Experienced Doctors from Anywhere! Our online doctor consultations bring the expertise of skilled medical professionals directly to your screen.</h1>
                <button className='bg-black mx-auto text-white rounded-full px-4 py-2'><Link href="/signup">Try An Online Consultation</Link></button>  
              </div>
            </section>
          </ParallaxLayer>
        </Parallax>
      </div>

    </main>
  )
}
