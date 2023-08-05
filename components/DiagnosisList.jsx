"use client"
import React, { useEffect, useState } from 'react'
import DiagnosisContent from './DiagnosisContent'

export default function DiagnosisList() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log(data)
        setLoading(false)
      })
  }, [])
  return (
    <div className='flex-1'>
      {data?.map(diagnosis => <DiagnosisContent diagnosisContent={diagnosis} key={diagnosis.id}/>)}
    </div>
  )
}
