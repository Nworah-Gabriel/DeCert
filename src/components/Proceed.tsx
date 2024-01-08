"use client"
import React from 'react'
import Image from 'next/image'

type propTypes = {
    isVisible: boolean;
    onClose: ()=> void;
    // children: React.ReactNode;
}

const Proceed: React.FC<propTypes> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    const handleClose = (event:any) => {
        if(event.target.id === "wrapper") onClose();
    }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id="wrapper" onClick={handleClose}>
        <section className='w-[50%] lg:w-[80%] p-5 bg-white text-black flex flex-col justify-center items-center text-center rounded-lg'>
            <Image src={'/pleased.svg'} alt='...' width={50} height={50} className='mb-2' />
            <h1 className='text-xl font-bold my-5'>YOu are doing well!!!</h1>
            <p>You have successfully signed up with Decertify</p>
            <button className='bg-[#EB1515] text-white p-3 rounded-md mt-3'>Proceed to login</button>
        </section>
    </div>
  )
}

export default Proceed
