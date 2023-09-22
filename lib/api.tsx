import { AllData, QueryParameters , modifiedParameters } from "@/typing";
import { cache } from "react";

const defaultUrl='http://api.mediastack.com/v1/news?';

export const getData=async ({queryparams,isdynamic}: QueryParameters)=>{
    console.log('env',process.env.MEDIA_STACK_API_KEY);
    const newParameters : any={
        access_key: process.env.MEDIA_STACK_API_KEY, ...queryparams,
    }
    const data= await fetch(defaultUrl+ new URLSearchParams(newParameters),
    {
        cache : isdynamic? 'no-cache': 'default',
        next: isdynamic? {revalidate: 0} : {revalidate: 30},
    
    })
    const result : AllData=await data.json();
    //sorting data based on their images have or have not
    const withoutImages=result.data.filter((item)=> item.image === null);
    const withImages= result.data.filter((item)=> item.image!==null);
    const newResponse= [...withImages, ...withoutImages];
    console.log('alldata',newResponse)
    return newResponse;
}