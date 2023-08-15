"use client"
import Hero from "@/components/Hero";
import MedicineList from "@/components/MedicineList";
import MedicineSIdeBar from "@/components/MedicineSIdeBar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCartPlus } from 'react-icons/fa'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { Button } from "@/components/ui/button";


export default function page() {
  const [medicineInput, setMedicineInput] = useState("")
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    let tp = 0
    for (let item in cartItems) {
      tp += cartItems[item].price
    }
    setTotalPrice(tp)
  }, [cartItems])
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
                  <div className='flex flex-col space-y-4'>
                    {
                      cartItems.map(medicine => 
                          <div key={medicine.id} className="shadow-md p-3 rounded-lg">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                  <h1 className="font-semibold">{medicine.title}</h1>
                                  <p className="text-sm">{medicine.number} Pcs</p>
                                </div>
                                <h1>{medicine.price} BDT</h1>
                              </div>
                          </div>
                        )
                    }
                  <p>-------------------------------------------------------------------</p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">Total : <span>{totalPrice} BDT</span></p>
                    <Button>Complete Payment</Button>
                  </div>
                  </div>
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
