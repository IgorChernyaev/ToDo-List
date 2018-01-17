import React, { Component } from 'react';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor() {
    super()

    this.state ={
      todos: []
    }

    this.todoInput =""
  }

  addTodo() {
    let todoValue = this.todoInput.value
    
    let newTodos = this.state.todos
    newTodos.push(todoValue)

    this.setState({
      todos: newTodos
    })

    // Reset value
    this.todoInput.value =""

    // Set focus to input
    this.todoInput.focus()
  }

  removeTodo(id) {
    let todos = this.state.todos.filter((todo, index) => {
      return id !== index
    })

    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>ToDoApp</h1>
          <p>Todo's count: {this.state.todos.length}</p>
        </div>
        <ul className="note">
          { this.state.todos.map((todo, index) => {
            return (<Todo id={index} key={index} todo={todo} onRemove={() => this.removeTodo(index)}/>)
          }) }
        </ul>
        <input type="text" 
          className="textInput"
          placeholder="Enter todo"
          ref={(input) => this.todoInput = input}
          />
        <div className="btn" onClick={this.addTodo.bind(this)}>+</div>
      </div>
    );
  }
}

export default App;

