"use client"
import { Caveat } from 'next/font/google'
import { BsFilterLeft } from 'react-icons/bs'
import { RxAvatar} from 'react-icons/rx'
import { AiOutlineMenu } from 'react-icons/ai'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'
const caveat = Caveat({ subsets: ['latin'] })
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
  } from "@/components/ui/command"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
export default function CustomHeroForDiagnosis() {
    const SortFramework = [
    {
        value: "sort by price(low to high)",
        label: "Sort By Price(Low To High)",
    },
    {
        value: "sort by price(high to low)",
        label: "Sort By Price(High To Low)",
    },
    {
        value: "sort by user rating",
        label: "Sort By User Rating",
    },
    ]
    const cityFrameWork = [
        {
          value: "dhaka",
          label: "Dhaka",
        },
        {
          value: "chittagong",
          label: "Chittagong",
        },
        {
          value: "khulna",
          label: "Khulna",
        },
        {
          value: "rajshahi",
          label: "Rajshahi",
        },
        {
          value: "sylhet",
          label: "Sylhet",
        },
        {
          value: "barisal",
          label: "Barisal",
        },
        {
          value: "rangpur",
          label: "Rangpur",
        },
        {
          value: "comilla",
          label: "Comilla",
        },
        {
          value: "mymensingh",
          label: "Mymensingh",
        },
        {
          value: "coxsbazar",
          label: "Cox's Bazar",
        },
        {
          value: "khagrachari",
          label: "Khagrachari",
        },
        {
          value: "bogra",
          label: "Bogra",
        },
        {
          value: "savar",
          label: "Savar",
        },
        {
          value: "narayanganj",
          label: "Narayanganj",
        },
        {
          value: "rangamati",
          label: "Rangamati",
        },
        {
          value: "jamalpur",
          label: "Jamalpur",
        },
        {
          value: "barishal",
          label: "Barishal",
        },
        {
          value: "feni",
          label: "Feni",
        },
        {
          value: "jessore",
          label: "Jessore",
        },
        {
          value: "munshiganj",
          label: "Munshiganj",
        },
      ];

    const [sortOpen, setSortOpen] = useState(false)
    const [sortValue, setSortValue] = useState("")
    const [cityOpen, setCityOpen] = useState(false)
    const [cityValue, setCityValue] = useState("")
    const [diagnosisInput, setDiagnosisInput] = useState("")
    console.log(sortValue)
  return (
    <div className='flex items-center justify-center px-8 py-4 space-x-32'>
        <div>
            <Popover open={cityOpen} onOpenChange={setCityOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" className="outline rounded-full outline-1 outline-slate-500 w-64 flex justify-between items-center px-8">
                {cityValue
                    ? cityFrameWork.find((framework) => framework.value == cityValue)?.label
                    : "Any City"}
                 <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-0 overflow-scroll">
                <Command className="overflow-auto">
                <CommandGroup className="overflow-auto">
                    {cityFrameWork.map((framework) => (
                    <CommandItem
                        key={framework.value}
                        onSelect={(currentValue) => {
                        setCityValue(currentValue == cityValue ? "" : currentValue)
                        setCityOpen(false)
                        }}
                    >
                        <Check
                        className={cn(
                            "mr-2 h-4 w-4",
                            cityValue == framework.value ? "opacity-100" : "opacity-0"
                        )}
                        />
                        {framework.label}
                    </CommandItem>
                    ))}
                </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
      </div>
      <div className=''>
        <Popover open={sortOpen} className='w-64' onOpenChange={setSortOpen}>
        <PopoverTrigger asChild>
            <Button variant="outline" className="outline rounded-full outline-1 outline-slate-500 w-80 flex justify-between items-center px-8">
            {sortValue
                ? SortFramework.find((framework) => framework.value === sortValue)?.label
                : "Sort By"}
                 <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-0">
            <Command>
            <CommandGroup>
                {SortFramework.map((framework) => (
                <CommandItem
                    key={framework.value}
                    onSelect={(currentValue) => {
                    setSortValue(currentValue == sortValue ? "" : currentValue)
                    setSortOpen(false)
                    }}
                >
                    <Check
                    className={cn(
                        "mr-2 h-4 w-4",
                        sortValue == framework.value ? "opacity-100" : "opacity-0"
                    )}
                    />
                    {framework.label}
                </CommandItem>
                ))}
            </CommandGroup>
            </Command>
        </PopoverContent>
        </Popover>
      </div>
      <div className='flex space-x-2 items-center'>
        <input type="text" value={diagnosisInput} onChange={e => setDiagnosisInput(e.target.value)} placeholder="Search For Diagnosis Type Here" className="h-[3rem] z-10 overflow-wrap px-4 w-80 focus:outline-none bg-white text-black placeholder:text-gray-400 border border-gray-300 rounded-full" />
        <Button className="rounded-full bg-[#2699b6]">Search</Button>
      </div>
    </div>
  )
}
