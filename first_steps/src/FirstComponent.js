
import React from "react";

export default function FirstComponent() {

    const name = "max";
    let email = "maxmora@gmail.com"

    let usuario = {
        name: "Max",
        lastnames: "Mora",
        email: "maxmora401@gmail.com"
    }
    return (
        <div>

            <h2>Este es un gran componente</h2>

            <p>Datos del usuario</p>
            
            <ul>
                <li>Nombre: {name}</li>
                <li>email: {email}</li>
            </ul>
            <p>Desde un objeto</p>
            <ul>
                <li>Nombre: {usuario.name}</li>
            </ul>
        </div>
    )
};