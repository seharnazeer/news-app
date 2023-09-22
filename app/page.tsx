'use client'
import Image from 'next/image'
import Header from '@/components/header'
import { getData } from '@/lib/api'
import { useEffect, useState } from 'react'
import { Categories } from '@/lib/constants'
import NewsCard from '@/components/newsCard'
export default function Home() {
  const [data,setData]=useState([]);
  const getUserData=async()=>{
    const apidata : any=await getData({queryparams:{offset:'0',source: 'cnn,bcn',keyword:'',categories:Categories.join(',')},isdynamic:false})
    setData(apidata);
  }
  useEffect(()=>{
   getUserData();

  },[])

  return (
//  <Header />
<div className='grid grid-flow-col grid-cols-3 gap-4'>
  {/* {
    data.map((elem)=>(
      <NewsCard image={elem.image} title={elem.title} description={elem.description} published_at='hsgf7e67eyu' />
    ))
 
  } */}
 
</div>
  )
}
