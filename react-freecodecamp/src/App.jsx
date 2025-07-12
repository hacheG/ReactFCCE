import { useState } from 'react'
import './App.css'
import Testimonio  from './componentes/Testimonio'
import Emma from "./imagenes/testimonio-Emma.webp";
import Sarah from "./imagenes/testimonio-Sarah.webp";
import Shawn from "./imagenes/testimonio-Shawn.webp";

function App() {
  const [count, setCount] = useState(0)
  let negrita = ` ${<b>"freeCodeCamp cambió mi vida"</b> }.`
  return (
    <div className='app'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          imagenEmma={Shawn}
          cargo="Ingeniero de Software "
          empresa="Amazon"
          testimonio1 = "Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software."
          testimonioBold=<b> FreeCodeCamp cambió mi vida</b>
          testimonio3 = "."
        />
        <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          imagenEmma={Sarah}
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          testimonioBold=<b>FreeCodeCamp fue la puerta de entrada a mi carrera</b>
          testimonio3=" como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
        />
        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          imagenEmma={Emma}
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio1="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en "
          testimonioBold=<b>freeCodeCamp me dio las habilidades</b>
          testimonio3=" y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
        />
      </div>

    </div>
  )
}

export default App
