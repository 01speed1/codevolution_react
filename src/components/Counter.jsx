import React, { Component } from 'react'

export class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count:0
    }
  }

  increment() {
    this.setState(previusState => ({
      count: previusState.count + 1
    }))
  }

  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <div>
        Count - { this.state.count }
        <button onClick={()=> { this.incrementFive() }} >Aumentar</button>
      </div>
    )
  }
}

export default Counter
