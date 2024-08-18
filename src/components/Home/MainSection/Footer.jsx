import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { PiFacebookLogoFill } from "react-icons/pi";


function Footer() {
  return (
    <>
      <footer className='bg-[#121212] px-5 rounded-b-lg'>
        <section className='flex justify-between'>
          <section className='flex gap-[7rem]'>

          
        <div className='flex flex-col gap-2'>
              <h1 className='pt-[3rem] font-bold text-[1rem] text-white'>Company</h1>
              <h1 className='text-[#ABABAB] hover:text-white hover:underline'>About</h1>
              <h1 className='text-[#ABABAB] hover:text-white hover:underline'>Jobs</h1>
              <h1 className='text-[#ABABAB] hover:text-white hover:underline'>For the record</h1>
            </div>

            <div className=' flex flex-col gap-2'>
              <h1 className='pt-[3rem] font-bold text-[1rem] text-white'>Communities</h1>
              <h1 className='text-[#ABABAB] hover:text-white hover:underline'>For Artists</h1>
              <h1 className='text-[#ABABAB] hover:text-white hover:underline'>Developers</h1>
              <h1 className='text-[#ABABAB] hover:text-white hover:underline'>Advertising</h1>
              <h1 className='text-[#ABABAB] hover:text-white hover:underline'>Inventors</h1>
              <h1 className='text-[#ABABAB] hover:text-white hover:underline'>Vendors</h1>
            </div>
            <div className=' flex flex-col gap-2'>
              <h1 className='pt-[3rem] font-bold text-[1rem] text-white '>Useful links</h1>
              <h1 className='text-[#ABABAB] hover:text-white hover:underline'>Support</h1>
              <h1 className='text-[#ABABAB] hover:text-white hover:underline'>Free Mobile App</h1>
    
            </div>
            <div className=' flex flex-col gap-2'>
              <h1 className='pt-[3rem] font-bold text-[1rem] text-white'>Spotify Plans</h1>
              <h1 className='text-[#ABABAB] hover:text-white hover:underline'>Premium Individual</h1>
              <h1 className='text-[#ABABAB] hover:text-white hover:underline'>Premium Duo</h1>
              <h1 className='text-[#ABABAB] hover:text-white hover:underline'>Premium Family</h1>
              <h1 className='text-[#ABABAB] hover:text-white hover:underline'>Premium Student</h1>
              <h1 className='text-[#ABABAB] hover:text-white hover:underline'>Vendors Free</h1>
            </div>

            </section>

            

            <div className='flex flex-col gap-2 '>
              <h1 className='pt-[3rem] text-[1.2rem] text-white flex gap-4 items-center cursor-pointer'>

                <div className='bg-[#1F1F1F]  p-3 rounded-full'>
                <FaInstagram/>
                </div>

                <div className='bg-[#1F1F1F]  p-3 rounded-full'>
                <FaTwitter/>
                </div>

                <div className='bg-[#1F1F1F]  p-3 rounded-full text-[1.5rem]'>
                <PiFacebookLogoFill/>
                </div>

              </h1>
            </div>
        </section>

        <hr className='mt-10 border-[#383636]' />

        <div className='mb-[5.3rem] py-10'>
        <h1 className='text-[#ABABAB]'>&copy; 2024 Spotify AB</h1>
        </div>


        </footer>

      
          
    </>
  )
}

export default Footer
