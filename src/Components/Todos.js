import React, { Component } from 'react';
import TodoItem from './TodoItem';

export class Todos extends Component {
  render() {
    return this.props.todos.map((todo)=>(
        <TodoItem todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));
  }
}

export default Todos
