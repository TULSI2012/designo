import React from 'react'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import WebDesign from './Pages/WebDesign'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/webdesign' element={<WebDesign />} />
      </Routes>
    </div>
  )
}

export default App
