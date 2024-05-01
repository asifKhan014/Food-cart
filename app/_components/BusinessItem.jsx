import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BusinessItem = ({business}) => {
  return (
    <Link 
    href={'/restaurants/'+business?.slug}
    className='hover:border rounded-xl hover:border-primary hover:bg-orange-50 cursor-pointer p-3 '>
      <Image src={business.banner?.url} alt={business.name}
      height={130}
      width={500}
      className='h-[130px] rounded-xl object-cover'
      />
      <div className='mt-2'>
        <h1 className='font-bold'>{business.name}</h1>
        <div className='flex justify-between items-center'>

        <div className='flex gap-2 items-center'>
            <Image src='/star.png' width={13} height={13} alt='Star' />
            <label className='text-gray-400 text-sm'>4.5</label>
            <h2 className='text-gray-400 text-sm'>{business?.restroType[0]}</h2>
        </div>
        <h2 className='text-primary text-sm'>{business.categories[0].name}</h2>
        </div>
      </div>
    </Link>
  )
}

export default BusinessItem
