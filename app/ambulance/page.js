"use client"
import CustomHeroForDiagnosis from "@/components/CustomHeroForDiagnosis";
import DiagnosisList from "@/components/DiagnosisList";
import Hero from "@/components/Hero";
import SideBar from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function page() {
  return (
    <main className="">
      <nav className="bg-white">
        <Hero />
      </nav>
      <CustomHeroForDiagnosis placeholderText="Search for Ambulance Provider"/>
      <div className="flex mt-8">
        <SideBar />
        <DiagnosisList />
      </div>
    </main>
  )
}
