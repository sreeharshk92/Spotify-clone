import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Header() {
    return (
        <section className='pt-2 sticky top-0 bg-black'>
            <header className='bg-[#121212] py-2 px-6 flex justify-between rounded-t-lg text-white'>
                <div className='flex justify-center items-center text-[1.5rem] text-[#ABABAB] gap-4'>
                    <IoIosArrowBack className='bg-black rounded-full'/>
                    <IoIosArrowForward className='bg-black rounded-full' />
                </div>

                <div className='flex gap-6'>

                    <button className='text-[#ABABAB] font-bold text-[1.1rem]'>Sign up</button>
                    <button className='border rounded-full py-[.7rem] px-8 bg-white font-bold text-black'>Log in</button>
                </div>



            </header>
        </section>
    );
}

export default Header;
