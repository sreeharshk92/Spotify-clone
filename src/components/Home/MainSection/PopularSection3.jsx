import React from 'react'
import radios from '../../SongDetails/radios';

function PopularSection3() {
  return (
    <>
      <section className='bg-[#121212]'>
            <div className='flex justify-between px-5'>
                <h1 className='pt-[3rem] font-bold text-[1.5rem] text-white  hover:underline cursor-pointer'>Popular radio</h1>
                <h1 className='pt-[3.6rem] font-bold text-[1rem] text-[#ABABAB]'>Show all</h1>
            </div>

            <section className='px-2 text-white'>
                <section className='flex gap-3'>
{radios.map((radios,index)=>(

<div key={index} className='hover:bg-[#1E1E1E] hover:transition-transform ease-out duration-100 mt-1 pb-[2rem] w-[11rem] px-4 rounded-md'>
                        <div className='bg-[#b79d9d] my-3 w-[8.7rem] h-[8.5rem] rounded-md'>
                        <img src={radios.image} alt='artist.jpg' className="w-full h-full object-cover" />

                        </div>
                        <p className='text-[#ABABAB]  font-semibold text-[.86rem] hover:underline cursor-pointer'>{radios.artist}</p>
                    </div>

))}
                    
                </section>

            </section>

        </section>
    </>
  )
}

export default PopularSection3
