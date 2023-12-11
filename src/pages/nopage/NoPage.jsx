import React from 'react'
import { Link } from 'react-router-dom'

function NoPage() {
  return (
    <>
    <div className='bg-[#e6e7ee] h-screen'>
    <img src="/images/errorpage2.png"  className='md:ml-[500px]' alt="" />
    <div className='h-24 md:h-0'></div>
     <Link to={'/'} > 
     
      <span className=' text-5xl  md:text-7xl font-bold text-[#31344b] h-11  ml-28 mt-24 md:ml-[700px] shadow1 rounded-[25px] px-4 py-2  '>Back</span></Link>

    </div>
     
    </>
 
  )
}

export default NoPage