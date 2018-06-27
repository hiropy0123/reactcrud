import React, { Component } from 'react';

// // クラスコンポーネント
// class App extends Component {
//   render() {
//     return (
//       <div>Hello!! I'm class component!</div>
//     )
//   }
// }

// 関数コンポーネント
const App = () => {
  return (
    <div>
      <h1>Hello!! I'm functional component!</h1>
      <Cat />
      <Cat />
      <Cat />
    </div>
    
  )
}

const Cat = () => {
  return <div>Meow!!</div>
}

export default App;
