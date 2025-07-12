import React from "react";
import imagen from "../imagenes/testimonio-Emma.webp";
import "../hojas-de-estilos/Testimonio.css"

function Testimonio(props){
    return(
        <div className="contenedor-testimonio">
            
            <img className="imagen-testimonio" src={props.imagenEmma} alt="Foto Emma" />
            <div className="contenedor-texto-testimonios">
                <p className="nombre-testimonio"><b>{props.nombre}</b> en {props.pais}</p>
                <p className="cargo-testimonio">{props.cargo} en <b>{props.empresa}</b></p>
                <p className="texto-testimonio">"{props.testimonio}"</p>

            </div>
        </div>
    )
}

export default Testimonio