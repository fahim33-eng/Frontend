"use client"
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function page({ params }) {
 const searchParams = useSearchParams()
 const type = searchParams.get('type')
 const [amount, setAmount] = useState("")
 const [wrongInput, setWrongInput] = useState(false)

  function handleTransaction() {
    let isWrongInput = isNaN(parseInt(amount))
    if(isWrongInput) {
        setWrongInput(true)
    }
    else {
        setWrongInput(false)
    }
  }
  return (
    <div className='flex items-center flex-col w-full my-8'>
        <h1 className='text-center text-4xl'>Complete Your {type} Process Here...</h1>
        <div className="flex items-center my-8">
            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder="Enter Recharge Amount" className="h-[4rem] z-10 overflow-wrap px-8 text-center focus:outline-none text-xl mx-auto placeholder:text-gray-400 border border-gray-500 rounded-full" />
        </div>
        {wrongInput && <p className='my-1 text-sm bg-[#ff6f6f] rounded-md'>Please Provide A Valid Amount</p>}
        <Button onClick={handleTransaction} className="mx-auto my-4 rounded-full text-center">Complete Transaction</Button>
    </div>
  )
}
