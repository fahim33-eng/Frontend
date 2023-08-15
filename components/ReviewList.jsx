"use client"
import { useEffect, useState } from 'react'
import ReviewCard from './ReviewCard'

export default function ReviewList({ id }) {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
  return (
    <div className='my-8 grid grid-cols-2'>
      {
        data?.map(review => 
            <ReviewCard key={review.id} review={review} />
        )
      }
    </div>
  )
}
