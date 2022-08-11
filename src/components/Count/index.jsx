import React, { Component } from 'react'

export default class Count extends Component {

  state = {sum: 0}

  add = ()=>{
    const {value} = this.selectNum
    const {sum} = this.state
    this.setState({sum: value-0+sum})
  }
  minus = ()=>{
    const {value} = this.selectNum
    const {sum} = this.state
    this.setState({sum: sum-value})
  }
  addWhileOdd = ()=>{
    const {value} = this.selectNum
    const {sum} = this.state
    if (sum%2){
      this.setState({sum: sum+value*1})
    }
  }
  addWithAsync = ()=>{
    const {value} = this.selectNum
    const {sum} = this.state
    setTimeout(() => {
      this.setState({sum: sum+value*1})
    }, 500);
  }

  
  render() {
    return (
      <div>
        <h1>Current the Sum is: {this.state.sum}</h1>&nbsp;
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
