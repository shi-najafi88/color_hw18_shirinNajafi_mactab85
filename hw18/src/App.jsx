import { useState } from 'react'
import ColorRnd from './component/question1/ColorRnd'
import AdjustColor from './component/question2/AdjustColor/AdjustColor'
import Form from './component/question3/Form/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <ColorRnd/> */}
      {/* <AdjustColor/> */}
      <Form />
   
    </div>
  )
}

export default App
