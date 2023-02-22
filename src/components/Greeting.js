import React, { useState } from 'react'
import Output from './Output'

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
            {!changedText && <Output> Insert Dumb Programming Joke</Output>}
            {changedText && <Output>Changed!</Output>}
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    )
}

export default Greeting