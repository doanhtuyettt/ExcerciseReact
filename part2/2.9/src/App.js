import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setshowAll] = useState(true)

  const addPerson =(event) => {
    event.preventDefault()
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
  }

  const handleNameChange =(event) =>{
    setNewName(event.target.value)
  }
  const handleNumberChange =(event) =>{
    setNewNumber(event.target.value)
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <form>
        <div>
          filter shown with  <input/>
        </div>
      </form>
      
      <h2>add a new</h2>
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