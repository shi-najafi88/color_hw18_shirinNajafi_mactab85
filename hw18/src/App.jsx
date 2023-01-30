import { useState } from 'react'
import ColorRnd from './component/question1/ColorRnd'
import AdjustColor from './component/question2/AdjustColor/AdjustColor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <ColorRnd/> */}
      <AdjustColor/>
   
    </div>
  )
}

export default App
