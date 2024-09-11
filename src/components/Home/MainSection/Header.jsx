import React from 'react';
import {  MdHomeFilled  } from "react-icons/md";
import { FiSearch  } from "react-icons/fi";
function Header() {
    return (
        <section className='pt-2 sticky top-0 bg-black'>
            <header className=' py-2 px-6 flex justify-between rounded-t-lg text-white'>
                
                <div className='flex justify-center items-center text-[1.5rem] bg-[#1E1E1E] rounded-full w-[3rem]  gap-4'>
                    
                    <h1>< MdHomeFilled  className='text-[1.8rem]'/></h1>
                    </div>
                    <section className='flex items-center bg-[#1E1E1E] rounded-full py-2 px-5'>

                    
                    <h1 className='flex gap-5 text-[#858080] cursor-pointer hover:text-white'><FiSearch  className='text-[2rem]'/></h1>
                    <input type="text" className='bg-[#1E1E1E] px-3 placeholder:text-[#858080] placeholder:text-[1.1rem] w-[20rem] border-r-2 border-[#858080]' placeholder='What do you want to play?' />

                    </section>
                

                <div className='flex gap-6'>
                    <button className='text-[#ABABAB] font-bold text-[1.1rem]'>Sign up</button>
                    <button className='border rounded-full py-[.7rem] px-8 bg-white font-bold text-black'>Log in</button>
                </div>



            </header>
        </section>
    );
}

export default Header;
