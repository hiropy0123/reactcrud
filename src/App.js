import React from 'react';

// Props 
// コンポーネントに属性を与える


const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 7 },
    { name: "Unknown" }
  ]

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }     

      {/* <User name={"Taro"} age={20} />
      <User name={"Hanako"} age={14} /> */}

    </div>
    
  )
}

const User = (props) => {
  return <div>Hi, I'm {props.name}! I'm {props.age} years old. </div>
}

// 指定がなかった場合のデフォルトpropsを定義
User.defaultProps = {
  age: 1
}

export default App;
