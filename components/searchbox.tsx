import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import React from 'react'

const SearchBox = () => {
  return (
    <div className='grid grid-flow-row md:grid-flow-col md:gap-6 w-4/5 md:w-3/5 items-center place-items-center md:place-content-between border-gray-200 border-2 rounded p-2 '>
        <div className='flex'>
        <MagnifyingGlassIcon className='w-12 h-8 ' />
        <input placeholder='Search news' className='p-x-4 p-y-2 focus:outline-none border-red-900' />
        </div>
        <button className='bg-red-600 w-72 rounded h-10 text-white '>Search</button>
    </div>
  )
}

export default SearchBox