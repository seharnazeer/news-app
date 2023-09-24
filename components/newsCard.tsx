import React from 'react'

const NewsCard = ({image,title,description,published_at}: any) => {
  return (
    <div className={`flex flex-col ${image? 'h-92' : 'h-72 justify-center items-center'} w-full rounded-xl border dark:border-gray-300 border-zinc-900 `}>
      {  image?
        <img className='w-full h-56 object-center rounded-xl shadow-sm' src={image} />:
        ''}
    <section className='flex p-4 flex-col justify-center'>
        <h4 className=' font-bold text-sm'>{title}</h4>
        <p className='text-[13px]'>{image?description.substring(0,100):description.substring(0,200)}</p>
        <p className='justify-self-end text-gray-800'>{published_at}</p>

    </section>

    </div>
  )
}

export default NewsCard