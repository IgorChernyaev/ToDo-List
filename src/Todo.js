import React, { Component } from 'react';

export default class Todo extends Component {
  
  render() {
    const { todo, remove } = this.props
    return (
      <li>{todo}<button className="remove" onClick={remove}>x</button></li>
    )
  }
}
