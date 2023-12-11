import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from "./context/data/myState";
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/pages/AddProduct';
import UpdateProduct from './pages/admin/pages/UpdateProduct';
import AllProducts from './pages/allproducts/AllProducts';


function App() {
  return (
    <MyState>
         <Router>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/order" element={<Order/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/*" element={<NoPage/>} />
              <Route path="/productinfo/" element={<ProductInfo />} />
              <Route path='/addproduct' element={<AddProduct/>}/>
              <Route path='/updateproduct' element={<UpdateProduct/>}/>
              <Route path='/allproducts' element={<AllProducts/>}/>              
            </Routes>
          </Router>
    </MyState>
   
  )
}

export default App