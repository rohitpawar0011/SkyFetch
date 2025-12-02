import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
   const [weatherInfo, setWeatherInfo] = useState({
         city:"pune",
            temp: 25,
            tempMin: 25,
            tempMax: 25,
            humidity: 154,
            feelslike: 25,
            weather: "cool",
       });

       
   let updatateInfo = (result) =>{
    setWeatherInfo(result);
   }

    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updatateInfo={updatateInfo}/>
           <InfoBox info={weatherInfo}/>
        </div>
    )
};