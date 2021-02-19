import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Card from './components/Card';
import Header from './components/Header';

const API_KEY = "0680f454d202aea536690a0c08f8e1c8"

const kelvinToCelcius = (f) => {
  return Math.round(f - 273)
}



function App() {
  const [data, setData] = useState({ main: { temp: 0 }, weather: [{ description: '' }], wind: { speed: 0 } })
  const [city, setCity] = useState("")
  const [isDataLoading, setIsDataLoading] = useState(false)
  const [lang, setLang] = useState('eng')
  const [degrees, setDegrees] = useState('C')


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value !== city)
        setIsDataLoading(true)
      setCity(e.target.value)
    }
  }
  useEffect(() => {
    if (city !== "")
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${degrees === 'F' ? 'standart' : 'metric'}&lang=${lang}&appid=${API_KEY}`)
        .then(res => {
          setData(res.data)
          setIsDataLoading(false)
        })
        .catch(err => {
          setData({ noCity: true })
          setIsDataLoading(false)
        })
  }, [city, lang, degrees])

  return (
    <>
      <Header setLang={setLang} lang={lang} setDegrees={setDegrees} degrees={degrees} />
      <div className="container">
        <h1>Weater App</h1>
        <label>Enter the city</label>
        <input type="text" onKeyPress={handleKeyPress} />
        {isDataLoading ? <h4>Loading...</h4> : ''}
        <Card
          isDataLoading={isDataLoading}
          lang={lang}
          city={data.noCity ? 'no city found' : data.name}
          temperature={data.noCity ?? `${Math.round(data.main.temp)} ° ${degrees}`}
          wind={data.noCity ?? data.wind.speed}
          humidity={data.noCity ?? data.main.humidity}
          description={data.noCity ?? data.weather[0].description}
          icon={data.noCity ?? data.weather[0].icon}
        />
        {console.log(data)}
      </div >
    </>
  );
}

export default App;
