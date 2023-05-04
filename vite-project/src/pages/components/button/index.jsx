import React from "react";
import styled from "styled-components";
import { useState } from 'react';
const Button = styled.button`
  background-color: rgb(21, 25, 24);
  color: rgb(182, 255, 175);
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 1.4rem;
`;
const Background = styled.div`
  background: linear-gradient(to right, rgb(21, 25, 24), rgb(182, 255, 175));
  border-radius: 5px;
  padding: 1px;
  width: fit-content;
`;

export function Buttons() {
    const [count, setCount] = useState(0);
    return(
        //<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <Background>
            <Button onClick={() => setCount((count) => count + 1)}>{"Clicked: " + count + " times"}</Button>
        </Background>
        
    )
}