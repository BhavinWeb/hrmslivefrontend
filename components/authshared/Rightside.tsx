import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Rightside = () => {
  return (
    <div className='bg-gradient-to-br from-[#40A2F1] via-[#617BFA] to-[#7366FF] w-[50%] max-w-[800px] p-5 flex flex-col gap-5 rounded-3xl relative'>
            <Image src={'/svg/vector.svg'} alt='vector' width={50} height={50} className='absolute h-full w-[54%] right-0 -mt-5' />
        <div className='flex flex-col gap-3'>
            <h1 className='font-[700] text-[40px] leading-[48px] text-white'>The Simplest way to manage your Work and Time of Employees</h1>
            <h2 className='font-[400] text-[24px] leading-[28.8px] text-white'>Enter your credentials to access your account</h2>
        </div>
        <div className='relative'>
            <Image src={'/image/login1.png'} alt='login' width={637} height={461} className='rounded-sm'/>
            <Image src={'/image/login2.png'} alt='login 2' width={406} height={257} className='absolute rounded-sm top-15 object-cover bg-transparent top-[20rem] right-0' />
        </div>
        <div className='mt-28'>
            <Link href={'https://freshlog.net'} target='_blank' className='flex text-[16px] font-[400] gap-2 bg-white w-fit px-3 py-1 rounded-full'>freshlog.net<Image src={'/svg/arow.svg'} alt='arow' width={10} height={12} /></Link>
        </div>
    </div>
  )
}

export default Rightside