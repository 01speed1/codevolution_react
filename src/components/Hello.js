import React from 'react'

/* const Hello = () => (
  <div>
    <h1>Hola de nuevo</h1>
  </div>
) */

const Hello = () => {
  return React.createElement(
    'div',
    {id: "numbaaguan", className: "iziPiziClass"},
    React.createElement('h1', null, 'Hello from h1'))
}

export default Hello