"use client"
import CustomHero from "@/components/CustomHero";
import CustomHeroForDiagnosis from "@/components/CustomHeroForDiagnosis";
import DiagnosisList from "@/components/DiagnosisList";
import Hero from "@/components/Hero";
import SideBar from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function page() {
  const tests = [
    "Blood Glucose", "LFT", "KFT", "Thyroid", "Lipid Profile",
    "ECG", "X-rays", "Ultrasound", "Mammogram", "Colonoscopy", "Endoscopy",
    "Pap Smear", "PSA Test", "DEXA Scan", "Allergy Testing", "MRI",
    "CT Scan", "GI Endoscopy", "Cardiac Stress Test"
  ];
  
  return (
    <main className="">
      <nav className="bg-white">
        <Hero />
      </nav>
      <CustomHeroForDiagnosis />
      <div>
        <h1 className="mt-8 px-8 text-2xl">Here are some tests that users frequently search for :</h1>
      </div>
      <div className="space-x-4 space-y-2 mt-2 flex px-8 flex-wrap items-center">
        {
          tests.map(test => <Button className="rounded-full bg-[#2699b6]" key={Math.ceil(Math.random() * 10000)}>{test}</Button>)
        }
      </div>
      <div className="flex mt-8">
        <SideBar />
        <DiagnosisList />
      </div>
    </main>
  )
}
