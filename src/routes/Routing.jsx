import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import SingleBlog from '../pages/SingleBlog'
const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<SingleBlog />} />
    </Routes>
  )
}

export default Routing