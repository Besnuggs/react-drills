import React, { Component } from 'react'
import './App.css'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      userMessage: ''
    }
  }

handlemessageChange(value){
  this.setState({userMessage: value})
}

render(){
  return(
    <div className="App">
    <h1>Watch Magic Happen as You Type</h1>
    <input onChange={(e)=>this.handlemessageChange(e.target.value)} />
    <h1 className="headerColor">{this.state.userMessage}</h1>
    </div>
  )
}
}