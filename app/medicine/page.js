"use client"
import Hero from "@/components/Hero";
import MedicineList from "@/components/MedicineList";
import MedicineSIdeBar from "@/components/MedicineSIdeBar";
import Link from "next/link";
import { useState } from "react";
import { FaCartPlus } from 'react-icons/fa'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'


export default function page() {
  const [medicineInput, setMedicineInput] = useState("")
  const [cartItems, setCartItems] = useState([])
  console.log(cartItems)
  return (
    <main>
      <nav className="bg-white">
        <Hero />
      </nav>
      <div className="flex items-center my-4">
        <input type="text" value={medicineInput} onChange={e => setMedicineInput(e.target.value)} placeholder="Enter Your Required Medicine Here" className="h-[4rem] z-10 overflow-wrap px-4 w-[60%] focus:outline-none text-xl mx-auto placeholder:text-gray-400 border border-gray-500 rounded-full" />
      </div>
      {cartItems.length > 0 && 
        // <Link href={`/dashboard/1/cart/?cartItems=${JSON.stringify(cartItems)}`}>
        //   <div className="flex w-[32rem] mx-auto items-center justify-center space-x-6 text-black text-xl px-4 py-4 rounded-lg bg-[#2699b6] cursor-pointer">
        //     <FaCartPlus />
        //     <h1>Proceed To CheckOut</h1>
        //   </div>
        // </Link>
         <div className="flex w-[32rem] mx-auto items-center justify-center">
          <Dialog>
            <DialogTrigger>
                <div className="flex w-[32rem] mx-auto items-center justify-center space-x-6 text-black text-xl px-4 py-4 rounded-lg bg-[#2699b6] cursor-pointer">
                    <FaCartPlus />
                    <h1>Proceed To CheckOut</h1>
                </div>
            </DialogTrigger>
              <DialogContent className="p-12">
                <DialogHeader className={`$mx-auto font-bold text-xl`}>Your Cart</DialogHeader>
                <form>
                  <div className='flex flex-col space-y-4'>
                    <div className='space-x-4'>
                      {cartItems[0]?.title}
                    </div>
                    <div className='space-x-4'>
                      {cartItems[1]?.title}
                      
                    </div>
                  <button className='bg-black mt-4 text-white px-6 py-2 rounded-full shadow-md mx-auto'>Submit</button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
         </div>
      }
      <div className="flex mt-8">
        <MedicineSIdeBar />
        <MedicineList cartItems ={cartItems} setCartItems = {setCartItems} />
      </div>
    </main>
  )
}
