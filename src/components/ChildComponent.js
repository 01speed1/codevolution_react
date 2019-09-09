import React from 'react'

function ChildComponent(props) {
  console.log(props)
  return (
    <div>
      <button onClick={ () => props.greetHandler('child') }>Child button</button>
    </div>
  )
}

export default ChildComponent
