import React, { useState } from 'react'
import './CountButton.css'

const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(100);


    const handleClick = () => {
        setCurrentCount(currentCount+props.incrementBy)
    }

    const divStyle = {
        background: props.buttonColour,
        border: "1px solid blue",
    }

    return (
        <div > 
            <button style={divStyle} onClick={handleClick}>+{props.incrementBy}</button>
            <div className="count-display">{currentCount}</div>
        </div>
    )
}

export default CountButton