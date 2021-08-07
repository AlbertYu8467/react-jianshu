import React, {Component} from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
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