import React from 'react'

function SIGNUPPAGE() {
  return (
    <div>
      <div className='flex  justify-center items-center bg-slate-800 h-[48.5rem] antialiased'>
        <div className='bg-cyan-100 h-auto w-[43rem] flex flex-col px-10 border rounded-md'>
    
            <h1 className='text-center text-3xl font-semibold p-7'>Create a new account</h1>
            
            <div className='flex justify-between'>
                <section className='flex flex-col'>
                    <label className='font-medium'>First name</label>
                    <input type="text" className='p-1 border rounded-[5px] w-[18rem] hover:border-black'/>
                </section>

                <section className='flex flex-col'>
                    <label className='font-medium'>Last name</label>
                    <input type="text" className=' p-1 border w-[18rem] rounded-[5px] hover:border-black'/>
                </section>
            </div>

            <div className='flex flex-col  justify-between'>
                <section className='flex flex-col'>
                    <label className='font-medium mt-3'>Email</label>
                    <input type="text" className='p-1 border rounded-[5px] hover:border-black '/>
                </section>
            
                <section className='flex flex-col'>
                    <label className='font-medium mt-3'>Phone</label>
                    <input type="text" className='p-1 border rounded-[5px] hover:border-black'/>
                </section>
            </div>

            <div>
                <section className='flex flex-col'>
                    <label className='font-medium mt-3'>Address</label>
                    <textarea name="" className=' border rounded-[5px] hover:border-black'></textarea>
                </section>
            </div>

            <div className='flex justify-between'>
                <section className='flex flex-col'>
                    <label className=' font-medium mt-3'>State</label>
                    <input type="" className='p-1 border rounded-[5px] hover:border-black '/>
                </section>
           
                <section className='flex flex-col mt-3'>
                    <label className='font-medium'>City</label>
                    <input type="text" className=' p-1 border rounded-[5px] hover:border-black'/>
                </section>

                <section className='flex flex-col mt-3'>
                    <label className='font-medium'>Pin</label>
                    <input type="text" className=' p-1 border rounded-[5px] hover:border-black'/>
                </section>
            </div>


            <button className='border rounded-md py-2 m-7 font-medium bg-blue-950 hover:bg-slate-800 text-white hover:transition duration-300 ease-linear' type='submit'>Register</button>

           
            
            
            
        </div>
    </div>
    </div>
  )
}

export default SIGNUPPAGE
