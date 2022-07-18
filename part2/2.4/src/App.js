import React from 'react'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}

const  Course =(props) =>{
  return(
    <>
    <h1>Web development curriculum</h1>
      <Headers courses={props.courses[0]}/>
      <Content courses={props.courses[0]}/>
      <br/>
      <Headers courses={props.courses[1]}/>
      <Content courses={props.courses[1]}/>
    </>
  )
}

const Headers =(props) =>{
  return(
    <>
    <h3>{props.courses.name}</h3>
    </>
  )
}

const Content =(props) =>{
  const {courses} = props;
  return(
    <>
    {courses.parts.map(part => 
    <Part part = {part}/>)}
    <Sum part ={courses.parts}/>
    </>
  )
}


const Part = (props) =>{
  const {part} = props
  console.log(props.part)
  return (
    // <>{props.parts.map(part => 
    // <p key={props.parts.id} >{part.name} {part.exercises}</p >  
    // )}
    // </>
    <p>{part.name} {part.exercises}</p>
  )
}

const Sum =(props) =>{
  const init = 0

  const sum = props.parts.reduce((preValue, currentValue) => preValue + currentValue.exercises,init)
  return(
    <>
    <b>total of {sum} exercises</b>
    </>
  )
}
export default App;
