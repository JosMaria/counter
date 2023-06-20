import { useReducer } from 'react'

import './Counter.css'

const initState = { count: 0 }

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE
}

const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 }

    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 }

    default:
      throw new Error()
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initState)

  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })

  return (
    <div className='container-counter'>
      <h1>Counter: {state.count}</h1>
      <nav>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </nav>
    </div>
  )
}
