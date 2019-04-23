import React, { Component } from 'react'
import './Todo.css'

export class AddTodo extends Component {
    state={
        title:'',
        date:'',
        time:''
    }
    onChange=(e)=>this.setState({[e.target.name]: e.target.value});
    onSubmit=(e)=>{
        const {title,date,time}=this.state;
        e.preventDefault();
        this.props.addTodo(title,date,time);
        this.setState({ title: '', date: '', time: '' });
    }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
            <input type="text" name="title" onChange={this.onChange} value={this.state.title} placeholder="Add task" className="styInp"/ >
            <input type="date" name="date" onChange={this.onChange} value={this.state.date} className='datee'/>
            <input type="time" name="time" onChange={this.onChange} value={this.state.time} className='datee'/>
            <input type="submit" value="submit" className='btn'/>
        </form>
      </div>
    )
  }
}

export default AddTodo
