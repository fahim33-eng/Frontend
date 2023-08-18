"use client"
import VideoCall from '@/components/VideoCall';
import { Button } from '@material-ui/core';
import React, { useState } from 'react'

export default function page() {
  const [inCall, setInCall] = useState(false);

  return (
    <div className="h-screen flex items-center w-screen justify-center">
      {inCall ? (
        <VideoCall setInCall={setInCall} />
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setInCall(true)}
          className='text-3xl'
        >
          Join Call
        </Button>
      )}
    </div>
  );
}
