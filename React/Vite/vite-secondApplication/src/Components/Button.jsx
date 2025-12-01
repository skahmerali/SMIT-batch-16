import React from 'react'

export default function Button({ fname, name, click }) {
    return (
        <button onClick={click}>
            {name ? name : fname}
        </button>
    )
}
