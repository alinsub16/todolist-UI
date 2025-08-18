import axios from "axios";

const weatherAPI = axios.create({
    baseURL: import.meta.env.VITE_WEATHER_API_URL,
    params: {
        appid: import.meta.env.VITE_WEATHER_API_KEY,
        units: 'metric',
    },
});

export default weatherAPI;