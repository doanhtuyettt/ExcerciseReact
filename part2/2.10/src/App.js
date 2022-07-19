import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const filter = !search
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

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

  
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter search={search}/>

      <h3>Add a new</h3>

      <PersonForm 
      newName = {newName} newNumber = {newNumber}
      />

      <h3>Numbers</h3>

      <Persons filter = {filter}/>
    </div>




      

      
  )
}

export default App