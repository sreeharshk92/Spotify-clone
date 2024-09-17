import React from 'react'
import { Link } from 'react-router-dom'

function BottomBox() {
  return (
    <main className='sticky bottom-0 bg-gradient-to-r from-[#AF2997] flex justify-between p-3 to-[#509AF4] w-full h-auto'>
      <section className='text-white  flex flex-col  gap-2'>
        <h1 className='font-bold'>Preview of Spotify</h1>
        <h1 className='font-medium'>Sign up to get unlimited songs and podcasts with occasional ads. No credit needed.</h1>
        
      </section>
      <Link to='/signup'><button className='rounded-full py-3 px-4 font-bold text-black bg-white hover:bg-[#ded4d4]'>Sign up free</button></Link>
    </main>
  )
}

export default BottomBox
