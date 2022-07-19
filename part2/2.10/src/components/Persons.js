
const Persons =(props) =>{
    return(
        {filter.map((person) => {
            return (
            <p key={person.id}>
                {person.name} - {person.number}
            </p>
        );
        })}
    )
}

export default Persons;

