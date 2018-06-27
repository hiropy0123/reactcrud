import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
    // console.log('handlePlusButton');
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
    // console.log('handleMinusButton');
  }

  // stateをダイレクトに変更してはいけない
  // setStateで状態を変更する 
  // setStateで状態が変更されると、コールバックでrender()が実行される

  render() {
    return (
      <React.Fragment>
        <div>Count: { this.state.count }</div>
        <button onClick={this.handleMinusButton}>-1</button>
        <button onClick={this.handlePlusButton}>+1</button>
      </React.Fragment>
    )
  }
}

export default App;
