import { FunnelIcon } from '@heroicons/react/16/solid'
import React from 'react'

const SpentByCategory = () => {
  return (
    <div className='pt-4 p-2 w-full'>
        <header>
            <p className='text-xl'>Top Categories</p>
        </header>
        <div className='p-2 grid grid-cols-3 gap-3 mt-4'>
            <span className='flex items-center justify-center'>
                <FunnelIcon height={40} width={40}/>
            </span>
            <span className='flex items-center justify-center'>
                <FunnelIcon height={40} width={40}/>
            </span>
            <span className='flex items-center justify-center'>
                <FunnelIcon height={40} width={40}/>
            </span>
        </div>
    </div>
  )
}

export default SpentByCategory