import React, { useState } from 'react'

const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(100);


    const handleClick = () => {
        setCurrentCount(currentCount+props.incrementBy)
    }

    const divStyle = {
        background: props.buttonColour,
        border: "1px solid blue",
        borderRadius: "10px",
    }

    return (
        <div > 
            <button style={divStyle} onClick={handleClick}>+{props.incrementBy}</button>
            <div>{currentCount}</div>
        </div>
    )
}

export default CountButton