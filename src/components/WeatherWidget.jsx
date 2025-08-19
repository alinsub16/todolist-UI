import React, { useEffect, useState } from 'react'
import useWeather from '../hooks/useWeather'
import SkeletonLoader from './SkeletonLoader';


const WeatherWidget = () => {
    const [coords, setCoords] = useState(null);

    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
             console.log('Coordinates:', position.coords);
            setCoords({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            });
          },
          (err) => {
            console.error('Geolocation error:', err);
          }
        );
      }else{
        console.error('Geolocation not supported');
      }
    }, []);

const {weather, loading, error} = useWeather(null, coords);

    if (loading) return <SkeletonLoader className='h-43 w-full'/>;
    if (error) return <div>Error: {error}</div>;
       if (!weather || !weather.weather || !weather.main ) {
  return <p>No weather data available.</p>;
}

  return (
    <>
      <div className="px-2 py-3 bg-blue-100 rounded-2xl text-gray-800 shadow-md text-center h-43">
        <h3 className="text-2xl font-semibold mb-3">{weather.name}</h3>
        <p className='mb-3'>{weather.weather[0].description}</p>
        <p className="text-3xl font-bold">{Math.round(weather.main.temp)}°C</p>
      </div>
    </>
  )
}

export default WeatherWidget
