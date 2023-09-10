import { useEffect } from "react"
import { useState } from "react"
import Country from "../Country/Country"
import "./Countries.css"

const Coutries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setvisitedCountries] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=> setCountries(data))
    },[])
    const visitedFunction =(vCountry)=>{
        // console.log(vCountry)
        const newCountryList = [...visitedCountries , vCountry]
        setvisitedCountries(newCountryList)
    }
  return (
    <div>
      <div className="countriesSection">
        <div className="visitedCountry">
            <p className="visitedStatus">Countries I visited: {visitedCountries.length}</p>
            <ol className="visitedList">
                {
                    visitedCountries.map(country=>
                            <li key={country.cca2} title={country.name.common}>
                               <div className="visitedData">
                                    <img className="listFlags" src={country.flags.png}/> 
                                    <span className="visitedname">{country.name.common}</span>
                               </div>
                            </li>
                        
                    )
                }
            </ol>
        </div>
        <div className="divider"></div>
        <div className="countriesDiv">
            <h1>List of all Countries:</h1>
            <div className="SingleCountryDiv">
                {countries.map(country=>
                        <Country key={country.cca2} country={country} visitedFunction={visitedFunction}/>
                    
                )}
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Coutries
