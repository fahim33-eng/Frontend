"use client"
import AgoraRTC from 'agora-rtc-sdk-ng'
import React, { useEffect, useState } from 'react'
import VideoPlayer from './VideoPlayer'

export default function VideoRoom() {
    const APP_ID = "5df7d63fb30642108563623d6fbd3969"
    const APP_TOKEN = process.env.NEXT_PUBLIC_APP_TOKEN
    const channel = "channel1"
    const [users, setUsers] = useState([])
    const [localTracks, setLocalTracks] = useState([])
    const client = AgoraRTC.createClient({
        mode : 'rtc',
        codec : 'vp8'
    }) 
    async function handleUserJoined(user, mediaType) {
        await client.subscribe(user, mediaType)
        if(mediaType === 'video') {
            setUsers(prev => [...prev, user])
        }
        if(mediaType === 'audio') {
            user.audioTrack.play()
        }
    }
    function handleUserLeft(user) {
        setUsers(users => users.filter(u => u.uid != user.uid))
    }
    useEffect(() => {
        client.on('user-published', handleUserJoined)
        client.on('user-left', handleUserLeft)

        async function setupLocalTracks() {
            try {
              const uid = await client.join(APP_ID, channel, APP_TOKEN, null);
              let tracks;
      
              try {
                tracks = await AgoraRTC.createMicrophoneAndCameraTracks();
              } catch (e) {
                console.log("Error creating tracks:");
                return;
              }
      
              const [audioTrack, videoTrack] = tracks;
              setLocalTracks(tracks);
              setUsers(prevUsers => [...prevUsers, { uid, videoTrack, audioTrack }]);
              client.publish(tracks);
            } catch (error) {
              console.log("Error:", error);
            }
          }
      
        try {
            setupLocalTracks();
        }
        catch(error) {
            console.log("Add Microphone and Web Cam")
        }
        return () => {
            for(let localTrack of localTracks) {
                localTrack.stop()
                localTrack.close()
            }
            client.off('user-published', handleUserJoined)
            client.off('user-left', handleUserLeft)
            client.unpublish(localTracks).then(() => client.leave())
        }
    }, [])
    return (
        <div className='flex items-center justify-center space-x-4 rounded-md w-96 h-96'>
        {
            users.map(user => <VideoPlayer key={user.uid} user={user} />)
        }
        </div>
    )
}







"use client"
import React, { useEffect, useRef } from 'react'

export default function VideoPlayer({ user }) {
  if(window !== undefined) {
    const userRef = useRef()
    useEffect(() => {
        user?.videoTrack.play(userRef.current)
        user?.audioTrack.play(userRef.current)
    }, [])
  }
  return (
    <div ref={userRef} className='h-full w-full rounded-md'>
        
    </div>
  )
}
