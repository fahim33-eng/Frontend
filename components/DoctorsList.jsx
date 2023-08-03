"use client"
import React, { useEffect, useState } from 'react'
import DoctorCard from './DoctorCard'
export default function DoctorsList() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log(data)
        setLoading(false)
      })
  }, [])
  return (
    <div className='grid grid-cols-4 gap-16 my-10'>
      {data?.map(doctor => <DoctorCard id={doctor.id} rating={5.0} hospital={doctor.address.city} fee={800} name={doctor.name} imageUrl={"/surgeon.jpg"} />)}
    </div>
  )
}
