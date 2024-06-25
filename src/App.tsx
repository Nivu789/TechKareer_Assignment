import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  return (
    <>
      <div>
        <Hero/>
        <Navbar/>
        <Main/>
      </div>
    </>
  )
}

export default App
