import React from 'react'

const NewsCard = ({image,title,description,published_at}: any) => {
  return (
    <div className='flex flex-col h-96 object-contain  rounded-xl border dark:border-gray-300 border-zinc-900 '>
      {  image?
        <img className='w-full h-56 rounded-xl shadow-sm' src={image} />:
        ''}
    <section className='flex p-4 flex-col justify-center'>
        <h4 className=' font-bold text-xl'>{title}</h4>
        <p>{description}</p>
        <p>{published_at}</p>

    </section>

    </div>
  )
}

export default NewsCard