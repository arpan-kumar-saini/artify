import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <>
        <div className='h-[610px] md:h-[630px] w-full bg-[#e6e7ee] pt-[50px] '>
          <div className='h-[490px] md:h-[500px] m-4 md:w-[1400px] shadow3  items-center justify-between md:ml-[60px] rounded-tr-[30px] rounded-bl-[30px]'>
            <div className='h-[1px]'></div>
            <div className=' h-[450px] md:h-[460px]  mt-[20px]  mx-4 md:w-[1365px] shadow2  rounded-tr-[30px] rounded-bl-[30px]'  >
              <div className='h-[1px]'></div>
              <div className='h-[430px] md:h-[440px] mt-[10px] w-[310px]  ml-[10px] md:w-[1340px] md:ml-[10px] md:mt-[10px] shadow3 rounded-tr-[30px] rounded-bl-[30px]'>
                <div className='h-[1px]'></div>
                <div className='md:flex flex-wrap h-[360px]'> 
                  
                    <div className='w-auto h-10'>
                      <div className='text-gray-400 font-semibold text-xl ml-24 md:ml-[120px] mt-[50px] '>W<span className='text-gray-400'>elcome</span> T<span className='text-gray-400'>o</span></div>
                      <div className='text-[#2d4cc8] font-bold text-5xl md:text-7xl ml-[70px] mt-4 md:mt-8 '>A<span className='text-[#a91e2c]'>R<span className='text-[#18634b]'>T</span><span className='text-[#31344b]'>IFY</span></span></div>
                      <div className='text-gray-400 font-semibold text-sm ml-4  mt-2 md:pr-10 '>Transforming blank walls into a masterpiece marketplace 
                      <br/><div className='text-[#18634b] text-sm mt-4'> Because your space deserves a splash of art, not just a dash of color!</div></div>
                      <div>
                        <Link to={'/allproducts'}>
                        <button className='shadow2   text-[#a91e2c] px-1 rounded-[5px] ml-32 mt-4 md:ml-[180px] md:mt-10' >Explore</button>
                        </Link>
                        
                      </div>
                    </div>
                    <img src="/images/hero1.png" className='md:h-[400px] w-auto md:ml-[400px]  mt-[200px]   md:mt-[10px]' alt="" />
                  
                  
                 
                </div>               
              </div>          
            </div>
          </div>
        </div>
    </>
  )
}

export default HeroSection