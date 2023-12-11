import React from 'react'
import Layout from '../../components/layout/Layout'

import ProductCard2 from '../../components/productcard/ProductCard2'
import Filter from '../../components/filter/Filter'

function AllProducts() {
  return (
   <Layout>
    <Filter/>
    <ProductCard2/>
   </Layout>
  )
}

export default AllProducts