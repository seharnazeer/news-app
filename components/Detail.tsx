
import React from 'react'
import moment from 'moment'
import { Details } from '@/typing'

const Detail = ({image,title,description,published_at}:Details) => {
  return (
    <section className='grid md:grid-flow-col relative top-auto justify-center place-items-center grid-flow-row  p-8 gap-6 rounded-xl shadow-2xl bg-gray-100 dark:bg-zinc-900'>
    {  image?
 <img className='w-full h-56 object-center rounded-xl shadow-sm' src={image} />:
 ''}
 <div className='flex flex-col'>
  <h4 className=' font-bold text-lg'>{title}</h4>
  <p className='text-[12px]'>{description}</p>
  <p className='justify-self-end text-gray-800 dark:text-gray-100'>{moment(published_at).fromNow().toString()}</p>
  </div>

    </section>
  )
}

export default Detail