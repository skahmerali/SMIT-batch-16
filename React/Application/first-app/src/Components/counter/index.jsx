import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>increse</button>

            <button onClick={() => { if (count === 0) { setCount(0) } else { setCount(count - 1) } }}>decrese</button>

        </div >

    )
}

export default Counter
