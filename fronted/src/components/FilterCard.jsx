import React from 'react'

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Mumbai", "Pune", "Bangalore", "Hyderabad"]
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
  },
  {
    filterType: "Salary",
    array: ["0-40k", "40k-1lakh", "1-5lakh"]
  }
]

const FilterCard = () => {
  return (

    <div className='w-full bg-white p-4 rounded-md shadow'>
      
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3 mb-3'/>

      {
        filterData.map((data, index) => (
          <div key={index} className='mb-4'>

            <h1 className='font-semibold mb-2'>
              {data.filterType}
            </h1>

            {
              data.array.map((item, i) => (
                <div key={i} className='flex items-center gap-2 mb-1'>
                  
                  <input
                    type="radio"
                    name={data.filterType}
                    value={item}
                    className="cursor-pointer"
                  />

                  <label className='text-sm cursor-pointer'>
                    {item}
                  </label>

                </div>
              ))
            }

          </div>
        ))
      }

    </div>
  )
}

export default FilterCard