"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function page() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [selectedCity, setSelectedCity] = useState("dhaka")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null)
  return (
    <main className="min h-screen overflow-y-scroll p-8 flex flex-col items-center bg-gradient-to-r from-[#40a1ce] to-[#bfecfa]">
      <h1 className="font-semibold text-2xl">Register Your Profile</h1>
      <p className="my-2 text-xl">Please Fill Up All The Required Details Carefully</p>
      <p>----------------------------------------------------------------------------------------------------------------------------------------------------</p>
      <div>
        <div className="flex mt-8 space-x-8 my-4">
          <div className='flex bg-[#f0f0f0] space-x-4 shadow-md rounded-full px-4 py-2 items-center'>
              <input required className='bg-transparent focus:outline-none' onChange={e => setFirstName(e.target.value)} type="text" placeholder="First Name" value={firstName}/>
          </div>
          <div className='flex bg-[#f0f0f0] space-x-4 shadow-md rounded-full px-4 py-2 items-center'>
              <input required className='bg-transparent focus:outline-none' onChange={e => setLastName(e.target.value)} type="text" placeholder="Last Name" value={lastName}/>
          </div>
        </div>
        <div className='flex bg-[#f0f0f0] space-x-4 shadow-md rounded-full px-4 py-2 items-center'>
            <input required className='bg-transparent w-full focus:outline-none' onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" value={email}/>
        </div>
        <div className='flex my-4 bg-[#f0f0f0] space-x-4 shadow-md rounded-full px-4 py-2 items-center'>
            <input required className='bg-transparent w-full focus:outline-none' onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" value={password}/>
        </div>
        <div className='flex my-4 bg-[#f0f0f0] space-x-4 shadow-md rounded-full px-4 py-2 items-center'>
            <input required className='bg-transparent w-full focus:outline-none' onChange={e => setPhone(e.target.value)} type="phone" placeholder="Contact Number" value={phone}/>
        </div>

        <div className="space-x-4">
          <label className="my-4 bg-[#f0f0f0] space-x-4 shadow-md rounded-full px-4 py-2 text-gray-500" htmlFor="city">Which City Your Pharmacy is Situated : </label>
          <select id="city" value={selectedCity} onChange={e => setSelectedCity(e.target.value)} className="focus:outline-none text-start items-start px-6 py-2 rounded-full" name="city">
            <option value="dhaka">Dhaka</option>
            <option value="chittagong">Chittagong</option>
            <option value="khulna">Khulna</option>
            <option value="rajshahi">Rajshahi</option>
            <option value="sylhet">Sylhet</option>
            <option value="barisal">Barisal</option>
            <option value="rangpur">Rangpur</option>
            <option value="comilla">Comilla</option>
            <option value="mymensingh">Mymensingh</option>
            <option value="coxsbazar">Cox's Bazar</option>
            <option value="khagrachari">Khagrachari</option>
            <option value="bogra">Bogra</option>
            <option value="savar">Savar</option>
            <option value="narayanganj">Narayanganj</option>
            <option value="rangamati">Rangamati</option>
            <option value="jamalpur">Jamalpur</option>
            <option value="barishal">Barishal</option>
            <option value="feni">Feni</option>
            <option value="jessore">Jessore</option>
            <option value="munshiganj">Munshiganj</option>
          </select>
        </div>
        <div className='my-4 h-[4rem] flex-wrap bg-[#f0f0f0] space-x-4 shadow-md rounded-lg px-4 py-2'>
            <input className='bg-transparent h-full w-full overflow-auto text-start focus:outline-none flex-wrap' onChange={e => setDescription(e.target.value)} type="description" placeholder="Tell Us A Little Bit About Your Pharmacy" value={description}/>
        </div>
      </div>
      <div className='my-4 space-x-4 shadow-md rounded-lg px-4 py-2'>
          <div className="flex justify-between space-x-8">
            <label className="font-semibold" htmlFor="imageInput">Upload Your Pharmacy's Image Here :</label>
            <input className='h-full text-start focus:outline-none' onChange={e => setImage(e.target.files[0])} id="imageInput" type="file" placeholder="Upload Your Ambulance Image Here"/>
            </div>
          {image && <h1 className="my-4">Your Chosen Image : <img src={URL.createObjectURL(image)} className="h-16 w-16 rounded-md" alt="Preview" /></h1>}
      </div>
      <Link href={"/professional_registration"}><Button className="text-2xl my-8 px-4 py-2 rounded-full">Submit</Button></Link>
    </main>
  )
}
