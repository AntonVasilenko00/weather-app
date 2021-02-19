const Card = ({ isDataLoading, lang, city, temperature, wind, humidity, description, icon }) => {
  if (city === 'no city found')
    return <h1>no city found</h1>
  if (city !== '' && city !== undefined)
    return (
      <div className={`card ${isDataLoading || city === 'no city found' ? 'card--hidden' : ''}`} >
        <h4 className="card__city">{city}</h4>
        <img className="card__img" alt="some img" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        <div className="card__info">
          <div className="card__wind">
            <h4>{lang === 'eng' ? 'Wind' : 'Ветер'}</h4>
            {wind + (lang === 'eng' ? 'm/s' : 'м/с')}
          </div>
          <div className="card__temperature">
            <h4>{lang === 'eng' ? 'Temp' : 'Температура'}</h4>
            {temperature}
          </div>
          <div className="card__humidity">
            <h4>{lang === 'eng' ? 'Humidity' : 'Влажность'}</h4>
            {humidity + '%'}
          </div>
        </div>
        <div className="card__description">{description}</div>
      </div >
    )
  else
    return ''

}
export default Card
