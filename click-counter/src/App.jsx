import { useState } from 'react'
import "./App.css"
import Boton from "./componentes/Boton"
import Contador from './componentes/Contador'
import freeCodeCamp from "./imagenes/freecodecamp-logo.png"

function App() {
  const [numClics, setnumClics] = useState(0)

  const manejarClic = () => {
    setnumClics( numClics + 1 )
  }

  const reiniciarContador = () => {
    setnumClics(0);
  }

  return (
    <div className='app'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='frecodecamp-logo' src={freeCodeCamp} alt="Logo de Freecodecamp" />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClics={numClics}
        />
        <Boton 
          texto = "Click"
          esBotonDeClic = {true}
          manejarClic = {manejarClic}
          />
        
        <Boton 
          texto = "Reiniciar"
          esBotonDeClic = {false}
          manejarClic = {reiniciarContador}
          />
      </div>
    </div>
  )
}

export default App
