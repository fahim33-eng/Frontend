"use client"
import { useRecoilState } from 'recoil'
import { cartItems } from '@/atom/globalVariables'
import { useSearchParams } from 'next/navigation';


export default function page({ params }) {
  const searchParams = useSearchParams(); 
  const query = searchParams.get("cartItems")
  const items = JSON.parse(query)
  console.log(items)
  return (
    <div>
      cart section
    </div>
  )
}
