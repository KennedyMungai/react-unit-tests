import React, { useState } from 'react'

const Greeting = () =>
{
    const [changedText, setChangedText] = useState(false)

    return (
        <div>
            <h2>Hello World!</h2>
            <p> Insert Dumb Programming Joke</p>
            <button onClick={ }>Change Text!</button>
        </div>
    )
}

export default Greeting