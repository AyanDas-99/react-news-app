import axios from "axios"
import { useEffect, useState } from "react"
import wind from '../media/wind.png';
import cloud from '../media/cloud_sun.png';
import drops from '../media/drops.png';
import therm from '../media/thermometer.png'
import loc from '../media/loc.png'
import '../styles/weather.css'

export const Weather = (props) => {

    const [weather, setWeather] = useState({})
    const [weatherLoaded, setLoaded] = useState(false)

    const options = {
        method: 'GET',
        url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
        params: { city: props.city },
        headers: {
            'X-RapidAPI-Key': 'e0b6052bacmshcfe5da2fca3f2e5p14d484jsn5c655e5224c5',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    useEffect(() => {
        axios.request(options).then(function (response) {
            setWeather(response.data)
            setLoaded(true)
            console.log(weather)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    if (!weatherLoaded) {

        return (
            <div className="weather">
                <p className="city"><img src={loc} />{props.city}</p>
                <div className="hero">
                    <div className="temp"><img src={cloud} /><span>36</span>&#8451;</div>
                    <div className="other">
                        <p><img src={therm} />Feels like 40</p>
                        <p><img src={drops} />Humidity: <span>5</span></p>
                        <p><img src={wind} />Wind: <span>5</span></p>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return <div></div>
    }
}