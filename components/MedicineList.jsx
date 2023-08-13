"use client"

import React, { useEffect, useState } from 'react'
import MedicineDetail from './MedicineDetail'

export default function MedicineList({ cartItems, setCartItems}) {
   const [data, setData] = useState(null)
   const [isLoading, setLoading] = useState(true)
   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log(data)
        setLoading(false)
      })
  }, [])
  return (
    <div className='flex-1 p-3'>
      {
        data?.map(medicine => <MedicineDetail cartItems = {cartItems} setCartItems = {setCartItems} key={medicine.id} medicineDetail={medicine}/>)}
    </div>
  )
}
