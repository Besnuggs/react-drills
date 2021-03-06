import React, { Component } from 'react';
import './App.css'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      timer: 0,
      emptyStringMaybe: '',
      myArray: [
        "What",
        "Where",
        "Why",
        "How",
        "Question",
        "Statement",
        "Tryop",
        "Kooo",
        "Weeeeelp"
      ]
    }
  }

handleThisFunction(filter){
  this.setState({emptyStringMaybe: filter})
}

render(){
setTimeout(()=>{
  this.setState({timer: this.state.timer + 1
})}, 1000)

let displayArray = this.state.myArray.filter((element,index) => {
  return element.includes(this.state.emptyStringMaybe);
}).map((element,index) => {
  return <h1 type={index}>{element}</h1>
})

  return(
    <div className="App">
    <input onChange={(e)=>this.handleThisFunction(e.target.value)} />
    {displayArray}
    <h1>{this.state.timer}</h1>
    </div>
  )
}
}