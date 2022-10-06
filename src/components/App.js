import React from 'react'
import CountButton from './CountButton'


const App = () => {
    const myItem = "Joey"
  
  
    return (
        <div>
            <CountButton incrementBy={1}/>
            <CountButton incrementBy={7}/>
            <CountButton incrementBy={25}/>
        </div>
    )
  
  }

  export default App