import { useCounter, useCounterText } from '../context'

import './Counter.css'

export const Counter = () => {
  const { count, decrement, increment } = useCounter()
  const { text, handleTextInput } = useCounterText()
  
  return (
    <div className='container-counter'>
      <h1>Counter: {count}</h1>
      <nav>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </nav>
      <input type='text' onChange={handleTextInput} />
      <h2>{text}</h2>
    </div>
  )
}
