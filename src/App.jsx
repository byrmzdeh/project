import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Sign from './pages/Sign'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/sign' element={<Sign/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
