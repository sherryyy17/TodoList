import React, { Component } from 'react';
import propTypes from 'prop-types';

export class TodoItem extends Component {
    todoStyle=()=>{
            return{
            backgroundColor:this.props.todo.completed ?'#ccc':'#DDA0DD',
            fontWeight:'bold',
            display:'flex',
            borderBottom:'1px #ccc dotted',
            textDecoration: this.props.todo.completed ?'line-through':'none'
           }
    }
    render(){
      const{title,id,date,time}=this.props.todo;
    return (
      <div style={this.todoStyle()}>
        <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
        <h3 style={{flex:'4'} }>{title}</h3>
        <div style={{flex:'2'}} >{date}</div>
        <div style={{flex:'2'}} >{time}</div>
        <button style={btnStyle} type="button" onClick={this.props.delTodo.bind(this,id)}>x</button>
      </div>
    )
  }
}
TodoItem.propTypes = {
  todo:propTypes.object.isRequired
}
const btnStyle={
    background:'#9400D3',
    color:'white',
    borderRadius:'50%',
    padding:'5px 5px',
    float:'right',
}
export default TodoItem
