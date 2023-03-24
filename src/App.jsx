import React from 'react'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import WebDesign from './Pages/WebDesign'
import AppDesign from './Pages/AppDesign'
import GraphicDesign from './Pages/GraphicDesign'
import About from './Pages/About'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/webdesign' element={<WebDesign />} />
        <Route path='/appdesign' element={<AppDesign />} />
        <Route path='/graphicdesign' element={<GraphicDesign />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
