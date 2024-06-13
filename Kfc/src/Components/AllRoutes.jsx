import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import LoginPage from '../Pages/Login'
import Signup from '../Pages/Signup'
import Product from '../Pages/Product'
import Cart from '../Pages/Cart'
import PrivateRoute from './PrivateRoute'


function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart/:id' element={
          <PrivateRoute>
          <Cart/>
          </PrivateRoute>
          }/>
    </Routes>
    
    </>
  )
}

export default AllRoutes