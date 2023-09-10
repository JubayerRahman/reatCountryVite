import React from 'react'
import "./Country.css"

const Country = ({country , visitedFunction}) => {
    const {flags , name , capital , cca2 ,region} = (country)
  return (
    <div className='country' key={cca2} > 
        <img src={flags.png} alt='flag'/>
                <div className='CountryData'>
                    <h3>Name: {name.common}</h3>
                    <p>Capital: {capital}</p>
                    <p>Region: {region}</p>
                    <button className='visitButton' onClick={()=>{visitedFunction(country)}}>visited</button>
                </div>
    </div>
  )
}

export default Country
