import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeatherAsync } from "./store/weatherSlice";
import { RefreshIcon } from "@heroicons/react/solid";
function App() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  const [city, setCity] = useState("");
  useEffect(() => {
    console.log(weather);
  }, [weather]);
  const changeCity = (city) => {
    dispatch(getWeatherAsync(city));
  };
  return (
    <main className="bg-big-clouds bg-cover h-screen">
      {weather ? (
        <div
          className={`${
            weather.current.is_day ? "bg-opacity-10" : "bg-opacity-80"
          } z-10 bg-black w-screen h-screen`}
        >
          <div className="container lg mx-auto h-screen flex justify-center items-center">
            <div className="relative flex flex-col justify-center items-center backdrop-filter max-w-screen-sm backdrop-blur bg-gray-700 bg-opacity-30 rounded-xl p-12 text-white">
              <div className="text-4xl lg:text-6xl">
                {weather.location.name}
                <span className="text-xl lg:text-4xl">
                  {" "}
                  - {weather.location.country}
                </span>
              </div>
              <div className="flex flex-row items-end gap-4 mt-4">
                <img
                  src={weather.current.condition.icon}
                  alt="weather condition icon"
                  className="w-24"
                />
                <div className="text-3xl text-center mb-1">
                  {weather.current.temp_c}°c
                </div>
              </div>
              <div className="mt-4">
                Feels like {weather.current.feelslike_c}°c
              </div>
              <div
                className="absolute -top-4 -right-4 z-30 transform hover:rotate-45 cursor-pointer"
                onClick={() => changeCity(city)}
              >
                <RefreshIcon className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center flex-col gap-1">
          <input
            type="text"
            placeholder="City Name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-40 outline-none p-2 focus:ring-2 ring-black rounded text-center"
            autoFocus
          />
          <button
            className="w-40 px-4 py-2 bg-blue-600 rounded text-white hover:bg-gray-700"
            onClick={() => changeCity(city)}
          >
            Get Weather
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
