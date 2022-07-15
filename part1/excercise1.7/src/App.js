import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const clickGood =() =>{
    return setGood(good+1);
  }
  const clickNeutral =() =>{
    return setNeutral(neutral+1);
  }
  const clickBad =() => {
    return setBad(bad +1);
  }
  return (
    <div>
      <h1>give feedback</h1><br/>

      <button onClick ={clickGood}> good </button>
  
      <button onClick ={clickNeutral}> neutral </button>

      <button onClick ={clickBad}> bad </button>
      <br/>
      <h1>statistics</h1>
      <p> good {good}</p>
      <p> neutral {neutral}</p>
      <p>bad {bad}</p>
      <p> all {all}</p>
      <p> average {(good +neutral*0 +bad*(-1))/3}</p>
      <p>positive {good/all} %</p>
    </div>
  )
}

export default App
