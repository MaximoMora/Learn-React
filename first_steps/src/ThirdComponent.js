import React from 'react'

export default function ThirdComponent ({name, tututu}) {

  return (
    <div>

        <h1>Comunicacion entre componentes</h1>

        <ul>
            <li>{name}</li>
            <li>{tututu.age}</li>
        </ul>

    </div>
  )
}
