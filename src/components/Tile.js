import React from 'react'
import { ReactPropTypes } from 'react'
function Tile(props) {
  return (
    <div className="flex flex-col pb-6 w-[200px]  bg-gradient-to-b rounded-md from-[#464646] from-0% to-[#1D2540]">
          <div className="flex gap-2 px-6 pt-4 items-center ">
            <img src="/sunny.svg" />
            <h1 className="text-white text-xl">Sunny</h1>
          </div>
          <div className="flex justify-center">
            <hr className="w-full my-3 bg-[rgba(255,255,255,0.20)] h-[2px] border-none" />
          </div>
          <div className="items-center flex flex-col font-bold gap-4">
            <h1 className="text-white">{props.High_Temp}</h1>
            <h1 className="text-white">{props.Low_Temp}</h1>
            <h1 className="text-white">{props.Humidity}</h1>
            <h1 className="text-white">{props.Sunrise_Time}</h1>
            <h1 className="text-white">{props.Sunset_Time}</h1>
          </div>
        </div>
  )
}

export default Tile
