import React from 'react';
import { MdHomeFilled } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { PiBrowsersDuotone } from "react-icons/pi";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <section className='pt-2 sticky top-0 bg-black items-center justify-center'>
            <header className=' py-2 px-6 justify-between flex rounded-t-lg text-white'>
<section className='flex gap-2 ml-[7rem]'>


                <div className='flex justify-center items-center text-[1.5rem] bg-[#1E1E1E] rounded-full w-[3rem]  gap-4'>
                    <Link to='/' ><h1>< MdHomeFilled className='text-[1.8rem]' /></h1></Link>
                </div>

                <Link to='/browseall' ><section className='flex items-center bg-[#1E1E1E] rounded-full py-2 px-2 focus-within:border focus-within:border-white z-10'>
                    <h1 className='flex gap-5 text-[#ABABAB] cursor-pointer hover:text-white'><FiSearch className='text-[1.5rem]' /></h1>
                    <input type="text" className='bg-[#1E1E1E] focus:border-[#2A2A2A] focus:outline-none px-3 placeholder:text-[#ABABAB] z-0 placeholder:text-[1rem] w-[25rem] border-r-2 border-[#7c7a7a]' placeholder='What do you want to play?' />
                    <h1 className='text-[1.7rem] px-2'><PiBrowsersDuotone className='text-[#ABABAB]' /></h1>
                </section>
                </Link>
                </section>
                

                <div className='flex gap-6 justify-center items-center'>
                    <Link to='/signup'><button className='text-[#ABABAB] font-bold text-[1.1rem] hover:text-white hover:text-lg'>Sign up</button></Link>
                    <Link to='/login'><button className='border rounded-full py-[.7rem] px-8 bg-white font-bold text-black'>Log in</button></Link>
                </div>



            </header>
        </section>
    );
}

export default Header;
