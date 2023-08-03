import React from 'react'

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

export default async function DoctorsList() {
  const data = await getData()
  if (data) console.log(data)
  return (
    <div>
      
    </div>
  )
}
