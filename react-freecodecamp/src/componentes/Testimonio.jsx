import React from "react";
import imagen from "../imagenes/testimonio-Emma.webp";
import "../hojas-de-estilos/Testimonio.css"

function Testimonio(){
    return(
        <div className="contenedor-testimonio">
            
            <img className="imagen-testimonio" src={imagen} alt="Foto Emma" />
            <div className="contenedor-texto-testimonios"></div>
            <p className="nombre-testimonio">Emma Bostian en Suecia</p>
            <p className="cargo-testimonio">Ingeniera de software en spotyfy</p>
            <p className="texto-testimonio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ducimus fugit saepe, voluptatum beatae at voluptatibus sunt aut consectetur inventore quia officia possimus cupiditate rerum quod ullam. Repellendus, rem minus?s</p>
        </div>
    )
}

export default Testimonio