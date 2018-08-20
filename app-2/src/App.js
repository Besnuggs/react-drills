import React, {Component} from 'react';
import './App.css'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      bookArray: [
        'Infinite Jest',
        'Consider The Lobster',
        'A Supposedly Fun Thing Ill Never Do Again',
        'Extremely Loud and Incredibly Close',
        'Everything is Illuminated',
        'Ask The Dust',
        'Wait Until Spring, Bandini',
        'Anacoluthon'
      ]
    }
  }

render(){
let displayList = this.state.bookArray.map((ele,index) => {
  return(
    <h1 key={index}>{ele}</h1>
  )
})

return(
  <div className="App">
  {displayList}
  </div>
)
}
}