import { useState } from 'react'

const Statistics = (props) => {
  // conditional redering
  if(props.all === 0){
    return(
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }
  return(
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={props.all} />
      <StatisticLine text="average" value={(props.good + props.neutral*0 +props.bad*(-1))/(props.all)} />
      <StatisticLine text="positive" value={(props.good/props.all)}/>
    </div>
  )
}

const StatisticLine = (props) =>{
  if (props.text === "good"){
    return(
      <p> good {props.value}</p>
    )
  }
  if (props.text === "neutral"){
    return(
      <p> neutral {props.value}</p>
    )
  }
  if (props.text === "bad"){
    return(
      <p> bad {props.value}</p>
    )
  }
  if (props.text === "all"){
    return(
      <p> all {props.value}</p>
    )
  }
  if (props.text === "average"){
    return(
      <p> average {props.value}</p>
    )
  }
  if (props.text === "positive"){
    return(
      <p> positive {props.value} %</p>
    )
  }
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
