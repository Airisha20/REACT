import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Bollywood from './components/Bollywood'
import Hollywood from './components/Hollywood'
import './App.css'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/bollywood' element={<Bollywood/>}/>
          <Route path='/hollywood' element={<Hollywood/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App