const handleNameChange =(event) =>{
    setNewName(event.target.value)
  }
const handleNumberChange =(event) =>{
    setNewNumber(event.target.value)
  }

const PersonForm =() =>{
    return(
        <form onSubmit={addPerson}>
            <div>
                name: <input value ={newName} onChange={handleNameChange}/><br/>
                number: <input value={newNumber} onChange={handleNumberChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>)
} 


export default PersonForm;