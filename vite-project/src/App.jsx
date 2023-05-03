import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavBar } from './pages/components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </div>
  )
}

export default App
