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
export default function CustomHero() {
    const frameworks = [
    {
        value: "saturday",
        label: "Saturday",
    },
    {
        value: "sunday",
        label: "Sunday",
    },
    {
        value: "monday",
        label: "Monday",
    },
    {
        value: "tuesday",
        label: "Tuesday",
    },
    {
        value: "wednesday",
        label: "Wednesday",
    },
    {
        value: "thursday",
        label: "Thursday",
    },
    {
        value: "friday",
        label: "Friday",
    },
    ]
    const frameworks2 = [
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

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const [cityOpen, setCityOpen] = useState(false)
    const [cityValue, setCityValue] = useState("")
  return (
    <div className='flex justify-between items-center px-8 py-4'>
      <div>
        <Link href={'/'} className={`${caveat.className} text-2xl font-bold`} ><h1>HealTechBD</h1></Link>
      </div>
      <div className='flex'>
        <div>
            <Popover open={cityOpen} onOpenChange={setCityOpen}>
            <PopoverTrigger asChild>
                <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between"
                >
                {cityValue
                    ? frameworks2.find((framework) => framework.value == cityValue)?.label
                    : "Any City"}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                <CommandGroup>
                    {frameworks2.map((framework) => (
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
      <div>
        <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
            >
            {value
                ? frameworks.find((framework) => framework.value === value)?.label
                : "Any Day"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
            <Command>
            <CommandGroup>
                {frameworks.map((framework) => (
                <CommandItem
                    key={framework.value}
                    onSelect={(currentValue) => {
                    setValue(currentValue == value ? "" : currentValue)
                    setOpen(false)
                    }}
                >
                    <Check
                    className={cn(
                        "mr-2 h-4 w-4",
                        value == framework.value ? "opacity-100" : "opacity-0"
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
        <BsFilterLeft />
        <Button variant="outline">Filters</Button>
      </div>
      </div>
      <div className='flex cursor-pointer items-center space-x-2'>
          <AiOutlineMenu />
          <RxAvatar />
      </div>
    </div>
  )
}
