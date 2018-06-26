import React, { Component } from 'react';

// JSX記法
class App extends Component {
  render() {
    const greeting = "Hi! ";
    const dom = (
      <React.Fragment>
        <h1 className="foo">{greeting} Hello World</h1>
        <label htmlFor="name">名前</label>
        <input type="text" onClick={() => {console.log("Clicked!!")}} />
      </React.Fragment>
    );
    return dom;
  }
}

// Reactでは一つのタグで囲まれたものしかかえすことはできない。
// <div>で囲むと余計なタグが増えてしまうので、
// そのような場合には、<React.Fragment>で囲むと良い。

// // JavaScript記法
// class App extends Component {
//   render() {
//     return React.createElement (
//       "h1",
//       null,
//       "Hello World!!"
//     );
//   }
// }

export default App;
