import { createContext, useReducer } from "react"

type StateType = {
  count: number
  text: string
}

const initState: StateType = {
  count: 0,
  text: ''
}

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE,
  payload?: string
}

const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 }

    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 }

    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? '' }

    default:
      throw new Error()
  }
}

const useCounterContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initState)

  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })
  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: e.target.value
    })

  return { state, increment, decrement, handleTextInput }
}

type UseCounterContext = ReturnType<typeof useCounterContext>

const initContextState: UseCounterContext = {
  state: initState,
  increment: () => { },
  decrement: () => { },
  handleTextInput: (e: React.ChangeEvent<HTMLInputElement>) => { }
}

export const CounterContext = createContext<UseCounterContext>(initContextState)

type ChildrenType = {
  children?: React.ReactElement | undefined
}

export const CounterProvider = ({ children, ...initState }: ChildrenType & StateType): React.ReactElement => {
  return (
    <CounterContext.Provider value={useCounterContext(initState)}>
      {children}
    </CounterContext.Provider>
  )
}
