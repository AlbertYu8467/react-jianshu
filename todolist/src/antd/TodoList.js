import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button,List } from 'antd';
import store from '../store';

import {getAddItemAction, getInputChangeAction,getDelItemAction} from '../store/actionCreator';
class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)

    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange);
  }
  render(){
    return (
      <div style={{margin:'10px 0 0 10px'}}>
        <Input value={this.state.inputValue} style={{width:'300px',marginRight:'10px'}}
          onChange={this.handleInputChange}
        />
        <Button type="primary" onClick={this.handleBtnClick} >提交</Button>
        <List
          style={{width:'300px',marginTop:'10px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => (
            <List.Item onClick={this.handleDelItem.bind(this,index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
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