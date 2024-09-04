import React, { useEffect, useState } from 'react'

function Counter() {
    const initialState = 0
    const [count, setCount] = useState(initialState)
    const [second, setSecond] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSecond((prevSecond) => prevSecond + 1)
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
    const increment5 = () => {
        setCount(prevCount => prevCount + 5)
    }
    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }
    const decrement5 = () => {
        setCount(prevCount => prevCount - 5)
    }

    const reset = () => {
        setCount(initialState)
    }
    return (
        <div>
            <h1>Timer: {second}</h1>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment5}>Incrementby5</button>
            <button onClick={decrement5}>Decrementby5</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter
