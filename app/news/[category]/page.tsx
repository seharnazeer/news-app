'use client'
import NewsCard from '@/components/newsCard';
import { getData } from '@/lib/api';
import { AllData, Article } from '@/typing';
import { usePathname } from 'next/navigation'
import React,{useEffect,useState} from 'react'

const Search =  () => {
  console.clear();
    const pathname=usePathname();
    console.log(pathname.split('/').pop())

     
  const [data,setData]=useState<AllData>({pagination:{offset:0,count:0,limit:0,total:0},data: []});
  useEffect(()=>{
          const getdata=async()=>{
            const data=await getData({queryparams:{offset:'0',source: 'cnn,bcn',keywords:'',categories:pathname.split('/').pop()},isdynamic:true})
            setData(data);
          }
          getdata();
  },[])
    return (
  <div className='grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
    {
      data.data.map((elem,index)=>(
        <NewsCard key={index} image={elem.image} title={elem.title} description={elem.description} published_at={elem.published_at} />
      ))
   
    }
   
  </div>
    )
}

export default Search