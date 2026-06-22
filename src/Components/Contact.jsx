import { useNavigate } from 'react-router-dom'
import imagencontacto from "../assets/contact.jpg"
function Contact  ()  {

  const navigate = useNavigate()

  const volverNavbar = () => {
    navigate('/navbar')
  }

  return (
    <div className='contact'>

      <h2>Este es el componente Contact</h2>

      <img
        src={imagencontacto}alt='imagen contact' width="600"/>

      <br />

      <button onClick={volverNavbar}> Regresar al Navbar </button>

    </div>
  )
}

export default Contact