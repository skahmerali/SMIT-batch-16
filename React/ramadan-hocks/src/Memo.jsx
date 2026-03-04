import React, { useState, memo } from 'react';

// 1. Memoized Child Component
// React will skip re-rendering this component if props are unchanged.
const ListItem = memo(({ id }) => {
    console.log(`Rendering Item ${id}`);
    return <li>Item {id}</li>;
});

// 2. Parent Component
export default function App() {
    const [count, setCount] = useState(0);

    // Create 1000 items
    const items = Array.from({ length: 1000 }, (_, i) => i + 1);

    return (
        <div>
            <h1>Memo Example</h1>
            <button onClick={() => setCount(count + 1)}>
                Re-render Parent ({count})
            </button>

            <ul>
                {items.map((id) => (
                    // Because ListItem is memoized, only the parent button 
                    // triggers a re-render, but ListItems do not.
                    <ListItem key={id} id={id} />
                ))}
            </ul>
        </div>
    );
}
