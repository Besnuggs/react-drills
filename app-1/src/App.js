import React, {Component} from 'react';
import './App.css'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: ''
    }
}

handleChange(value){
  this.setState({message: value})
}

render(){
  return(
    <div className="App">
    <input onChange={((e)=> this.handleChange(e.target.value))}/>
    <h1> {this.state.message} </h1>
    </div>
  )
}
}