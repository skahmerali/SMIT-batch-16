import React, { useState } from 'react'

export default function UserData() {
    const [data, setData] = useState("");

    return (
        <div>
            user Data : {data}
        </div>
    )
}
