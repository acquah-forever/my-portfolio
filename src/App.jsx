import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar'

import { Routes, Route } from 'react-router-dom'



const App = () => {
  return (
    <div className='min-h-screen mx-auto bg-slate-200'>
      <NavBar />
      <ProgressBar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
