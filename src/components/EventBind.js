import React, { Component } from 'react'

export class EventBind extends Component {
  constructor(props){
    super(props)

    this.state = {
      message: "Hello"
    }
  }

  changeMessage(){
    this.setState({ message: "Good Bye" })
    //console.log(this)
  }

  changeMessage2  = (newState) => {
    this.setState(newState)
  }


  render() {
    return (
      <div>
        <button onClick={ this.changeMessage.bind(this) } >{ this.state.message }</button>
        <button onClick={ () => this.changeMessage2({ message: "Hello!" }) } >{ this.state.message }</button>
      </div>
    )
  }
}

export default EventBind
