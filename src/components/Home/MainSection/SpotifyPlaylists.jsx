import React from 'react'

function SpotifyPlaylists() {
  return (
    <>
      <section className='bg-[#121212]'>
            <div className='flex justify-between px-5'>
                <h1 className='pt-[3rem] font-bold text-[1.5rem] text-white  hover:underline cursor-pointer'>Spotify Playlists</h1>
                <h1 className='pt-[3.6rem] font-bold text-[1rem] text-[#ABABAB]'>Show all</h1>
            </div>

            <section className='px-2 text-white'>
                <section className='flex gap-1'>
                    <div className='hover:bg-[#1E1E1E] hover:transition-transform ease-out duration-100 mt-1 pb-[2rem] w-[11rem] px-4 rounded-md'>
                        <div className='bg-[#b79d9d] my-3 w-[8.7rem] h-[8.5rem] rounded-md'></div>
                        <p className='text-[#ABABAB] font-semibold text-[.86rem]'>With Neha Kakkar,Pritam,KK and</p>
                    </div>
                </section>

            </section>

        </section>
    </>
  )
}

export default SpotifyPlaylists
