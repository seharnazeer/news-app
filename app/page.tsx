'use client'

import { getData } from '@/lib/api'
import { useEffect, useState } from 'react'
import { Categories } from '@/lib/constants'
import NewsCard from '@/components/newsCard'
import { AllData, Article } from '@/typing'

import Pagination from '@/components/pagination'
export default function Home() {
  console.clear();
  const [data,setData]=useState<AllData>({pagination:{offset:0,count:0,limit:0,total:0},data: []});
  const [offset,setoffset]=useState(0);
  useEffect(()=>{ 
    const getdata=async()=>{
   const alldata= await getData({queryparams:{offset:offset.toString(),source: 'cnn,bcn',keywords:'',categories:Categories.join(',')},isdynamic:false})
   setData(alldata);
    }
    getdata();
  },[offset])

  return (
//  <Header />
<section className='flex flex-col'>
<div className='grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full'>
  {
    data.data.map((elem,index)=>(
      <NewsCard key={index} image={elem.image} title={elem.title} description={elem.description} published_at={elem.published_at} />
    ))
 
  }
 </div>
 <Pagination offset={offset} setoffset={setoffset} />
</section>
  )
}
