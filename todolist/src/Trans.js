import React, {Component, Fragment} from 'react'
import { CSSTransition } from "react-transition-group";
class Trans extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: true
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  render(){
    return (
      <Fragment>
        {/* <div className={this.state.show ? 'show' : 'hide'}>hello</div> */}
        <CSSTransition 
        in={this.state.show} 
        timeout={300} 
        classNames='fade'
        unmountOnExit
        appear={true}
        onEntered = {(el) => el.style.color='blue'}
        >
          <div>hello</div>
        </CSSTransition>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    )
  }

  handleToggle(){
    this.setState((prevState) => ({
      show: !prevState.show
    })) 
  }
}
export default Trans;