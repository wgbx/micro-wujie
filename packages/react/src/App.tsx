import { useState } from 'React'
import './app.scss'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="app-page">
      <div>react</div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default App
