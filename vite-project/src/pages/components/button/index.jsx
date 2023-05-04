import React from "react";
import { useState } from 'react';

const [count, setCount] = useState(0)
export function Button() {
    return(
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    )
}