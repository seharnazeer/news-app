'use client'
import React from 'react'
import { useTheme } from 'next-themes';
import { MoonIcon } from '@heroicons/react/20/solid';
const Toggle = () => {
    const { theme, setTheme } = useTheme();
    console.log(theme)
  return (
    <div className='place-self-end' onClick={()=> theme=='light'?setTheme('dark'):setTheme('light')}>
    <MoonIcon className='w-8 h-8' />
</div>
  )
}

export default Toggle