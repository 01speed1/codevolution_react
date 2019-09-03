import React from 'react'

const functionClick = () => { console.log("JA Click!!") }

export default function FunctionClick() {
  return (
    <div>
      <button onClick={ functionClick } > Click </button>
    </div>
  )
}
