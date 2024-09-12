import React from 'react'
import { BiLogoSpotify } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


function SignUp() {
    return (
        <>
            <main className='py-8 bg-[#121212] flex justify-center items-center'>
                <form className='text-white flex flex-col gap-3'>
                    <h1 className=' text-[3rem] flex justify-center'><BiLogoSpotify /></h1>
                    <h1 className='text-[3rem] font-bold text-center'>Sign up to</h1>
                    <h1 className='text-[3rem] font-bold  text-center'>start listening</h1>
                    
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-start font-bold text-sm'>Email address</h1>
                        <input type="text" placeholder='name@domain.com' className='p-3 w-full rounded-md bg-black border-[#7c7070] border-2' />

                    </div>

                    <p className='text-[#1ED760] text-sm font-semibold underline'>Use phone number instead.</p>

                    <button className='py-3 my-3 rounded-full bg-[#1ED760] text-black font-bold'>Next</button>
<div className='flex'>
<hr className='bg-[#7c7070] w-1/2 mt-3' />
<div className=' rounded-full w-9 h-6 text-center '>
<span className='text-center'>or</span>

</div>
<hr className='bg-[#7c7070] w-1/2 mt-3' />
</div>



                    
                    <div className='border-2 rounded-full p-3 gap-[5rem] flex items-center border-slate-500'>
                        <FcGoogle className='text-[1.5rem]'/><h1 className='font-bold text-center'>Sign up with Google</h1>
                    </div>
                    <div className='border-2 rounded-full p-3 gap-[5rem] flex items-center border-slate-500 text-center'>
                    <FaFacebookF className='text-[1.5rem] bg-[#1877F2] border-[.1rem] border-[#1877F2] rounded-full'/><h1 className='font-bold'>Sign up with Facebook</h1>
                    </div>
                    <div className='border-2 rounded-full p-3 gap-[5rem] flex items-center border-slate-500 text-center'>
                    <FaApple className='text-[1.5rem] '/><h1 className='font-bold'>Sign up with Apple</h1>
                    </div>

                    <hr className='my-5' />

                    <p className='font-semibold text-center text-[#d1c1c1]'>Already have an account? <span className='underline text-white'>Log in here.</span></p>
                    <div className='w-[23rem] text-[.8rem] text-[#d1c1c1] '>
                        <p className='text-center'>This site is protected by reCAPTCHA and the Google</p>
                        <p className='text-center'>  <span className='underline'>Privacy Policy.</span> and <span className='underline'>Terms of Service apply.</span></p>
                    </div>

                </form>


            </main>
        </>
    )
}

export default SignUp
