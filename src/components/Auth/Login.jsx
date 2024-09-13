import React from 'react'
import { BiLogoSpotify } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <main className='bg-gradient-to-b from-[#292929] to-[#0A0A0A] flex flex-col justify-center items-center pt-[2rem]'>
                <form action="" className='flex flex-col gap-3 text-white bg-[#121212] py-5 px-[13rem] rounded-lg'>
                    <h1 className=' text-[3rem] flex justify-center'><BiLogoSpotify /></h1>
                    <h1 className='text-[2rem] font-bold text-center'>Login in to Spotify</h1>
<section className='py-3 flex flex-col gap-2'>


                    <div className='border-2 rounded-full py-3 px-[1rem] flex gap-12 border-slate-500'>
                        <FcGoogle className='text-[1.5rem]' /><h1 className='font-bold text-center'>Continue with Google</h1>
                    </div>
                    <div className='border-2 rounded-full py-3 px-[1rem] flex gap-12 border-slate-500'>
                        <FaFacebookF className='text-[1.5rem] bg-[#1877F2] border-[.1rem] border-[#1877F2] rounded-full' /><h1 className='font-bold'>Continue with Facebook</h1>
                    </div>
                    <div className='border-2 rounded-full py-3 px-[1rem] flex gap-12 border-slate-500'>
                        <FaApple className='text-[1.5rem] ' /><h1 className='font-bold'>Continue with Apple</h1>
                    </div>
                    <div className='border-2 rounded-full py-3 px-[1rem] flex justify-center border-slate-500'>
                        <h1 className='font-bold'>Continue with phone number</h1>
                    </div>
                    </section>
                    <hr />

                    <div className='flex flex-col gap-2'>
                        <h1 className='text-start font-bold text-sm'>Email address</h1>
                        <input type="text" placeholder='Email or username' className='p-3 w-full rounded-md bg-black border-[#7c7070] border-2' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-start font-bold text-sm'>Password</h1>
                        <input type="text" placeholder='Password' className='p-3 w-full rounded-md bg-black border-[#7c7070] border-2' />
                    </div>

                    <button className='py-3 my-3 rounded-full bg-[#1ED760] text-black font-bold'>Login</button>

                    <p className='underline text-white text-center py-3'>Forgot your passoword?</p>

                    <p className='font-semibold text-center mb-9 text-[#d1c1c1]'>Dont't have an account? <Link to='/signup'><span className='underline text-white hover:text-[#1ED760]'>Sign up for Spotify.</span></Link></p>

                </form>

                <footer className='bg-[#121212] w-full mt-10'>
                    <p className='text-[.7rem] text-center text-white py-8'>This site is protected by reCAPTCHA and the Google <span className='underline'> Privacy Policy</span> and <span className='underline'>Terms of Service apply.</span></p>

                </footer>



            </main>
        </>
    )
}

export default Login
