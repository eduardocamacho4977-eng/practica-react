//import React from 'react'

import {useNavigate} from 'react-router-dom'


function Navbar() {

const navigate = useNavigate()

const irContacto = () => {

  navigate('/contact')

}

  return (
    <div >

      <h1>yo soy el navbar</h1>

      <button onClick={irContacto}>Ir a Contact</button>

    </div>
  )
}

export default Navbar
