'use client'
import React from 'react'
import { Categories } from '@/lib/constants'
import Link from 'next/link'
import {usePathname} from 'next/navigation';
const SubHeader = () => {
    const pathname=usePathname();
  return (
   <div className='w-4/5 md:w-3/5'>
    <div className='flex gap-4 justify-around'>
       
       {
        Categories.map((category)=>(
            <Link href={`news/${category}`}  className={`${pathname.split('/').pop()  === category ? ' underline decoration-6 decoration-red-600 underline-offset-4' : '' } font-sans cursor-pointer hover:underline hover:decoration-6 hover:decoration-red-600 underline-offset-4`}>{category}</Link>
        ))
       }
      
      

    </div>
    <div className='w-full h-[2px] mt-2 rounded-lg bg-gray-200'>

    </div>

   </div>
  )
}

export default SubHeader