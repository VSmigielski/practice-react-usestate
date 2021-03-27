import './App.css';
import React, { useState } from 'react';

function countInitial() {
  console.log('run function')
  return 4
}

function App() {
  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('blue')

  // To pass an object through state
  // const [count, setState] = useState({ count: 4, theme: 'blue' })
  // const count = state.count
  // const thenme = state.theme
  
  // This uses a function to set State
  // const [count, setCount] = useState(() => {
  //   console.log('run function')
  //   return 4
  // })

  // This runs every time 
  // const [count, setCount] = useState(countInitial)

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
    // With a second one, it takes away 2
    // setCount(prevCount => prevCount - 1)
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
    setTheme('red')
  }


  // These functions are used when passing an object, to keep theme use ...prevState
  // function decrementCount() {
  //   setState(prevState => {
  //     return { ...prevState, count: prevState.count - 1}
  //   })
  // }

  // function incrementCount() {
  //   setState(prevState => {
  //     return { ...prevState, count: prevState.count + 1}
  //   })
  // }

  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
