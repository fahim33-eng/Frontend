import AgoraRTC from 'agora-rtc-sdk-ng'
import React, { useEffect, useState } from 'react'

export default function VideoRoom() {
    const APP_ID = "5df7d63fb30642108563623d6fbd3969"
    const APP_CERTIFICATE = process.env.AGORA_APP_CERTIFICATE
    const APP_TOKEN = "007eJxTYEjk2pgd8frk0trn2uz+1QtqfcJO1Qebbl1cy+WwZH04r4ECg2lKmnmKmXFakrGBmYmRoYGFqZmxmZFxillaUoqxpZllU8HtlIZARoaG6neMjAwQCOJzMCRnJOblpeYYMjAAAFzYH4E="
    console.log(APP_ID)
    const channel = "channel1"
    const [users, setUsers] = useState([])
    const client = AgoraRTC.createClient({
        mode : 'rtc',
        codec : 'vp8'
    }) 
    function handleUserJoined() {

    }
    function handleUserLeft() {
        
    }
    useEffect(() => {
        client.on('user-published', handleUserJoined)
        client.on('user-left', handleUserLeft)
        client.join(APP_ID, channel, APP_TOKEN, null)
            .then(uid => Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(), uid]))
            .then(([tracks, uid]) => {
                const [audioTrack, VideoTrack] = tracks
                setUsers(prevUsers => [...prevUsers, {uid, VideoTrack}])
                client.publish(tracks)
            })
    }, [])
    return (
        <div>
        Video Room
        {
            users.map(user => <div key={user.uid}>{user.uid}</div>)
        }
        </div>
    )
}
