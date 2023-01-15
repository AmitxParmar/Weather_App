import Head from 'next/head'
import { Inter } from '@next/font/google'

import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const api = {
    key: process.env.NEXT_APP_WEATHER_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/"
  }

  return (
    <>
      <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
        <main>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {(typeof weather.main != "undefined") ? (
            <div>
              <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">
                  {Math.round(weather.main.temp)}°c
                </div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>
          ) : ('')}
        </main>
      </div>
      );
    </>
  )
}
