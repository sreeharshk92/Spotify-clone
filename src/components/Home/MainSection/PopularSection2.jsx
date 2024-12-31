import React from 'react'
import albums from '../../SongDetails/albums'

function PopularSection2() {
  return (
    <>
        <section className='bg-[#121212]'>
            <div className='flex justify-between px-5'>
                <h1 className='pt-[3rem] font-bold text-[1.5rem] text-white  hover:underline cursor-pointer'>Popular albums</h1>
                <h1 className='pt-[3.6rem] font-bold text-[1rem] text-[#ABABAB]'>Show all</h1>
            </div>

            <section className='px-2 text-white'>
                <section className='flex gap-4'>
                    {albums.map((albums,index)=> (
 <div key={index} className='hover:bg-[#1E1E1E] hover:transition-transform ease-out duration-100 mt-1 pb-[2rem] px-4 rounded-md'>
 <div className='bg-[#b79d9d] my-3 w-[8.7rem] h-[8.5rem] rounded-md'>
 <img src={albums.image} className="w-full h-full object-cover" />
 </div>
 <h1 className='font-semibold mb-1 w-[8.7rem] hover:underline cursor-pointer'>{albums.name}</h1>
 <h1 className='text-[#ABABAB] font-semibold w-[8.7rem] text-[.86rem] hover:underline cursor-pointer'>{albums.artist}</h1>
</div>


                    ))}
                   
                    
                    

                </section>

            </section>

        </section>
    </>
  )
}

export default PopularSection2
