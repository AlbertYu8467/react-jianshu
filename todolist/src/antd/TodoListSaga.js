import React, { Component } from 'react';
import 'antd/dist/antd.css'
import TodoListUI from './TodoListUI'
import store from '../store';
import { connect } from "react-redux";

import {getAddItemAction, getInputChangeAction,getDelItemAction, getTodoList, getInitList} from '../store/actionCreator';
class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelItem = this.handleDelItem.bind(this)

    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange);
  }
  render(){
    return (
      <TodoListUI 
      inputValue={this.state.inputValue} 
      handleInputChange={this.handleInputChange}
      handleBtnClick={this.handleBtnClick}
      handleDelItem={this.handleDelItem}
      list={this.state.list}
      />
    )
  }
 
  componentDidMount(){
    // const action = getTodoList();
    // store.dispatch(action);

    const action = getInitList();
    store.dispatch(action);
  }

  handleInputChange(e){
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action);
  }

  handleBtnClick(){
    const action = getAddItemAction()
    store.dispatch(action);
  }
  handleDelItem(index){
    const action = getDelItemAction(index)
    store.dispatch(action);
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
}
export default TodoList