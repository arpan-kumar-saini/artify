import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/herosection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productcard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'

function Home() {  
  return (
    <Layout>
      <HeroSection/>      
      <ProductCard/>
      <Track/>
      <Testimonial/>
    </Layout>
  )
}

export default Home