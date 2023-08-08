"use client"
import Hero from "@/components/Hero";
import MedicineList from "@/components/MedicineList";
import MedicineSIdeBar from "@/components/MedicineSIdeBar";
import { useState } from "react";

export default function page() {
  const [medicineInput, setMedicineInput] = useState("")
  return (
    <main>
      <nav className="bg-white">
        <Hero />
      </nav>
      <div className="flex items-center my-4">
        <input type="text" value={medicineInput} onChange={e => setMedicineInput(e.target.value)} placeholder="Enter Your Required Medicine Here" className="h-[4rem] z-10 overflow-wrap px-4 w-[60%] focus:outline-none text-xl mx-auto placeholder:text-gray-400 border border-gray-500 rounded-full" />
      </div>
      <div className="flex mt-8">
        <MedicineSIdeBar />
        <MedicineList />
      </div>
    </main>
  )
}
