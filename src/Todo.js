import React, { Component } from 'react';

export default class App extends Component {
  
  render() {
    let {id, todo, onRemove} = this.props
    return(
      <li>{todo}<button className="remove" onClick={() => onRemove(id)}>x</button></li>
    )
  }
}
