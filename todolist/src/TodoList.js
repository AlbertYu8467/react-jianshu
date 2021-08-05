import React, { Component, Fragment } from 'react'

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue:'',
      list: []
    }
  }


  render(){
    return (
      <Fragment>
        <input value={this.state.inputValue} 
        onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index} onClick={this.handleItemDel.bind(this, index)}>{item}</li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e){
    if(!e.target.value) return
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDel(index){
    let list = [...this.state.list];
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

export default TodoList