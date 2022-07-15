
const App = () => {
  const course = 'Half Stack application development'
  

  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts =[part1, part2,part3]
  const excercise =[exercises1, exercises2, exercises3]

  return (
    <>
      <Header course ={course}/>
      <Content parts = {parts}/>
      <Total parts = {parts}/>
    </>
  )
}

const Header =(props) =>{
  return(
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Content =(props) =>{
  return (
    <>
      <Part parts={props.parts[0]}/>
      <Part parts={props.parts[1]}/>
      <Part parts={props.parts[2]}/>
    </>
  )
}

const Part =(props) =>{
  return(
    <p> {props.parts.part} {props.parts.excercise}</p>
    )

}
const Total= (props) =>{
  return(
    <>
      <p>Number of exercises {props.parts[0].excercise + props.parts[1].excercise + props.parts[2].excercise }</p>
    </>
  )
}

export default App