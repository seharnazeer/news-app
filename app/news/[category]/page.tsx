'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const Search = () => {
    const pathname=usePathname();
    console.log(pathname.split('/').pop())
  return (
    <div>Search</div>
  )
}

export default Search