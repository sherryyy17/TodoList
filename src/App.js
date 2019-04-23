import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';
import uuid from 'uuid';
import Header from './layout/Header';
import AddTodo from './Components/AddTodo'

class App extends Component {
  state={
    todos:[
      {
        id:uuid.v4(),
        title:'Complete COA file',
        date:'2019-04-15',
        time:'04:30',
        completed:false
      },
      {
        id:uuid.v4(),
        title:'Study for test',
        date:'2019-04-15',
        time:'07:40',
        completed:false

      },
      {
        id:uuid.v4(),
        title:'go to zumba',
        date:'2019-04-15',
        time:'12:00',
        completed:false

      }

    ]
  }

  markComplete=(id)=>{this.setState({todos:this.state.todos.map(todo=>{
    if(todo.id ===id){
      todo.completed=!todo.completed
    }
    return todo;
    })
  });
}
  delTodo=(id)=>{
    this.setState({todos:[...this.state.todos.filter(todo=> todo.id !==id)]});
  }
  addTodo=(title,date,time)=>{
    const newTodo=
      {
        id:uuid.v4(),
        title,
        date,
        time,
        completed:false
      }
      this.setState({todos:[...this.state.todos,newTodo]});
  }
  render() {
    return (
      <div className="App">
        <div className="Container">
          <Header/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
          <AddTodo addTodo={this.addTodo}/>
        </div>
      </div>
    )
  }
}

export default App;
