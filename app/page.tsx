'use client'
import Image from 'next/image'
import Header from '@/components/header'
import { getData } from '@/lib/api'
import { useEffect, useState } from 'react'
import { Categories } from '@/lib/constants'
import NewsCard from '@/components/newsCard'
import { Article } from '@/typing'
import { parseCookie } from 'next/dist/compiled/@edge-runtime/cookies'
export default function Home() {
  const [data,setData]=useState<Article[]>([]);
  const getUserData=async()=>{
    const apidata : any=await getData({queryparams:{offset:'0',source: 'cnn,bcn',keywords:'',categories:Categories.join(',')},isdynamic:false})
    setData(apidata);
  }
  useEffect(()=>{ 
    const getdata=async()=>{
   const alldata= await getData({queryparams:{offset:'0',source: 'cnn,bcn',keywords:'',categories:Categories.join(',')},isdynamic:false})
   setData(alldata);
    }
    getdata();
  },[])

  return (
//  <Header />
<div className='grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
  {
    data.map((elem)=>(
      <NewsCard image={elem.image} title={elem.title} description={elem.description} published_at='hsgf7e67eyu' />
    ))
 
  }
 
</div>
  )
}
