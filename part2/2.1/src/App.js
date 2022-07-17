import React from 'react'

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

const  Course =(props) =>{
  return(
    <>
      {console.log(props)}
      <Headers course={props.course}/>
      <Content course={props.course}/>
    </>
  )
}

const Headers =(props) =>{
  return(
    <>
    {console.log(props)}
    <h1>{props.course.name}</h1>
    </>
  )
}

const Content =(props) =>{
  return(
    <>
    {console.log(props)}
    <Part {...props.course.parts[0]}/>
    <Part {...props.course.parts[1]}/>
    <Part {...props.course.parts[2]}/>

    </>
  )
}

const Part = (props) =>{
  return (
    <>
      {console.log(props)}
      <p>{props.name} {props.exercises}</p> 
    </>
  )
}
export default App;
