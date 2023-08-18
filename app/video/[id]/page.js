"use client"
import VideoCall from '@/components/VideoCall';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'

export default function page() {
  const [inCall, setInCall] = useState(false);

  return (
    <div className="h-screen flex items-center w-screen justify-center">
      {inCall ? (
        <VideoCall setInCall={setInCall} />
      ) : (
        <Button
          onClick={() => setInCall(true)}
          className='text-3xl bg-black rounded-full'
        >
          Join Call
        </Button>
      )}
    </div>
  );
}
