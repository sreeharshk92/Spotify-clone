import React from 'react';

function PopularSection() {
    

    return (
        <section className='bg-gradient-to-b from-[#1E1E1E] to-[#121212] rounded-md'>
            <div className='flex justify-between px-5'>
                <h1 className='pt-[3rem] font-bold text-[1.5rem] text-white hover:underline cursor-pointer'>Popular artists</h1>
                <h1 className='pt-[3.6rem] font-bold text-[1rem] text-[#ABABAB]'>Show all</h1>
            </div>

            <section className='px-2 text-white'>
                <section className='flex gap-5'>
                    
                        <div className='hover:bg-[#442424] mt-1 pb-[2rem] px-4 rounded-md'>
                            <div className='bg-[#b79d9d] my-3 w-[8.5rem] h-[8.5rem] rounded-full'>
                                <img src='' alt='artist-img' className="w-full h-full object-cover rounded-full" />
                            </div>
                            <h1 className='font-semibold mb-1'>Artist name</h1>
                            <h1 className='text-[#ABABAB] font-semibold text-[.9rem]'>Artist</h1>
                        </div>
                   
                </section>
            </section>
        </section>
    );
}

export default PopularSection;
