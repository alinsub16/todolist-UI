
import React, { useState } from 'react';
import useWeather from '../hooks/useWeather';
import Spinner from '../components/Spinner';

const WeatherDetails = () => {
    const [input, setInput] = useState("");
    const {weather, loading, error,searchCity} = useWeather();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
        searchCity(input.trim());
        }
    };


  return (
    <>
  <div className=" bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center px-4 py-3 rounded-bl-2xl rounded-br-2xl">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-xl text-white">
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter city"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-3 rounded border border-white bg-white/30 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded bg-white/30 hover:bg-white/40 text-white font-medium"
          >
            Search
          </button>
        </form>

        {loading && <Spinner />}
        {error && <div className="text-red-300 text-center">{error}</div>}

        {weather && (
          <div className="text-center mt-4">
            <h3 className="text-2xl font-bold mb-2">{weather.name}</h3>

            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt={weather.weather[0].description}
              className="mx-auto h-50"
            />

            <p className="capitalize text-lg">{weather.weather[0].description}</p>
            <p className="text-5xl font-bold mt-2">{Math.round(weather.main.temp)}°C</p>

            <div className="mt-4 space-y-1 text-sm">
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Wind: {weather.wind.speed} m/s</p>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default WeatherDetails;
