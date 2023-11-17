import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Tile from "../components/Tile";

function DashBoard() {
  const api_key = "f14087b0d3f745c6ba2225616231009";
  const currentDate = new Date();

  const formattedDate = currentDate.toISOString().split("T")[0];
  const nextDay1 = new Date(currentDate);
  nextDay1.setDate(currentDate.getDate() + 0);

  const nextDay2 = new Date(currentDate);
  nextDay2.setDate(currentDate.getDate() + 1);

  const nextDay3 = new Date(currentDate);
  nextDay3.setDate(currentDate.getDate() + 2);

  const nextDay4 = new Date(currentDate);
  nextDay4.setDate(currentDate.getDate() + 3);

  const nextDay5 = new Date(currentDate);
  nextDay5.setDate(currentDate.getDate() + 4);

  function Datetoshow(date) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return (
      date.getDate().toString().padStart(2, "0") +
      " " +
      monthNames[date.getMonth()] +
      " " +
      date.getFullYear()
    );
  }

  const daytoshow1 = Datetoshow(nextDay1);
  const daytoshow2 = Datetoshow(nextDay2);
  const daytoshow3 = Datetoshow(nextDay3);
  const daytoshow4 = Datetoshow(nextDay4);
  const daytoshow5 = Datetoshow(nextDay5);
  const [WeatherData, setWeatherData] = useState([
    {
      date: daytoshow1,
      temp_max: 22.6,
      temp_min: 22.6,
      humidity: 53,
      Sunrise: "06:08 AM",
      Sunset: "06:08 AM",
      condition:"sunny"
    },
    {
      date: daytoshow2,
      temp_max: 22.6,
      temp_min: 22.6,
      humidity: 53,
      Sunrise: "06:08 AM",
      Sunset: "06:08 AM",
      condition:"sunny"
    },
    {
      date: daytoshow3,
      temp_max: 22.6,
      temp_min: 22.6,
      humidity: 53,
      Sunrise: "06:08 AM",
      Sunset: "06:08 AM",
      condition:"sunny"
    },
    {
      date: daytoshow4,
      temp_max: 22.6,
      temp_min: 22.6,
      humidity: 53,
      Sunrise: "06:08 AM",
      Sunset: "06:08 AM",
      condition:"sunny"

    },
    {
      date: daytoshow5,
      temp_max: 22.6,
      temp_min: 22.6,
      humidity: 53,
      Sunrise: "06:08 AM",
      Sunset: "06:08 AM",
      condition:"sunny"

    },
  ]);
  const UpdateWeatherData = (dayIndex, newData) => {
    setWeatherData((prevData) => {
      const newDataArr = [...prevData];
      newDataArr[dayIndex] = { ...newDataArr[dayIndex], ...newData };
      return newDataArr;
    });
  };

  const [searchedplace, setsearchedplace] = useState("Mumbai");
  const [placetoshow, setplacetoshow] = useState("London");
  const [placetoshow2, setplacetoshow2] = useState("New York");

  const [date, setdate] = useState(formattedDate);
  async function search() {
    var url = `http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${searchedplace}&days=5`;
    let responce = await fetch(url);
    let data = await responce.json();
    setplacetoshow(data.location.name);
    setplacetoshow2(data.location.region);
    for (let i = 0; i < 3; i++)
      UpdateWeatherData(i, {
        temp_max: data.forecast.forecastday[i].day.maxtemp_c,
        temp_min: data.forecast.forecastday[i].day.mintemp_c,
        humidity: data.forecast.forecastday[i].day.avghumidity,
        Sunrise: data.forecast.forecastday[i].astro.sunrise,
        Sunset: data.forecast.forecastday[i].astro.sunset,
      });
  }
  useEffect(() => {
    search();
  }, []);

  return (
    <div className="h-screen w-screen bg-[#BFCAD6] justify-center">
      <Navbar />
      <div className="lg:px-[15%] my-10 lg:flex p-2 flex flex-col lg:flex-row  gap-4 lg:justify-between ">
        {window.innerWidth < 640 && (
          <div className="flex   items-center relative ">
            <input
              onChange={(e) => {
                setsearchedplace(e.target.value);
              }}
              className="flex-1   h-10 shadow-[2px_2px_4px_0px_rgba(0,0,0,0.12)] rounded-md px-3 outline-none"
              placeholder="Search your city here..."
            ></input>
            <img
              onClick={search}
              className="ml-[85%] absolute"
              src="/Search Icon.svg"
              alt="Search Icon"
            />
          </div>
        )}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center ">
            <img src="/location.svg" />
            <h1 className="text-[#1D2540] font-bold text-xl cursor-pointer">
              {placetoshow},{placetoshow2}
            </h1>
          </div>
          <div className=" font-normal text-sm text-[#606060] ml-3">
            27°10'36'' N & 78°0'29'' E
          </div>
        </div>
        {window.innerWidth > 640 && (
          <div className="flex w-[35%] items-center relative ">
            <input
              onChange={(e) => {
                setsearchedplace(e.target.value);
              }}
              className="flex-1  h-10 shadow-[2px_2px_4px_0px_rgba(0,0,0,0.12)] rounded-md px-3 outline-none"
              placeholder="Search your city here..."
            />
            <img
              onClick={search}
              className="ml-[85%] absolute cursor-pointer"
              src="/Search Icon.svg"
              alt="Search Icon"
            />
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <hr className="w-[75%] bg-[rgba(0,0,0,0.20)] h-[3px] border-none" />
      </div>
      <div className="flex mt-5 gap-4 p-5 overflow-scroll lg:overflow-hidden   items-center">
        <div>
          <div>
            <h1 className="text-sm ml-1 text-[#444]">Select Date:</h1>
            <input
              onChange={(e) => {
                setdate(e.target.value);
              }}
              value={date}
              pattern="\d{4}-\d{2}-\d{2}"
              type="date"
              className="p-2 bg-[#D9D9D9] border border-[#464646] rounded-md"
            />
          </div>
          <div className="flex flex-col gap-[17px] mt-9 font-medium">
            <h1>High Temperature</h1>
            <h1>Low Temperature</h1>
            <h1>Humidity</h1>
            <h1>Sunrise Time</h1>
            <h1>Sunset Time</h1>
          </div>
        </div>
        {WeatherData &&
          WeatherData.map((data) => (
            <div className="flex flex-col items-center">
              <h1 className="text-[#444] font-medium text-xl">{data.date}</h1>
              <Tile
                High_Temp={data.temp_max}
                Low_Temp={data.temp_min}
                Humidity={data.humidity}
                Sunrise_Time={data.Sunrise}
                Sunset_Time={data.Sunset}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default DashBoard;
