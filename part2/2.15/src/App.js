import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,number : '39-44 5323523'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] =useState('')

  const addPerson =(event) => {
   
    const person ={
      name : newName,
      number :newNumber,
      id: persons.length +1,
    }

    for(var i=0 ; i < persons.length; i++){
      console.log(newName);
      if(persons[i].name === newName){
        console.log(newName);
        // alert(persons[i].name + ' is already added to phonebook');
        alert(`${newName} is already added to phonebook`);
        return;
      }
    }
    
    setPersons(persons.concat(person))
    setNewName('')

    axios
    .post('http://localhost:3001/persons', person)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
    })
  }

  const handleNameChange =(event) =>{
    setNewName(event.target.value)
  }
  const handleNumberChange =(event) =>{
    setNewNumber(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value ={newName} onChange={handleNameChange}/><br/>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =><p key ={person.nanoid}> {person.name} {person.number}</p>)}

    </div>
  )
}

export default App