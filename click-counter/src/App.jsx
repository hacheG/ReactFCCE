import { useState } from 'react'
import './App.css'
import freeCodeCamp from "./imagenes/freecodecamp-logo.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='frecodecamp-logo' src={freeCodeCamp} alt="Logo de Freecodecamp" />
      </div>
      <div className='contenedor-principal'></div>
    </div>
  )
}

export default App
