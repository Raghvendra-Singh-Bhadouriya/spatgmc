import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import AllRoutes from './navigation/AllRoutes'
import Navbar from './navigation/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  )
}

export default App
