import React, { useState } from 'react'

const CountButton = () => {
    const [currentCount, setCurrentCount] = useState(100);


    const handleClick = () => {
        setCurrentCount(currentCount+5)
    }

    console.log("component re-rendered")

    return <div> 
        <button onClick={handleClick}>+5</button>
        <div>{currentCount}</div>
    </div>
}

export default CountButton