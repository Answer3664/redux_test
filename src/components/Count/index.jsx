import React, { Component } from 'react'

import store from '../../redux/store'

export default class Count extends Component {

  // state = {sum: 0}


  componentDidMount(){
    // this can monitoring the redux's state, store.subscribe() will call the call-back 
    // function while the redux's state is changing.
    store.subscribe(()=>{
      this.setState({})  // This can call this.render(), to render() the page. 
    })
  }
  
  add = ()=>{
    const {value} = this.selectNum
    // const {sum} = this.state
    // this.setState({sum: value-0+sum})
    store.dispatch({type: 'add', data: value-0})
    // this.setState({})
  }
  minus = ()=>{
    const {value} = this.selectNum
    // const {sum} = this.state
    // this.setState({sum: sum-value})
    store.dispatch({type: 'minus', data: value})
  }
  addWhileOdd = ()=>{
    const {value} = this.selectNum
    const sum = store.getState()
    // const {sum} = this.state
    if (sum%2){
      store.dispatch({type: 'add', data: value-0})
      // this.setState({sum: sum+value*1})
    }
  }
  addWithAsync = ()=>{
    const {value} = this.selectNum
    // const {sum} = this.state
    setTimeout(() => {
      store.dispatch({type: 'add', data: value-0})
      // this.setState({sum: sum+value*1})
    }, 500);
  }

  
  render() {
    return (
      <div>
        <h1>Current the Sum is: {store.getState()}</h1>&nbsp;
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
