import { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";

const Weather = () => {
    const [weather, setWeather]= useState(null);

    useEffect(() => {
        loadInfo();
    },[]);
    useEffect(() => {
        document.title=`Weather | ${weather?.location.name ?? ""} `;

    }, [weather]);

    async function loadInfo(city = 'london'){
        try{
            const request = await fetch(
                `${process.env.REACT_APP_URL}key=${process.env.REACT_APP_KEY}&q=${city}&aqi=no`
                );


                const json = await request.json();
                setWeather(json);
                console.log(json);
        } catch (error) {

        }
    }

    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city);
    }

    return ( 
    <>
    <WeatherForm onChangeCity={handleChangeCity} />
    <WeatherMainInfo weather={weather} />
    </> 
    );
}
 
export default Weather;