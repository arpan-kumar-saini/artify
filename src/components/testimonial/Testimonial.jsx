import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 bg-[#e6e7ee]  body-font ">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center shadow3 rounded-tr-[30px] rounded-bl-[30px] p-4">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block  " src="/images/logo.jpg" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Working with our UI/UX designer and web developer was an absolute pleasure –
                                                                                                                 their creative flair and technical expertise transformed our arts and crafts
                                                                                                                  marketplace into a visually stunning and user-friendly platform, elevating the 
                                                                                                                  overall user experience and significantly boosting engagement, making buying and 
                                                                                                                  selling art a seamless and enjoyable process</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Arpan Kumar Saini</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UI/UX Designer and Web Developer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center shadow3 rounded-tr-[30px] rounded-bl-[30px] p-4">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/images/prachi.jpg" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Exceptional sketch artist! I recently purchased a stunning piece from this talented individual on the website, 
                                                                                                                and the level of detail and creativity truly exceeded my expectations. The artist's work not only captured my 
                                                                                                                imagination but also added a unique touch to my art collection. The transaction was smooth, and I appreciate
                                                                                                                 the artist's dedication to their craft. Looking forward to exploring more masterpieces and supporting their 
                                                                                                                 artistry on this fantastic platform!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Prachi choudhary</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">An Sketch Artist </p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center shadow3 rounded-tr-[30px] rounded-bl-[30px] p-4">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/images/sumanshi.jpg" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">An artisan's haven! This website seamlessly connects creators and collectors, 
                                                                                                                offering a delightful marketplace for buying and selling arts and crafts.
                                                                                                                With its user-friendly interface and a vast array of unique pieces, 
                                                                                                                it's a treasure trove for anyone seeking to adorn their space with handcrafted beauty</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Sumanshi Roy</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Web Develper</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial