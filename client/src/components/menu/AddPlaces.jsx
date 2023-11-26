import React from "react";
import axios from "axios";
import Perks from "./Perks";
import { useState } from "react";

function AddPlaces() {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhoto, setAddedphoto] = useState([]);
  const [photoLink, setPhotolink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  function preHeader(text) {
    return <h2 className="p-1 text-2xl  mt-4">{text}</h2>;
  }
  function preDescription(text) {
    return <p className=" p-1 text-gray-300 text-sm">{text}</p>;
  }
  function preInput(header, description) {
    return (
      <div className="">
        {preHeader(header)}
        {preDescription(description)}
      </div>
    );
  }
  return (
    <>
      <div className="border  border-gray-800 mt-8 m-3 rounded-xl p-6">
        <form action="">
          {preInput(
            "Title",
            "Title for your place . Should be short and simple"
          )}
          <input type="text" className="" placeholder="title" />
          {preInput("Address", "Address for your place")}
          <input type="text" placeholder="address" />
          {preInput("Photos", "more = better")}
          <div className="flex gap-2">
            <input type="text" placeholder="add using link .....jpg" />
            <button className="bg-gray-200 px-4 rounded-2xl">
              Add&nbsp;photo
            </button>
          </div>
          <div className="grid gap-2 grid-cols-3 lg:grid-cols-6 md:grid-cols-4 mt-4">
            {/* {addedPhoto.length > 0 &&
                  addedPhoto.map((link) => ( */}
            <div>
              <img
                className="rounded-2xl"
                // src={"http://localhost:4000/uploads/" + link}
                alt=""
              />
            </div>
            {/* //   ))} */}
            <label className="flex gap-2 justify-center cursor-pointer items-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
              <input type="file" className="hidden" multiple name="" id="" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
              Upload
            </label>
          </div>
          {preInput("Description", "Description of your place")}
          <textarea className=" h-36" />
          {preInput("Perks", "Perks for your place")}
          <div className="grid mt-2 gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <Perks selected={perks} onChange={setPerks} />
          </div>
          {preInput("Extra info", "House rules etc")}
          <textarea
            value={extraInfo}
            onChange={(e) => setExtraInfo((e) => e.target.value)}
          />
          {preInput("Check in and out time", "add check in and out time")}
          <div className="grid sm:grid-cols-3 gap-7">
            <div>
              <h3 className="mt-2 mb-1 p-1">check in time</h3>
              <input
                type="text"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                placeholder="14:00"
              />
            </div>
            <div>
              <h3 className="mt-2 mb-1 p-1">check out time</h3>
              <input
                type="text"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                placeholder="15:00"
              />
            </div>
            <div>
              <h3 className="mt-2 mb-1 p-1">Max number of guest</h3>
              <input
                type="text"
                value={maxGuests}
                onChange={(e) => setMaxGuests(e.target.value)}
              />
            </div>
          </div>
          <div className="text-center p-4 ">
          <button className="bg-blue-500 primary my-4 border rounded-lg w-24 p-2 ">Save</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddPlaces;
