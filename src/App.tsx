import { Counter } from './components'
import { CounterProvider, initState } from './context'


function App() {
  return (
    <>
      <CounterProvider count={initState.count} text={initState.text}>
        <Counter />
      </CounterProvider>
    </>
  )
}

export default App
