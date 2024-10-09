import React from 'react'
import LogoSection from '../SideSection/LogoSection'
import LibrarySection from '../SideSection/LibrarySection'
import Header from './Header'
import Footer from './Footer'

function BrowseAll() {
  return (
    <>
      <div className='bg-black min-h-screen flex '>
            <section>
                <LogoSection />
                <LibrarySection />
            </section>

            <section className='w-full pr-2'>
                <Header />
                <section className='bg-[#121212] rounded-md'>
            <div className='flex justify-between px-5'>
                <h1 className='pt-[4rem] pb-5 font-bold text-[1.5rem] text-white cursor-pointer'>Browse all</h1>
            </div>


            <section className='px-5 text-white flex justify-center items-center'>
                <section className='grid grid-cols-4 gap-6'>
                    
                            <div className='bg-[#b79d9d] w-[16.4rem] h-[9.3rem] rounded-md'>
                                <img src='' alt='music-img' className="w-full h-full object-cover rounded-full" />
                            </div>
                            <div className='bg-[#b79d9d] w-[16.4rem] h-[9.3rem] rounded-md'>
                                <img src='' alt='music-img' className="w-full h-full object-cover rounded-full" />
                            </div>
                            <div className='bg-[#b79d9d]  w-[16.4rem] h-[9.3rem] rounded-md'>
                                <img src='' alt='music-img' className="w-full h-full object-cover rounded-full" />
                            </div>
                            <div className='bg-[#b79d9d] w-[16.4rem] h-[9.3rem] rounded-md'>
                                <img src='' alt='music-img' className="w-full h-full object-cover rounded-full" />
                            </div>
                            <div className='bg-[#b79d9d] w-[16.4rem] h-[9.3rem] rounded-md'>
                                <img src='' alt='music-img' className="w-full h-full object-cover rounded-full" />
                            </div>
                            <div className='bg-[#b79d9d]  w-[16.4rem] h-[9.3rem] rounded-md'>
                                <img src='' alt='music-img' className="w-full h-full object-cover rounded-full" />
                            </div>
                       
                    
                        
                        
                </section>
            </section>
        </section>
                
                
                <Footer />
            </section>


        </div>
    </>
  )
}

export default BrowseAll
