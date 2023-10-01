
import { BackwardIcon, ForwardIcon } from '@heroicons/react/20/solid'
import React, { Dispatch, SetStateAction } from 'react'
interface Offset {
    offset: number,
    setoffset: Dispatch<SetStateAction<number>>

}
const Pagination = ({offset,setoffset}: Offset) => {
  return (
    <div className='flex gap-3 justify-end'>
        <div className='flex gap-3 border-slate-400 border-[1px] p-2 rounded-md'>
          <BackwardIcon className='w-6 h-6' onClick={()=>offset==0?setoffset(25):setoffset(offset-1)}/>
      
        <p>{offset}</p>
        <ForwardIcon className='w-6 h-6'  onClick={()=>offset==25?setoffset(0):setoffset(offset+1)} />
        </div>
    </div>
  )
}

export default Pagination