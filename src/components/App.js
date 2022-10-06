import React from 'react'
import CountButton from './CountButton/CountButton'


const App = () => {
    const myItem = "Joey"
  
  
    return (
        <div>
            <CountButton incrementBy={1} buttonColour={"red"}/>
            <CountButton incrementBy={7} buttonColour={"blue"}/>
            <CountButton incrementBy={25} buttonColour={"green"}/>
        </div>
    )
  
  }

  export default App