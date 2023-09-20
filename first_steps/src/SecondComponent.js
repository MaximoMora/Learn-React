import React from 'react';

export default function SecondComponent() {

    var books = ["ET","Lovecraft","100 años de soledad"]
  return (
    <div>
        <h1>Segundo componente</h1>
        <h2>Libros</h2>
        {books.length >= 1 ? (

            <ul>

                {

                    books.map((book,index) => {
                        return <li key={index}>libro {index} : {book}</li>
                    })
                }
            </ul>
            ): (
                <p>no hay libros</p>
            )
        }
    </div>
  )
};
