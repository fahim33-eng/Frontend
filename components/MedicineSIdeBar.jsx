import React from 'react'

export default function MedicineSIdeBar() {
    const companies = [
        { id: 1, name: "Square Pharmaceuticals Ltd." }, { id: 2, name: "Beximco Pharmaceuticals Ltd." },
        { id: 3, name: "Renata Limited" }, { id: 4, name: "Incepta Pharmaceuticals Ltd." },
        { id: 5, name: "ACI Limited (ACI Pharmaceuticals)" }, { id: 6, name: "Eskayef Pharmaceuticals Ltd." },
        { id: 7, name: "Opsonin Pharma Limited" }, { id: 8, name: "Healthcare Pharmaceuticals Limited" },
        { id: 9, name: "Aristopharma Ltd." }, { id: 10, name: "Drug International Limited" }
      ];
  return (
    <div className='w-96 border-r mx-auto border-r-gray-300 h-screen px-4'>
      <h1 className='text-xl font-semibold'>
        Select Companies
      </h1>
      {
        companies.map(company => <div className='flex space-x-4 p-1' key={company.id}>
            <input type='checkbox' className='cursor-pointer w-4'/>
            <h3 className='text-lg'>{company.name}</h3>
        </div>)
      }
    </div>
  )
}
