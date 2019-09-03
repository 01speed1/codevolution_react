import React, { Component } from 'react'

class Greet extends Component {

  render(){
    const { name, heroName } = this.props

    return ( <h1>
      Welcome { name } A.K.A. { heroName }
    </h1> )
  }

}

export default Greet