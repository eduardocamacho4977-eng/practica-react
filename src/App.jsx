/*import React from 'react'*/

import { Route, Routes } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Contact from './Components/Contact'

const App = () => {
  return (
    <>
     <Routes>
      <Route path='/' element={<Navbar />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
     

        
      
    </>
  )
}

export default App
