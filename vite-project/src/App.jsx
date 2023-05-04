import { useState } from 'react';
import { NavBar } from './pages/components/navbar';
import { HomePage } from './pages/home';
import { Page2 } from './pages/page1';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar  />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </div>
  )
}

export default App;
