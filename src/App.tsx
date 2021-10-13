import { useEffect, useState } from "react";
import { Button, Icon, Input } from "semantic-ui-react";
import { weather } from "./inc/Service";
import { Weather } from "./Model/IWeather";
import $ from 'jquery';

function App() {
  const [search, setSearch] = useState("")
  const [weatherData, setWeatherData] = useState<Weather>()

  useEffect(() => {
    setWeatherData(undefined)
  }, [])

  function fncSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(search)
    weather(search).then(res => setWeatherData(res.data))
      $(".toggle").toggle()
  }

  return (
    <div className="card">
      <form onSubmit={(e) => fncSubmit(e)} className="formCard" >
        <Input className="formInput" placeholder='Search...' onChange={(e) => { setSearch(e.target.value) }} />
        <Button className="btn" icon><Icon name='search' onClick={(e:any)=>{ $(".toggle").show()} }/></Button>
      </form>
      {weatherData !== undefined ? <div>
        <div>
          <h2 className="text">{weatherData?.location.name}</h2>
          <h4 className="dataCountry">{weatherData?.location.country}</h4>
        </div>
        <h1 className="text">{weatherData?.current.temperature} °C</h1>
        <div className="weatherIcon">
        <img className="icons" src={weatherData?.current.weather_icons[0]} alt=""></img>
          <h4 className="text"> {weatherData?.current.weather_descriptions}</h4>
        </div>
        <div className="weatherDetails">
          <h6 className="next">Rüzgar Hızı:{weatherData?.current.wind_speed}</h6>
          <h6 className="next">Nem Miktarı:{weatherData?.current.humidity}</h6>
        </div>
      </div>
        : <div></div>}
    </div>
  );
}

export default App;
