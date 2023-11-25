import React from 'react'
import { Link } from "react-router-dom";
import roomRent from "../../assets/image/roomrent.jpg";

function Welcome() {
  return (
    <>
    <section className="p-20 pb-70 relative overflow-hidden bg-gradient-to-b from-blue-400 via-blue-700 to-blue-400 text-white">
        <div className="flex justify-between container items-center">
          <div className="flex flex-col gap-8">
            <div className="max-w-690 flex flex-col pt-50 gap-3">
              <h1 className="font-extrabold text-5xl text-white">
                Rooms, Flats
                <br /> & Hotel Near You
              </h1>
              <p className="font-semibold text-2xl text-white">
                Check room availability and get your desired room at a good price!
              </p>
            </div>
            <div className="flex gap-2">
              <Link to={"/"}>
                <button className="text-white h-10 capitalize font-medium text-sm rounded-md bg-blue-500 px-8 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                  Check Room Availability
                </button>
              </Link>
              <Link to={"./profile/places"}>
                <button className="text-blue-800 border h-10 capitalize font-medium text-sm rounded-md border-blue-800 px-8 hover:bg-blue-100 focus:outline-none focus:border-blue-500 active:bg-blue-200">
                  Post Room Availability
                </button>
              </Link>
            </div>
          </div>
          <div className="rounded-md overflow-hidden shadow-lg">
            <img src={roomRent} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Welcome
