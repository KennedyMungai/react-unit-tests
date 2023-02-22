import React, { useState } from 'react'

const Greeting = () =>
{
    const [changedText, setChangedText] = useState(false)

    const changeTextHandler = () => 
    {
        setChangedText((prevState) => !prevState)
    }

    return (
        <div>
            <h2>Hello World!</h2>
            <p> Insert Dumb Programming Joke</p>
            {changedText && <p>Changed!</p>}
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    )
}

export default Greeting