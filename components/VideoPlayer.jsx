import React, { useEffect, useRef } from 'react'

export default function VideoPlayer({ user }) {
  const userRef = useRef()
    useEffect(() => {
        user?.videoTrack.play(userRef.current)
    }, [])
  return (
    <div ref={userRef} className='h-full w-full rounded-md'>
        
    </div>
  )
}
