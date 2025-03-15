import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import SingleBlog from '../pages/SingleBlog'
import Register from '../pages/Register'
import Login from '../pages/Login'
import EditBlog from '../pages/EditBlog'
import CreateBlog from '../pages/CreateBlog'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<SingleBlog />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/createblog' element={<CreateBlog/>} />
        <Route path='/editblog/:id' element={<EditBlog/>} />
    </Routes>
  )
}

export default Routing