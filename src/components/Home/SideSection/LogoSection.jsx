import React from 'react'
import { BiLogoSpotify } from "react-icons/bi";
import {  MdHomeFilled  } from "react-icons/md";
import { FiSearch  } from "react-icons/fi";

function LogoSection() {
    return (
        <>
            <section className='p-2 sticky top-0'>
                <header className='bg-[#121212] w-[22rem] text-white rounded-lg '>
                    <div className='p-5 flex flex-col gap-4 font-bold'>
                    <h1 className='flex  cursor-pointer'><BiLogoSpotify className='text-[1.8rem] '/>Spotify</h1>
                    <h1 className='flex gap-4  cursor-pointer'>< MdHomeFilled  className='text-[1.8rem]'/>Home</h1>
                    <h1 className='flex gap-5 text-[#ABABAB] cursor-pointer hover:text-white'><FiSearch  className='text-[1.6rem]'/>Search</h1>
                </div>
                </header>
            </section>
        </>
    )
}

export default LogoSection
