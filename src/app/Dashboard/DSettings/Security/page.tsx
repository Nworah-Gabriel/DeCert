'use client'
import { DSettings } from '@/app/ul/Navs'
// import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const page = () => {
    // const Pathname = usePathname()
    // const [bar, barHandle] = useState<boolean>(true)


  return (
    <div className='bg-[#EDEDED] h-[100vh]'>
        <div className='flex justify-between items-center text-black mx-6 pt-20 lg:pt-5'>
            <div>
                <h1 className='text-3xl font-black pb-2'>Settings</h1>
                <p>Here you can change and edit your informations</p>
            </div>
            <div className='hidden lg:flex pl-12 w-1/3'>
                <button className='w-full mr-3 outline outline-1 outline-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white p-3 rounded-md'>Cancel</button>
                <button className='w-full bg-purple-800 p-3 text-white rounded-md'>Save Changes</button>
            </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row-reverse text-black bg-white p-3 my-3 mx-6 rounded-md lg:h-[82vh]">
            <div className='w-full lg:w-4/5 mx-0 lg:mx-5 pt-3'>
                <h1 className='text-xl font-bold mb-2'>Security Information</h1>
                <p>Here you can change and edit your informatoins</p>
                <h2 className='text-sm font-bold my-5'>View Recovery Phrases</h2>
                <div className='w-full'>
                    <button className='bg-purple-300 text-purple-800 m-1 p-2 rounded-md'>Web3</button>
                    <button className='bg-purple-300 text-purple-800 m-1 p-2 rounded-md'>Bless</button>
                    <button className='bg-purple-300 text-purple-800 m-1 p-2 rounded-md'>Good</button>
                    <button className='bg-purple-300 text-purple-800 m-1 p-2 rounded-md'>Bad</button>
                    <button className='bg-purple-300 text-purple-800 m-1 p-2 rounded-md'>Great</button>
                    <button className='bg-purple-300 text-purple-800 m-1 p-2 rounded-md'>Hackathon</button>
                    <button className='bg-purple-300 text-purple-800 m-1 p-2 rounded-md'>Borderless</button>
                    <button className='bg-purple-300 text-purple-800 m-1 p-2 rounded-md'>Crypto</button>
                    <button className='bg-purple-300 text-purple-800 m-1 p-2 rounded-md'>Smart</button>
                    <button className='bg-purple-300 text-purple-800 m-1 p-2 rounded-md'>World</button>
                    <button className='bg-purple-300 text-purple-800 m-1 p-2 rounded-md'>Ayalabs</button>
                    <button className='bg-purple-300 text-purple-800 m-1 p-2 rounded-md'>Jion</button>
                    <button className='bg-purple-300 text-purple-800 m-1 p-2 rounded-md'>Phrase</button>
                </div>
                <button className='bg-[#EB1515] text-white p-3 rounded-md mt-5'>Delete Account</button>
            </div>
            <div className='flex lg:block m-auto overflow-x-scroll lg:overflow-hidden w-11/12 lg:w-1/4 lg:m-0 border-r-2 border-slate-300 text-sm'>
                {DSettings.map((setings,index) =>{
                    // const active = Pathname === setings.path;

                    return(
                        <div>
                            <div key={index} className='flex flex-row lg:flex-col h-16 lg:h-20 items-center p-2 hover:text-purple-800 font-bold'>
                            <Link href={setings.path} className='flex outline outline-1 outline-slate-100 lg:outline-none hover:bg-purple-300 hover:outline-none p-4 w-56 rounded-md m-0 lg:mx-8'>
                                <span className='mr-2'>{setings.icon}</span>
                                <span className="" >{setings.name}</span>
                            </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default page;