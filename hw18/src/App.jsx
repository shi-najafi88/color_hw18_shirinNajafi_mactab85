import { useState } from 'react'
import ColorRnd from './component/question1/ColorRnd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ColorRnd/>   
    </div>
  )
}

export default App
