import React, { useState } from 'react'
import './styles/WeatherCard.css'

const WeatherCard = ({ weather,temp }) => {

  const handleChangeTemp = () => { setIsCelsius(!isCelsius)

  }
  
  const [isCelsius, setIsCelsius] = useState(true)

  return (
    <article className='weather'>
      <h1 className='weather_title'>Weather App</h1>
     <h2 className='weather_location'>{weather.name}, {weather?.sys.country}</h2>
          <div className='weather_body'>
            <div className='weather_img-container'>
              <img className='weather_img'
                src={weather.weather[0].icon && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt=''
              />
            </div>
            <section className='weather_info'>
              <h3 className='weather_condition'>{weather.weather[0].description}</h3>
              <ul className='weather_list'>
                <li className='weather_item'>
                  <span className ='weather_label'>Wind Speed</span>
                  <span className='weather_value'>{weather?.wind.speed} m/s </span>
                  </li>
                <li className='weather_item'>
                  <span className ='weather_label'>Clouds</span>
                  <span className='weather_value'>{weather?.clouds.all}</span> % 
                  </li>
                <li className='weather_item'>
                  <span className ='weather_label'>Pressure</span>
                  <span className='weather_value'>{weather?.main.pressure} hPa </span>
                  </li>
              </ul>
            </section>
          </div>

          <h2 className='weather_temp'>{ isCelsius ? `${temp?.celsius} ºC `:`${temp?.fahrenheit } ºF`}</h2>

          <button className ='buton' onClick={handleChangeTemp}>{isCelsius ? 'Change to ºF' : 'Change to ºC'}</button>
    </article>
  )
}

export default WeatherCard
