import {connect} from 'react-redux'
import { createAddAction, createMinusAction, createAddAsyncAction } from '../../redux/sum_action'

import React, { Component } from 'react'
class CountUI extends Component {

  // state = {sum: 0}


  // componentDidMount(){
  //   // this can monitoring the redux's state, store.subscribe() will call the call-back 
  //   // function while the redux's state is changing.
  //   store.subscribe(()=>{
  //     this.setState({})  // This can call this.render(), to render() the page. 
  //   })
  // }
  
  add = ()=>{
    const {value} = this.selectNum
    console.log('ui')
    // const {sum} = this.state
    // this.setState({sum: value-0+sum})
    // store.dispatch(createAddAction(value-0))
    // this.setState({})
    this.props.add(value-0)
  }
  minus = ()=>{
    const {value} = this.selectNum
    // const {sum} = this.state
    // this.setState({sum: sum-value})
    // store.dispatch(createMinusAction(value))
    this.props.minus(value)
  }
  addWhileOdd = ()=>{
    const {value} = this.selectNum
    // const sum = store.getState()
    const sum = this.props.count
    // console.log(this.props.count)
    // const {sum} = this.state
    if (sum%2){
      // store.dispatch(createAddAction(value-0))
      this.props.add(value-0)
      // this.setState({sum: sum+value*1})
    }
  }
  addWithAsync = ()=>{
    const {value} = this.selectNum
    this.props.async(value-0, 500)
    // store.dispatch(createAddAsyncAction(value-0, 500))
    // const {sum} = this.state
    // setTimeout(() => {
    //   store.dispatch(createAddAction(value-0))
    //   // this.setState({sum: sum+value*1})
    // }, 500);
  }

  
  render() {
    return (
      <div>
        <h1>Current the Sum is: {this.props.count}</h1>&nbsp;
        <select ref={c => this.selectNum = c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select> &nbsp;
        <button onClick={this.add}>+</button>&nbsp;
        <button onClick={this.minus}>-</button>&nbsp;
        <button onClick={this.addWhileOdd}>add while sum is odd</button>&nbsp;
        <button onClick={this.addWithAsync}>async add</button>
      </div>
    )
  }
}

export default connect(
    state => ({count: state}),
    {
        add: createAddAction,
        minus: createMinusAction,
        async: createAddAsyncAction
    }
)(CountUI)