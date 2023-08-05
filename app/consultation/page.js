"use client"
import CustomHero from "@/components/CustomHero";
import DoctorsList from "@/components/DoctorsList";
import SpecialistCarousel from "@/components/SpecialistCarousel";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function page() {
  const [doctorName, setDoctorName] = useState("")

  return (
    <main className="flex flex-col justify-center items-center w-full">
      <nav>
        <CustomHero />
        <SpecialistCarousel />
      </nav>
      <div className="flex w-full justify-center items-center space-x-4">
        <input className="py-4 px-12 w-[640px] focus:outline-none border border-1 border-gray-600 rounded-full" type="text" onChange={e => setDoctorName(e.target.value)} placeholder="Search for your favorite doctor here" value={doctorName} />
        <Button variant="default" className="rounded-full">Search</Button>
      </div>
      <div>
        <DoctorsList />
      </div>
    </main>
  )
}
