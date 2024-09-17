import React from 'react'
import { BiLogoSpotify } from "react-icons/bi";



function LogoSection() {
    return (
        <>
            <section className='py-2 sticky top-0'>
                <header className=' w-[22rem] text-white rounded-lg '>
                    <div className='p-1.5 flex flex-col gap-4 font-bold'>
                    <h1 className='flex  cursor-pointer'><BiLogoSpotify className='text-[2.7rem] '/></h1>
                    {/* <h1 className='flex gap-4  cursor-pointer'>< MdHomeFilled  className='text-[1.8rem]'/>Home</h1>
                    <h1 className='flex gap-5 text-[#ABABAB] cursor-pointer hover:text-white'><FiSearch  className='text-[1.6rem]'/>Search</h1> */}
                </div>
                </header>
            </section>
        </>
    )
}

export default LogoSection

