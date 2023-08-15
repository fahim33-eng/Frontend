"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { AiOutlineCheck } from "react-icons/ai"
import { BiSolidUpArrow } from "react-icons/bi"
import { BiSolidDownArrow } from "react-icons/bi"
import { useRouter } from 'next/navigation'

export default function page() {
  const router = useRouter()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [hospitalName, setHospitalName] = useState("")
  const [selectedCity, setSelectedCity] = useState("dhaka")
  const [degrees, setDegrees] = useState("")
  const [description, setDescription] = useState("")
  const [sundayChecked, setSundayChecked] = useState(false);
  const [mondayChecked, setMondayChecked] = useState(false);
  const [tuesdayChecked, setTuesdayChecked] = useState(false);
  const [wednesdayChecked, setWednesdayChecked] = useState(false);
  const [thursdayChecked, setThursdayChecked] = useState(false);
  const [fridayChecked, setFridayChecked] = useState(false);
  const [saturdayChecked, setSaturdayChecked] = useState(false);
  const [sundayOnlineChecked, setSundayOnlineChecked] = useState(false);
  const [mondayOnlineChecked, setMondayOnlineChecked] = useState(false);
  const [tuesdayOnlineChecked, setTuesdayOnlineChecked] = useState(false);
  const [wednesdayOnlineChecked, setWednesdayOnlineChecked] = useState(false);
  const [thursdayOnlineChecked, setThursdayOnlineChecked] = useState(false);
  const [fridayOnlineChecked, setFridayOnlineChecked] = useState(false);
  const [saturdayOnlineChecked, setSaturdayOnlineChecked] = useState(false);
  const [offlineStartingTime, setOfflineStartingTime] = useState(10);
  const [offlineEndingTime, setOfflineEndingTime] = useState(2);
  const [onlineStartingTime, setOnlineStartingTime] = useState(10);
  const [onlineEndingTime, setOnlineEndingTime] = useState(2);
  const [startAMPM, setStartAMPM] = useState("AM");
  const [endAMPM, setEndAMPM] = useState("PM");
  const [startOnlineAMPM, setStartOnlineAMPM] = useState("AM");
  const [endOnlineAMPM, setEndOnlineAMPM] = useState("PM");
  const [image, setImage] = useState(null)

  async function handleSubmit(e) {
    let selectedDays = []
    if (sundayChecked) selectedDates.push("Sunday");
    if (mondayChecked) selectedDates.push("Monday");
    if (tuesdayChecked) selectedDates.push("Tuesday");
    if (wednesdayChecked) selectedDates.push("Wednesday");
    if (thursdayChecked) selectedDates.push("Thursday");
    if (fridayChecked) selectedDates.push("Friday");
    if (saturdayChecked) selectedDates.push("Saturday");

    e.preventDefault()
    const data = {
      firstName,
      lastName,
      email,
      password,
      contactNo : phone,
      place : selectedCity,
      currentHospital : hospitalName,
      degrees : [degrees],
      bio : description,
      availableDays : selectedDays,
      availableTimes : []

    }
    const endpoint = 'http://localhost:8080'
    const response = await fetch(`${endpoint}/doctor_registration`, {
      method: 'POST',
      headers : {'Content-Type': 'application/json'},
      body : JSON.stringify(data)
    })
    
    const ans = await response.json()
    console.log(ans)
  }

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
          <label className="my-4 bg-[#f0f0f0] space-x-4 shadow-md rounded-full px-4 py-2 text-gray-500" htmlFor="city">Which City Do You Practice Currently : </label>
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
        <div className='flex my-4 bg-[#f0f0f0] space-x-4 shadow-md rounded-full px-4 py-2 items-center'>
            <input required className='bg-transparent w-full focus:outline-none' onChange={e => setHospitalName(e.target.value)} type="text" placeholder="Hospital You're currently Working In" value={hospitalName}/>
        </div>
        <div className='flex my-4 bg-[#f0f0f0] space-x-4 shadow-md rounded-full px-4 py-2 items-center'>
            <input className='bg-transparent w-full focus:outline-none' onChange={e => setDegrees(e.target.value)} type="text" placeholder="Your Achieved Degrees" value={degrees}/>
        </div>
        <div className='my-4 h-[4rem] flex-wrap bg-[#f0f0f0] space-x-4 shadow-md rounded-lg px-4 py-2'>
            <input className='bg-transparent h-full w-full overflow-auto text-start focus:outline-none flex-wrap' onChange={e => setDescription(e.target.value)} type="description" placeholder="Tell Us About Yourself and Your Qualities" value={description}/>
        </div>
      </div>
      <div className="p-4 mb-8 bg-[#f0f0f0] items-center rounded-lg">
        <div className="my-4 flex-wrap space-x-4 shadow-md rounded-lg px-4 py-2">
          <h1 className="my-4 text-xl"><span className="font-semibold">On Which Weekdays Are You Planning To See Patients :</span> (You Can Change It Later)</h1>
        </div>
        <div className="space-x-4 flex items-center justify-center">
          <Button className={`${sundayChecked && 'bg-[#1ae034] text-black hover:bg-[#1ae034] hover:text-black'}`} onClick={() => setSundayChecked(!sundayChecked)}>Sunday {sundayChecked && <span className="ml-4"><AiOutlineCheck/></span>}</Button>
          <Button className={`${mondayChecked && 'bg-[#1ae034] text-black hover:bg-[#1ae034] hover:text-black'}`} onClick={() => setMondayChecked(!mondayChecked)}>Monday {mondayChecked && <span className="ml-4"><AiOutlineCheck/></span>}</Button>
          <Button className={`${tuesdayChecked && 'bg-[#1ae034] text-black hover:bg-[#1ae034] hover:text-black'}`} onClick={() => setTuesdayChecked(!tuesdayChecked)}>Tuesday {tuesdayChecked && <span className="ml-4"><AiOutlineCheck/></span>}</Button>
          <Button className={`${wednesdayChecked && 'bg-[#1ae034] text-black hover:bg-[#1ae034] hover:text-black'}`} onClick={() => setWednesdayChecked(!wednesdayChecked)}>Wednesday {wednesdayChecked && <span className="ml-4"><AiOutlineCheck/></span>}</Button>
          <Button className={`${thursdayChecked && 'bg-[#1ae034] text-black hover:bg-[#1ae034] hover:text-black'}`} onClick={() => setThursdayChecked(!thursdayChecked)}>Thursday {thursdayChecked && <span className="ml-4"><AiOutlineCheck/></span>}</Button>
          <Button className={`${fridayChecked && 'bg-[#1ae034] text-black hover:bg-[#1ae034] hover:text-black'}`} onClick={() => setFridayChecked(!fridayChecked)}>Friday {fridayChecked && <span className="ml-4"><AiOutlineCheck/></span>}</Button>
          <Button className={`${saturdayChecked && 'bg-[#1ae034] text-black hover:bg-[#1ae034] hover:text-black'}`} onClick={() => setSaturdayChecked(!saturdayChecked)}>Saturday {saturdayChecked && <span className="ml-4"><AiOutlineCheck/></span>}</Button>
        </div>
        <div className="flex space-x-4 my-8 items-center justify-start">
          <div className="flex space-x-4 items-center"> 
              <h1 className="text-xl font-semibold">Preferred Time Is From : </h1>
              <div className="flex space-x-4 items-center rounded-lg bg-[#249ea7] px-4 py-2">
                <h1 className="text-xl rounded-lg p-1 border border-gray-700 text-white">{offlineStartingTime}</h1>
                <div className="flex flex-col justify-center">
                  <BiSolidUpArrow onClick={() => setOfflineStartingTime(prev => prev < 12 ? prev + 1 : prev)} />
                  <BiSolidDownArrow onClick={() => setOfflineStartingTime(prev => prev > 0 ? prev - 1 : prev)}/>
                </div>
                <Button onClick={() => setStartAMPM(prev => prev == "AM" ? "PM" : "AM")}>{startAMPM}</Button>
              </div>
              <h1 className="font-semibold text-xl">To </h1>
              <div className="flex space-x-4 items-center rounded-lg bg-[#249ea7] px-4 py-2">
                <h1 className="text-xl rounded-lg p-1 border border-gray-700 text-white">{offlineEndingTime}</h1>
                <div className="flex flex-col justify-center">
                  <BiSolidUpArrow onClick={() => setOfflineEndingTime(prev => prev < 12 ? prev + 1 : prev)} />
                  <BiSolidDownArrow onClick={() => setOfflineEndingTime(prev => prev > 0 ? prev - 1 : prev)}/>
                </div>
                <Button onClick={() => setEndAMPM(prev => prev == "AM" ? "PM" : "AM")}>{endAMPM}</Button>
              </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-[#f0f0f0] items-center rounded-lg">
        <div className="my-4 flex-wrap space-x-4 px-4 py-2">
          <h1 className="my-4 text-xl"><span className="font-semibold">On Which Weekdays Are You Planning To See Patients :</span> (You Can Change It Later)</h1>
        </div>
        <div className="space-x-4 flex items-center justify-center">
          <Button className={`${sundayOnlineChecked && 'bg-[#1ae034] text-black hover:bg-[#1ae034] hover:text-black'}`} onClick={() => setSundayOnlineChecked(!sundayOnlineChecked)}>Sunday {sundayOnlineChecked && <span className="ml-4"><AiOutlineCheck/></span>}</Button>
          <Button className={`${mondayOnlineChecked && 'bg-[#1ae034] text-black hover:bg-[#1ae034] hover:text-black'}`} onClick={() => setMondayOnlineChecked(!mondayOnlineChecked)}>Monday {mondayOnlineChecked && <span className="ml-4"><AiOutlineCheck/></span>}</Button>
          <Button className={`${tuesdayOnlineChecked && 'bg-[#1ae034] text-black hover:bg-[#1ae034] hover:text-black'}`} onClick={() => setTuesdayOnlineChecked(!tuesdayOnlineChecked)}>Tuesday {tuesdayOnlineChecked && <span className="ml-4"><AiOutlineCheck/></span>}</Button>
          <Button className={`${wednesdayOnlineChecked && 'bg-[#1ae034] text-black hover:bg-[#1ae034] hover:text-black'}`} onClick={() => setWednesdayOnlineChecked(!wednesdayOnlineChecked)}>Wednesday {wednesdayOnlineChecked && <span className="ml-4"><AiOutlineCheck/></span>}</Button>
          <Button className={`${thursdayOnlineChecked && 'bg-[#1ae034] text-black hover:bg-[#1ae034] hover:text-black'}`} onClick={() => setThursdayOnlineChecked(!thursdayOnlineChecked)}>Thursday {thursdayOnlineChecked && <span className="ml-4"><AiOutlineCheck/></span>}</Button>
          <Button className={`${fridayOnlineChecked && 'bg-[#1ae034] text-black hover:bg-[#1ae034] hover:text-black'}`} onClick={() => setFridayOnlineChecked(!fridayOnlineChecked)}>Friday {fridayOnlineChecked && <span className="ml-4"><AiOutlineCheck/></span>}</Button>
          <Button className={`${saturdayOnlineChecked && 'bg-[#1ae034] text-black hover:bg-[#1ae034] hover:text-black'}`} onClick={() => setSaturdayOnlineChecked(!saturdayOnlineChecked)}>Saturday {saturdayOnlineChecked && <span className="ml-4"><AiOutlineCheck/></span>}</Button>
        </div>
        <div className="flex space-x-4 my-8 items-center justify-start">
          <div className="flex space-x-4 items-center justify-center"> 
              <h1 className="text-xl font-semibold mx-auto">Preferred Time Is From : </h1>
              <div className="flex space-x-4 items-center rounded-lg bg-[#249ea7] px-4 py-2">
                <h1 className="text-xl rounded-lg p-1 border border-gray-700 text-white">{onlineStartingTime}</h1>
                <div className="flex flex-col justify-center">
                  <BiSolidUpArrow onClick={() => setOnlineStartingTime(prev => prev < 12 ? prev + 1 : prev)} />
                  <BiSolidDownArrow onClick={() => setOnlineStartingTime(prev => prev > 0 ? prev - 1 : prev)}/>
                </div>
                <Button onClick={() => setStartOnlineAMPM(prev => prev == "AM" ? "PM" : "AM")}>{startOnlineAMPM}</Button>
              </div>
              <h1 className="font-semibold text-xl">To </h1>
              <div className="flex space-x-4 items-center rounded-lg bg-[#249ea7] px-4 py-2">
                <h1 className="text-xl rounded-lg p-1 border border-gray-700 text-white">{onlineEndingTime}</h1>
                <div className="flex flex-col justify-center">
                  <BiSolidUpArrow onClick={() => setOnlineEndingTime(prev => prev < 12 ? prev + 1 : prev)} />
                  <BiSolidDownArrow onClick={() => setOnlineEndingTime(prev => prev > 0 ? prev - 1 : prev)}/>
                </div>
                <Button onClick={() => setEndOnlineAMPM(prev => prev == "AM" ? "PM" : "AM")}>{endOnlineAMPM}</Button>
              </div>
          </div>
        </div>
      </div>
      <div className='my-4 space-x-4 shadow-md rounded-lg px-4 py-2'>
          <div className="flex justify-between space-x-8">
            <label className="font-semibold" htmlFor="imageInput">Upload Your Image Here :</label>
            <input className='h-full text-start focus:outline-none' onChange={e => setImage(e.target.files[0])} id="imageInput" type="file" placeholder="Upload Your Ambulance Image Here"/>
            </div>
          {image && <h1 className="my-4">Your Chosen Image : <img src={URL.createObjectURL(image)} className="h-16 w-16 rounded-md" alt="Preview" /></h1>}
      </div>
      <button onClick={handleSubmit} className="bg-black mt-4 text-white px-6 py-2 rounded-full shadow-md mx-auto">Submit</button>
      
    </main>
  )
}
