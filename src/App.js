import React, { Component } from 'react';
import './App.css';
import Todo from './Todo'

class App extends Component {

  state = {
    todos: [],
    todoInput: ""
  }

  setValue = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  addTodo = () => {
    const { todos, todoInput } = this.state;
    todos.push(todoInput);
    this.setState({ todos, todoInput: "" });
  }

  removeTodo(id) {
    const todos = this.state.todos.filter((todo, i) => id !== i )
    this.setState({ todos });
  }

  render() {
    const { todoInput, todos } = this.state;
    return (
      <div className="container">
        <div className="header">
          <h1>ToDoApp</h1>
          <p>Todo's count: {todos.length}</p>
        </div>
        <ul className="note">
          { !!todos.length && todos.map((todo, i) => {
            return (<Todo key={i} todo={todo} remove={() => this.removeTodo(i)}/>)
          }) }
        </ul>
        <div className="blockInput">
          <input type="text" 
            className="textInput"
            placeholder="Enter todo"
            value={todoInput}
            onChange={this.setValue}
            name="todoInput"
          />
        </div>
        <div className="btn" onClick={this.addTodo}>+</div>
      </div>
    );
  }
}

export default App;

