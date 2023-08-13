"use client"
import UserEventCard from "@/components/UserEventCard"

export default function page() {
  const data = [
    {
        id : 1,
        type : 1,
        d_name : "John Smith",
        complete : false,
        time : new Date(2023, 7, 12, 23, 33).getTime(),

    },
    {
        id : 2,
        d_name : "John Smith",
        complete : false,
        time : new Date(2023, 7, 9, 22, 33).getTime(),
    }
  ]
  

  return (
    <div className="grid grid-cols-2 gap-16 my-10">
      {
        data.map(userEvent => <UserEventCard userEvent={userEvent} />)
      }
    </div>
  )
}
