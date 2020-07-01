import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

const CountryProfile = ({ match, history }) => {
  const [countryInfo, changeCountry] = useState(null)
  const [weather, changeWeather] = useState({})
  const { temperature, weather_icons, wind_speed, precip } = weather

  const onGetCountryDetails = async () => {
    const { name } = match.params
    if (typeof name != 'string' || name.length < 1) return history.push('/')
    try {
      const countryRes = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
      changeCountry(countryRes.data[0])
    } catch {
      history.push('/404')
    }
  }

  const onGetWeather = async () => {
    try {
      const weatherRes = await axios.get(`http://api.weatherstack.com/forecast?access_key=3501c66bb7b90eb44e2305c868eb8b71&query=${countryInfo.capital}`)
      changeWeather(weatherRes.data.current)
    } catch {
      alert('Failed to fetch weather')
    }
  }

  useEffect(() => {
    onGetCountryDetails()
  }, [])

  if (!countryInfo) return <h1>Loading...</h1>


  return (
    <div className='container'>
      <h1>Country: {countryInfo.name}</h1>
      <h1>Capital: {countryInfo.capital}</h1>
      <h1>Population: {countryInfo.population}</h1>
      <h1>Latlng: {countryInfo.latlng.join(', ')}</h1>
      <img width={200} src={countryInfo.flag} alt='flag' />
      <br />
      <button onClick={onGetWeather}>Capital Weather</button>

      {
        Object.keys(weather).length > 0 && (
          <>
            <h1>Temperature: {temperature}</h1>
            {weather_icons.map((icon, i) => <img key={i} alt='weather' src={icon} />)}
            <h1>Wind speed: {wind_speed}</h1>
            <h1>Precip: {precip}</h1>
          </>
        )
      }
    </div>
  )
}

export default withRouter(CountryProfile)
