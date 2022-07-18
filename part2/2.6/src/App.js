import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const addPerson =(event) => {
    event.preventDefault()
    const person ={
      name : newName,
      id: persons.length +1,
    }
    console.log(newName);
    setPersons(persons.concat(person))
    setNewName('')
  }

  const handleNoteChange =(event) =>{
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value ={newName} onChange={handleNoteChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =><p> {person.name}</p>)}

    </div>
  )
}

export default App