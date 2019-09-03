import React from 'react'

const Hi = ()  => {
  /* return ( <div>
    <h1>Hi Paps!!</h1>
  </div> ) */
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      "the son of Hi comp"
    ))
}

export default Hi