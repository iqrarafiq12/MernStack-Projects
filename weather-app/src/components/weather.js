import React, { useState } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";

function WeatherApp() {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("");

    const apiKey = "660af4c5b3096ea7dc4abe592f5d7d01";

    const getWeatherData = async () => {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeather(response.data);
    };

    return (
        <div className="flex item-center justify-center flex-col py-20 mx-auto mt-6 mb-6 max-w-sm p-6">
            <div className="bg-white p-8 rounded-lg text-center shadow-lg">
                <img src="https://i.pinimg.com/originals/8e/a3/f8/8ea3f820b1ef8cf4b04cecb098c43709.gif" alt="logo" class="h-25 mr-4" />
                <h1 className="text-lg lg:text-center md:text-4xl md:mb-3 text-cyan-900 font-bold mb-2">Weather App</h1>
                <div className='block items-center justify-center mt-4'>
                    <input
                        type="text"
                        placeholder="Enter city name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className='block items-center justify-center mt-4'>
                    <button
                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-white bg-cyan-900 hover:bg-cyan-700 leading-tight focus:outline-none focus:shadow-outline"
                        onClick={getWeatherData}
                    >
                        Get Weather
                    </button>
                </div>
                {weather && (
                    <div className="block items-center justify-center  text-center mt-4">
                        <h2 className="text-xl font-bold">{weather.name}</h2>
                        <div className="flex items-center mt-2">
                            <img
                                src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                                alt={weather.weather[0].description}
                                className="w-12 h-12 mr-4"
                            />
                            <div>
                                <p className="text-lg font-semibold">
                                    {Math.round(weather.main.temp)}&deg;C
                                </p>
                                <p>{weather.weather[0].description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WeatherApp;
