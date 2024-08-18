import React from 'react'
import { LuLibrary } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import './LibrarySection.css';

function LibrarySection() {
    return (
        <>
            <section className='px-2 fixed'>
                <div className='bg-[#121212] w-[22rem] text-white rounded-lg '>
                    <div className='p-5 flex justify-between font-bold'>
                        <h1 className='flex gap-3 text-[#ABABAB] hover:text-white cursor-pointer'><LuLibrary className='text-[1.8rem]' />Your Library</h1>
                        <h1 className='flex gap-3 text-[#ABABAB] hover:text-white cursor-pointer'><GoPlus className='text-[1.5rem]' /></h1>
                    </div>

                    <section className='px-2'>
                        <div className="w-[21.3rem] h-[15rem] overflow-hidden bg-[#121212]">
                            <div className=" max-h-[15rem] overflow-y-scroll custom-scrollbar py-5 flex flex-col gap-6 ">
                                <div className='bg-[#1F1F1F]  w-[20.5rem] text-white rounded-lg'>
                                    <div className='py-4 px-4 gap-4 font-bold'>
                                        <h1 className='flex  cursor-pointer'>Create your first playlist</h1>
                                        <p className='font-medium mt-1 text-[.9rem]'>It's easy,we will help you</p>
                                        <button className='rounded-full mt-5 bg-white text-black border py-1 px-4 text-[.8rem]'>Create playlist</button>
                                    </div>
                                </div>

                                <div className='bg-[#1F1F1F] w-[20.5rem] text-white rounded-lg'>
                                    <div className='py-4 px-4 gap-4 font-bold'>
                                        <h1 className='flex  cursor-pointer'>Let's find some podcasts to follow</h1>
                                        <p className='font-medium mt-1 text-[.9rem]'>we'll keep you updated on new episodes</p>
                                        <button className='rounded-full mt-5 bg-white text-black border py-1 px-4 text-[.8rem]'>Browse podcasts</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section className='flex flex-col gap-3 py-[2.1rem] text-[.7rem] px-5 text-[#ABABAB]'>
                        <li className='flex gap-5 '>
                            <a href="">Legal</a>
                            <a href="">Safety&Privacy Center</a>
                            <a href="">Privacy Policy</a>
                        </li>

                        <li className='flex gap-5 '>
                            <a href="">Cookies</a>
                            <a href="">About Ads</a>
                            <a href="">Accessbility</a>
                        </li>

                        <li className='flex gap-5'>
                            <a href="">Cookies</a>
                        </li>
                    </section>
                    <section className='h-[4.5rem] px-5 '>
                        <button className='rounded-full hover:border-white hover:py-[.5rem] hover:px-[.8rem]  border-[#6c6a6a] text-[.9rem] border py-[.4rem] px-[.7rem] font-bold flex gap-1 justify-center items-center '><HiOutlineGlobeAlt className='text-[1.2rem]' />English</button>

                    </section>
                </div>



            </section>


        </>
    )
}

export default LibrarySection
