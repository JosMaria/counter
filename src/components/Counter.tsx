import { useState } from 'react'

import './Counter.css'

export const Counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className='container-counter'>
      <h1>Counter: {counter}</h1>
      <nav>
        <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>
        <button onClick={() => setCounter(prev => prev - 1)}>Decrement</button>
      </nav>
    </div>
  )
}
