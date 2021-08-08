import React, {Component} from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.content !== this.props.content){
      return true
    }
    return false
  }
  render(){
    return <li onClick={this.handleClick}>{this.props.content}</li>
  }

  handleClick(){
     this.props.delItem(this.props.index)
  }
}

TodoItem.propTypes = {
  content: PropTypes.string,
  delItem: PropTypes.func.isRequired,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem;