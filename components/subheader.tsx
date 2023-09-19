
import React from 'react'

const SubHeader = () => {
  return (
   <div className='w-4/5 md:w-3/5'>
    <div className='flex gap-4 justify-around'>
       
       {
        [1,2,3,4,5].map((elem)=>(
            <p className='hover:underline hover:decoration-6 hover:decoration-red-600 font-sans underline-offset-4 cursor-pointer font-bold'>Sports</p>
        ))
       }
      
      

    </div>
    <div className='w-full h-[2px] mt-2 rounded-lg bg-gray-200'>

    </div>

   </div>
  )
}

export default SubHeader