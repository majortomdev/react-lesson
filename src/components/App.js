import React from 'react'


const App = () => {
    const myItem = "Joey"
  
  
    return (
      <ul>
        <li>item1</li>
        <li>item222 {myItem}</li>
        <li>{myItem.toUpperCase()}</li>
      </ul>
    )
  
  }

  export default App