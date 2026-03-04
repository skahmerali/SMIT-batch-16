import React, { memo, useState } from 'react'

function ChildComponent() {
    const [decrease, setDecrease] = useState(null);
    console.log("child render");
    for (var i = 0; i <= 100000; i++) {
        console.log("hello world")
    }
    return (
        <p>
            hello This is Child component
        </p>
    )
}
export default memo(ChildComponent)