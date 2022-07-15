import { useState } from 'react'

const Statistics = (props) => {
  return (
    <>
      <h1>statistics</h1>
      <p> good {props.good}</p>
      <p> neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p> all {props.all}</p>
      <p> average {(props.good +props.neutral*0 +props.bad*(-1))/3}</p>
      <p>positive {props.good/props.all} %</p>
    </>
  )
}

const App = () => {
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
      <Statistics good ={good} neutral={neutral} bad={bad} all={all}/>
      
    </div>
  )
}

export default App
