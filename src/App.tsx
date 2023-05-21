import { useEffect, useState } from 'react'
// import {createTuner} from '@tuner/tuner'
import './App.css'
//Tuner App

// const tuner : any = createTuner({log: true})
const tuner : any = () => {
  return new Promise((resolve) => setTimeout(() => {
    resolve(['some','data'])
  },5000))
}

function App() {
  const [ready, setReady] = useState(false)
  const [count, setCount] = useState(0)
  const [dataArray,setDataArray] = useState([])

  const load = async () => {
    setDataArray(await tuner())
    setReady(true)
  }

  // Ran on mount
  useEffect(() => {
    load()
  },[])

  return (
    <>
      <h1>{ready ? 'Ready':'Not Ready'}</h1>
      {dataArray.map((data) => <div>{data}</div>)}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App