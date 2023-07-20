"use client"
import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
  export default function AnimatedText({ text }) {
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px)',
      color: '#fff',
    },
    enter : [
      { opacity: .8, height: 60, innerHeight: 60 },
      { transform: 'perspective(600px)', color: '#fff' },
      { transform: 'perspective(600px)' },
    ],
    leave : [{ color: '#fff' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update : { color: '#fff' },
    config : { duration: 1000 },
    reset : true,

  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set([text]), 2000))
  }, [])

  useEffect(() => {
    reset()
    return () => ref.current.forEach(clearTimeout)
  }, [reset])
  

  return (
    <div className='flex items-center justify-center w-full'>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div className="flex items-center justify-center" style={rest}>
            <animated.h1 className="text-center mt-5 h-full text-3xl" style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.h1>
          </animated.div>
        ))}
    </div>
  )
}
