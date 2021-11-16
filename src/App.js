import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Header from './Components/Header'
import Weather from './Components/Weather'

const App = () => {
  const [weatherInfo, setWeatherInfo] = useState([])
  const [locationInfo, setlocationInfo] = useState([])
  const [condition, setCondition] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`http://api.weatherapi.com/v1/current.json?key=c8abaccb342f4b11af6132148211611&q=${query}&aqi=yes`)

      setlocationInfo(result.data.location)
      setWeatherInfo(result.data.current)
      setCondition(result.data.current.condition)
      console.log(query)
    }

    fetchItems()

  }, [query])


  return (
    <div>
      <Header getQuery={(e) => setQuery(e)}/> 
      <Weather condition={condition} locationInfo={locationInfo} weatherInfo={weatherInfo}/>
    </div>
  )
}

export default App


/*
  1) Backbones
    - Create searchbar 
      - make it have dropdown options
      - or make it create a list where you have to pick the location by letter 
      - or jump to the one with the most simular name  
    - Current weather banner
      Left
         - Location (Have)
         - time 
         - degrees
         - words describing weather
      Right
        - image
    - could add more information later at the bottom 




*/