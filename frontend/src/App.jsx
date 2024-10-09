//import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'

import PlaceOrder from './pages/placeOrder/placeOrder'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/Loginpopup/LoginPopup'
import Cart from './pages/Cart/Cart'
import Myorders from './pages/Myorders/Myorders'
const App = () => {
  const [showlogin, setShowlogin] = useState(false)
  return (
    <>
    {showlogin?<LoginPopup  setShowlogin={setShowlogin}/> : <></> }
    <div className='app'>
      <Navbar setShowlogin={setShowlogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/myorders' element={<Myorders />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
