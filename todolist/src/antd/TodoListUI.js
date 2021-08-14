import React, { Component } from 'react';
import { Input, Button,List } from 'antd';
class TodoListUI extends Component {
  render(){
    return (
      <div style={{margin:'10px 0 0 10px'}}>
      <Input value={this.props.inputValue} style={{width:'300px',marginRight:'10px'}}
        onChange={this.props.handleInputChange}
      />
      <Button type="primary" onClick={this.props.handleBtnClick} >提交</Button>
      <List
        style={{width:'300px',marginTop:'10px'}}
        bordered
        dataSource={this.props.list}
        renderItem={(item,index) => (
          <List.Item onClick={() => {this.props.handleDelItem(index)}}>
            {item}
          </List.Item>
        )}
      />
    </div> 
    )
  }
}
export default TodoListUI;