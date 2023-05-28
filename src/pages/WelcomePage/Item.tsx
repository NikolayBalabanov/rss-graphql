import React from 'react';
interface Item{
    name: string,
    dev: string,
    img: string
}

export const Item = ({name, dev, img}: Item) => {
  return (
    <div className='flex flex-col items-center'>
        <img src={img} alt="img" className='h-32 w-32 bg-slate-200 rounded-full' />
        <div className='my-4 text-lg text-center'>
            <h5 className='font-bold'>{name}</h5>
            <p className='font-semibold'>{dev}</p>
        </div>
    </div>
  )
}