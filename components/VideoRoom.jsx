"use client"
import AgoraRTC from 'agora-rtc-sdk-ng'
import React, { useEffect, useState } from 'react'
import VideoPlayer from './VideoPlayer'

export default function VideoRoom() {
    const APP_ID = "5df7d63fb30642108563623d6fbd3969"
    const APP_TOKEN = "007eJxTYEjk2pgd8frk0trn2uz+1QtqfcJO1Qebbl1cy+WwZH04r4ECg2lKmnmKmXFakrGBmYmRoYGFqZmxmZFxillaUoqxpZllU8HtlIZARoaG6neMjAwQCOJzMCRnJOblpeYYMjAAAFzYH4E="
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
        client.join(APP_ID, channel, APP_TOKEN, null)
            .then(uid => Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(), uid]))
            .then(([tracks, uid]) => {
                const [audioTrack, videoTrack] = tracks
                setLocalTracks(tracks)
                setUsers(prevUsers => [...prevUsers, {uid, videoTrack, audioTrack}])
                client.publish(tracks)
            })
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
        <div className='flex items-center justify-center space-x-4 rounded-md w-72 h-72'>
        {
            users.map(user => <VideoPlayer key={user.uid} user={user} />)
        }
        </div>
    )
}
