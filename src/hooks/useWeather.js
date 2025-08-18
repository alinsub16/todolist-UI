import { useState, useEffect } from "react";
import weatherAPI from "../api/weatherAPI";

const useWeather = (initialCity = "Cebu City", coords = null) => {
    const [city, setCity] = useState(initialCity);
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


        const fetchWeather = async () => {
              setLoading(true);
              setError(null);
            try{
                let response;
                if(coords) {
                    const {lat, lon} = coords;
                    response = await weatherAPI.get('/weather', {
                        params: {lat, lon},
                    });
                }else if(city) {
                response = await weatherAPI.get('/weather', {
                    params: {q: city},
                });
                }                
                setWeather(response.data);
            }catch (err){
                setError(err?.response?.data?.message || 'Failed to fetch weather data');
            }finally{
                setLoading(false);
            }
        };
        useEffect(() => {
            if (city || coords) {
                fetchWeather();
            }
        }, [city, coords]);
         const searchCity = (newCity) => {
            setCity(newCity);
        };
     return { weather, loading, error , searchCity}; 
};

export default useWeather;