import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {

  constructor(props){
    super(props)

    this.state = {
      ParentName: "Parent"
    }

    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(child){
    alert(`Hello ${this.state.ParentName} from ${child}`)
  }



  render() {
    return (<div><ChildComponent
      greetHandler={this.greetParent}></ChildComponent></div>)
  }
}

export default ParentComponent
