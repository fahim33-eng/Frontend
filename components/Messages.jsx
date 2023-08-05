"use client"
import React, { useState } from 'react'
import Message from './Message'

export default function Messages({ messages }) {
  return (
    <div className='px-4 h-[33rem] overflow-auto scrollbar-hide'>
      {
        messages.map(message => <Message sender={message?.owner} messageContent={message?.content} key={message?.id}/>)
      }
    </div>
  )
}
