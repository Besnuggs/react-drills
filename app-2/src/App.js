import React, { Component } from 'react';
import './App.css'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      VidyaGames: [
        "Fallout 3",
        "Skyrim",
        "Neverwinter Nights",
        "Neverwinter Nights 2",
        "Baldur's Gate",
        "Fallout: New Vegas"
      ]
    }
  }

render(){
  let displayGames = this.state.VidyaGames.map((element,index) => {
    return(
      <h2 key={index}>{element}</h2>
    )
  })

  return(
    <div className="App">
      <h1> {displayGames}</h1>
    </div>
  )
 

}
}