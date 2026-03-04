import React, { useState, useMemo } from 'react';

// Child Component that receives the computed value
const CalculationDisplay = ({ result, count }) => {
  console.log("Child Component Rendered");
  return (
    <div>
      <h3>Count: {count}</h3>
      <p>Expensive Calculation Result: {result}</p>
    </div>
  );
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useMemo runs the loop ONLY when 'count' changes
  const expensiveResult = useMemo(() => {
    console.log("Running 1000-digit loop...");
    let sum = 0;
    for (let i = 0; i < 100000; i++) {
      sum += i;
    }
    return sum + count;
  }, [count]); // Only re-computes if count changes

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type here..." />

      {/* 
        This child component will only re-render 
        when expensiveResult changes 
      */}
      <CalculationDisplay result={expensiveResult} count={count} />
    </div>
  );
};

// Create a React component that displays a large list of items (10,000+) and allows filtering them via an input field, alongside a simple counter button that forces re-renders. Use useMemo to cache the filtered list calculation and React.memo to prevent unnecessary re-renders of the list item components. 
// Medium
// Medium
//  +4
// Task Breakdown:
// Generate Data: Generate 10,000+ random data items (e.g., names) on component mount.
// State Management: Create state for the search query and a separate state for a counter (increment button).
// Expensive Calculation (useMemo): Use useMemo to filter the list based on the search query. This ensures filtering only re-runs when the query changes, not when the counter increases.
// Component Memoization (memo): Create a child component to display each list item wrapped in React.memo. This ensures items only re-render if their props change.
// Test: Increment the counter. The list and items should not re-render (check with console.log in child component). Change the filter, and the list should update. 

export default ParentComponent;
