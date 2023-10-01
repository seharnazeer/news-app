'use client'
import React, { useEffect,useState } from 'react'
import { getData } from '@/lib/api'
import { AllData} from '@/typing'
import { Categories } from '@/lib/constants'
import NewsCard from '@/components/newsCard'
import { usePathname, useSearchParams } from 'next/navigation'
const Page =  () => {
  console.clear();
  const pathname=useSearchParams();
 
  const [data,setData]=useState<AllData>({pagination:{offset:0,count:0,limit:0,total:0},data: []});
  useEffect(()=>{
          const getdata=async()=>{
            const data=await getData({queryparams:{offset:'0',source: 'cnn,bcn',keywords:pathname.get('term')?.toString(),categories:Categories.join(',')},isdynamic:true})
            setData(data);
          }
          getdata();
          console.warn(()=>{
            
          })
  },[])
  return (
<div className='grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
  {
    data.data.map((elem)=>(
      <NewsCard image={elem.image} title={elem.title} description={elem.description} published_at={elem.published_at} />
    ))
 
  }  
 
</div>
  )
}

export default Page