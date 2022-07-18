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
      {persons.map(person =><p key ={person.nanoid}> {person.name}</p>)}

    </div>
  )
}

export default App