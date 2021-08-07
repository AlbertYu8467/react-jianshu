import React, { Component, Fragment } from 'react'
import './style.css'
import TodoItem  from './TodoItem'

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue:'',
      list: []
    }
    this.handleInputChange =this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDel = this.handleItemDel.bind(this)
  }


  render(){
    return (
      <Fragment>
        <label htmlFor="insert">输入内容</label>
        <input id="insert" className="input" value={this.state.inputValue} 
        onChange={this.handleInputChange}
        />
        <button onClick={this.handleBtnClick}>提交</button>
        <ul>
          { this.getTodoItem() }
        </ul>
      </Fragment>
    )
  }

  getTodoItem(){
    return this.state.list.map((item, index) => {
      return (
        <TodoItem 
        content={item} 
        index={index}  
        delItem={this.handleItemDel}
        key={index}/>
      ) 
    })
  }

  handleInputChange(e){
    let value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleBtnClick(){
    if(!this.state.inputValue) return
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleItemDel(index){
    this.setState((prevState) => {
      let list = [...prevState.list];
      list.splice(index, 1)
      return {list}
    })
  }
}

export default TodoList