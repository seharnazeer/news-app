import { Bars3Icon, MoonIcon } from '@heroicons/react/20/solid'
import React from 'react'
import SubHeader from './subheader'
const Header = () => {
  return (
    <section className='md:p-10 p-6 w-full gap-6 flex flex-col items-center'>
    <header className='grid grid-flow-col   w-full'>
        <div>
            <Bars3Icon className='w-8 h-8' />
        </div>
        <div className='place-self-center text-center'>
            <p className=' md:text-2xl text-xl font-serif'>The <span className=' underline decoration-6 underline-offset-2 decoration-red-600'>EVERYWHERE</span></p>
        </div>
        <div className='place-self-end'>
            <MoonIcon className='w-8 h-8' />
        </div>
    </header>
    <SubHeader />
    </section>
  )
}

export default Header