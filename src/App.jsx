import { useState } from 'react'

function App() {
  const [color,setColor] = useState("#A35C7A")

  return (
    <div className='w-full h-screen'
    style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-yellow px-3 py-2 rounded-xl'>
          <button onClick={() => setColor("yellow")}
          className='px-5 rounded-xl py-3'
          style={{backgroundColor : "yellow"}}>Yellow</button>
          <button onClick={() => setColor("red")}
          className='px-5 rounded-xl py-3'
          style={{backgroundColor : "red"}}>Red</button>
          <button onClick={() => setColor("green")}
          className='px-5 rounded-xl py-3'
          style={{backgroundColor : "green"}}>Green</button>
          <button onClick={() => setColor("pink")}
          className='px-5 rounded-xl py-3'
          style={{backgroundColor : "pink"}}>Pink</button>
          <button onClick={() => setColor("orange")}
          className='px-5 rounded-xl py-3'
          style={{backgroundColor : "orange"}}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
