const handlerSearchChange = (event) =>{
    setSearch(event.target.value)
}

const Filter =() =>{
    return(
        <form>
            <div>
                filter shown with <input value={search} onChange={handlerSearchChange}/>
            </div>
        </form>

    )
}


export default Filter;
