import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { useState } from 'react';
import { NavBar } from './pages/components/navbar';
import { HomePage } from './pages/home';
import { Page2 } from './pages/page1';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <NavBar  />
      <Routes>
        <Route index element={<HomePage/>}></Route>
        <Route path="home" element={<HomePage/>}></Route>
        <Route path="page1" element={<Page2/>}></Route>
      </Routes>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </BrowserRouter>
  )
}

export default App;
