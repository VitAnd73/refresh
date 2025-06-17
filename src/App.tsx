import './App.css'

import Users from '@/components/Users'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import viteLogo from '/vite.svg'

// import Users from './components/Users'




function App() {
  const [count, setCount] = useState(0)

  const btnHandler = () => {
    setCount((count) => count + 1)
    console.log(`btnclicked`)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + ddddd`2222</h1>
      <div className="card">
        <button onClick={btnHandler}>
          count sdfsdf is {count} timeszzzz
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn moreddfgdgf
      </p>
      <Users />
    </>
  )
}

export default App
