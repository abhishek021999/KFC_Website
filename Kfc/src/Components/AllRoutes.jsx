import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import LoginPage from '../Pages/Login'
import Signup from '../Pages/Signup'
import Product from '../Pages/Product'


function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/product' element={<Product/>}/>
    </Routes>
    
    </>
  )
}

export default AllRoutes