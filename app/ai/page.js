"use client"
import Hero from "@/components/Hero";
import Messages from "@/components/Messages";
import { Button } from "@/components/ui/button";
import { Timer } from "lucide-react";
import { useState } from "react";
import { BsSend } from 'react-icons/bs' 

export default function page() {
  const [messages, setMessages] = useState([])
  const [messageContent, setMessageContent] = useState("")
  const id = new Date().getTime().toString()
  const url = `http://127.0.0.1:8000/?message=${messageContent}`
  async function handleSubmit(e) {
      const newMessage = { id, content: messageContent, owner: "owner" };
      setMessages(prevMessages => [...prevMessages, newMessage])
      const response = await fetch(url, {
        method : "GET"
      })
      if (response.ok) {
        let answer = await response.json()
        setMessageContent("");
        answer = answer["message"]
        setMessages(prevMessages => [...prevMessages, {id, content: answer, owner: "ai"} ])
      } else {
        console.error("Failed to send message");
      }
    }
  
  return (
    <main className="min-h-screen flex flex-col w-full bg-contain bg-gradient-to-r from-[#40a1ce] to-[#bfecfa]">
      <nav className="bg-white"> 
        <Hero />
      </nav>
      <div className="w-full h-full flex items-center justify-center my-auto">
        <div className="w-[64rem] min-h-[90%] h-[38rem] rounded-xl bg-gradient-to-r from-[#4e4e4e] via-[#44444e] to-[#444444]">
          <Messages messages={messages}/>
          <div className="flex w-full justify-center items-center space-x-4">
            <input type="text" value={messageContent} onChange={e => setMessageContent(e.target.value)} placeholder="Enter Your Message Here" className="h-[3rem] z-10 overflow-wrap px-4 w-[80%] focus:outline-none bg-transparent text-white text-xl placeholder:text-gray-400 border border-white rounded-full" />
            <div className="">
              <Button onClick={handleSubmit} className="rounded-full">Send</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
