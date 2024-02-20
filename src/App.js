import { useState, useEffect } from "react"
import './App.css'
export default function App() {
  const [search, setSearch] = useState("nairobi")
  const [data, setData] = useState("")
  const[clicked,setClicked]=useState(true)
 
  useEffect(()=>{
  /*  API: visualcrossing weather */
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}?unitGroup=us&key=468A4EMVGZ7NASP4R84XPMEZ4&contentType=json`)
    .then(res=>res.json())
    .then(data=>setData(data))
  },[clicked])
  

  function handleClick(){
    setClicked(!clicked)
    console.log(data)
  }


  return (
    <div className="main">
      <h1 className="title">Weather App</h1>
      
      <div className="search">
        <input className="search-box" name="search" value={search.name} placeholder="Enter city name" autoFocus onChange={(e) => setSearch(e.target.value)} />
        <button onClick={handleClick} className="button-29">Search</button>
      </div>
    
      {data && <div className="weather">
        <div className="weather-temp"><h1> {data.currentConditions.temp}&deg;F</h1> <h3>{data.description} </h3> </div> <div className="weather-details"><h3>  {data.currentConditions.conditions}</h3> <p> Wind: {data.currentConditions.windspeed} mph</p>  <p>Humidity: {data.currentConditions.humidity}</p><p> Precipitation: {data.currentConditions.precip} in</p> <p>Sunset: {data.currentConditions.sunset}</p> <p>Sunrise: {data.currentConditions.sunrise}</p>
</div>
      </div>}

    </div>
  )
}