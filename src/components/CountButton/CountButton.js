import React, { useState, useEffect } from 'react'
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

    useEffect(() => {
        console.log("Use effect functn called")
        if(currentCount===200){
            setCurrentCount(0)
        }
    }, [currentCount])

    return (
        <div > 
            <button style={divStyle} onClick={handleClick}>+{props.incrementBy}</button>
            <div className="count-display">{currentCount}</div>
        </div>
    )
}

export default CountButton