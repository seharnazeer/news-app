'use client'
import Pagination from "@/components/pagination";
import { AllData, QueryParameters , modifiedParameters } from "@/typing";
import { cache } from "react";

const defaultUrl='http://api.mediastack.com/v1/news?';

export const getData=async ({queryparams,isdynamic}: QueryParameters)=>{
    
    console.log('env',process.env.MEDIA_STACK_API_KEY);
    const newParameters : any={
        access_key: process.env.MEDIA_STACK_API_KEY, ...queryparams,
    }
    const data= await fetch('http://api.mediastack.com/v1/news?'+ new URLSearchParams(newParameters).toString(),

    {
        cache : isdynamic? 'no-cache': 'default',
        next: isdynamic? {revalidate: 0} : {revalidate: 30},
        referrerPolicy: 'unsafe-url'

        
    })
    console.log(data.body);
    const result : AllData=await data.json();
    //sorting data based on their images have or have not
    const withoutImages=result.data.filter((item)=> item.image === null);
    const withImages= result.data.filter((item)=> item.image!==null);
    const newResponse= {data:[...withImages, ...withoutImages], pagination:result.pagination };
    // console.log('alldata',newResponse)
    return newResponse;
}

