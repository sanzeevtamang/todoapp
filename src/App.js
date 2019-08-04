import React, { Component } from 'react'
import Todos from './Todos'

export default class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'First Task'},
      {id: 2, content: 'Second Task'}
    ]
  }

  deleteTodo = (id) => {
    console.log(id);
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    )
  }
}
