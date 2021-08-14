import React, { Component } from 'react';
import { connect } from 'react-redux';
class TodoList extends Component {
  render(){
    return (
      <div>
        <input inputValue={this.props.inputValue} onChange={this.props.changeInputVaue}/>
      </div>
    )
  }
}

const  mapStateProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

// store.dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputVaue(e) {
      console.log(e.target.value)
      const action = {
        type:'',
        value:''
      }
      // dispatch();
    }
  }
}
export default connect(mapStateProps,mapDispatchToProps)(TodoList)