import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [search, setSearch] = useState('')
  const [country, setCountry] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log(response)
        setCountry(response.data)
      })
  }, [])
  const handlerSearch = (event) => {
    return (
      setSearch(event.target.value)
    )
  }
  const filters = country.filter(countries => countries.name.common.toLowerCase().includes(search.toLowerCase()))
  console.log(filters);

  // const renderFilterComponent =  () =>{
  //   if(filters)
  // }

  return (
    <form>
      <div>find countries <input value={search} onChange={handlerSearch} />
        {(filters.length === 1) ?
          (filters.map((countries) => (<React.Fragment key={countries.name.common}><h1 >{countries.name.common}</h1>
            <p>capital {countries.capital}</p>
            <p>area {countries.area}</p>

            <div><b>languages :</b> {Object.keys(countries.languages).map((key)=><li>{countries.languages[key]}</li>)}</div>
            <img src='https://flagcdn.com/w320/ch.png' alt="flag coutry"/>
          </React.Fragment>)
          ))
          : (filters.length > 10) ?
          <div> Too many matches, specify another filter</div>
          :
          (filters.map((countries) => <div key={countries.name.common}>{countries.name.common}</div>))

        }



      </div>
    </form>


  );
}

export default App;
