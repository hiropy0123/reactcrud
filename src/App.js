import React from 'react';
import PropTypes from 'prop-types';

// Props 
// コンポーネントに属性を与える

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 7 },
  ]

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }     

      {/* 
      <User name={"Taro"} age={20} />
      <User name={"Hanako"} age={14} /> 
      */}

    </div>
    
  )
}

const User = (props) => {
  return <div>Hi, I'm {props.name}! I'm {props.age} years old. </div>
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default App;
