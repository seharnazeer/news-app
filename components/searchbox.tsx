'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const SearchBox = () => {
  const [input, setinput]=useState('');
  const router=useRouter();
  const handleSubmit=(e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if (!input) return;
    router.push(`/search?term=${input}`);

  }
  return (

      <form onSubmit={handleSubmit}  className='grid grid-flow-row md:grid-flow-col md:gap-6 w-full md:w-3/5 items-center justify-center place-items-center md:place-content-between border-gray-200 border-2 rounded p-2 '>
        <div className='flex md:w-auto w-full'>
        <MagnifyingGlassIcon className='w-12 h-8 ' />
        <input placeholder='Search news' onChange={(e)=> setinput(e.target.value)} value={input} className='p-x-4 p-y-2 focus:outline-none border-red-900' />
        </div>
        <button type='submit'  className='bg-red-600 md:pl-4 md:pr-4 w-full rounded h-10 text-white '>Search</button>
        </form>

  )
}

export default SearchBox