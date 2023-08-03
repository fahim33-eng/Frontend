import Image from 'next/image'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'

export default function UserCard({ username, text, image}) {
  return (
    <Card key={username} className="flex w-72 flex-col items-center bg-[#3a3d3b]">
        <CardHeader className="flex flex-col">
            <CardTitle className="w-32 flex items-center">
                <Avatar className='flex items-center w-full'>
                    <AvatarImage style={{ width: "100px", height: "100px" }} className='rounded-full mx-auto object-cover' src={image}></AvatarImage>
                </Avatar>
            </CardTitle>
            <CardTitle className="text-white">{username}</CardTitle>   
        </CardHeader>
            <CardDescription>
                <Image src={'/stars.png'} alt='Rating' width={"100"} height={"100"} />
            </CardDescription>
        <CardContent className='w-full'>
            <p className='mx-auto text-center text-white'>{text}</p>
        </CardContent>
    </Card>
  )
}
