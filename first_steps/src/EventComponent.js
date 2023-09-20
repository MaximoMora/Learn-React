import React from 'react';


export default function Event() {

    const handleClick = () => {
        alert("haz dado click al boton")

    }

    const handleDoubleClick = (e) => {
        alert(e)
    }

    return (
        <div>
            <h1>Evento</h1>

            <button onClick={handleClick}>boton</button>

            <button onDoubleClick={e => handleDoubleClick(e)}>doble click</button>

        </div>
    )
}