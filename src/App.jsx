import { useState } from 'react'

import './App.css'

import Homepage from './Pages/Homepage'
import Layout from './Pages/Layout'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import NoPage from './Pages/NoPage'
import Services from './Pages/Services'
import Images from './Pages/Images'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import useFetchBlogsList from './hooks/useFetchBlogsList'
import BlogDetails from './Pages/BlogDetails'

function App() {
  
  const { blogItems} = useFetchBlogsList()

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="news" element={<Blog blogItems = {blogItems} />} />
        <Route path="news/:postId" element={<BlogDetails/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="images" element={<Images />} />
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
