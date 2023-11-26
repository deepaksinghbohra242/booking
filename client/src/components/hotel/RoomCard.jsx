import React from "react";

function RoomCard() {
  return (
    <>
      <div className="flex justify-between gap-5 bg-white p-6 rounded shadow-md">
        <div className="flex gap-5">
          <img
            src="https://via.placeholder.com/300"
            alt="Room"
            className="object-cover mb-4 w-45  h-35
         rounded"
          />
          <div className="">
            <h2 className=" text-lg font-semibold mb-2">Room Title</h2>
            <p>wi tv parking</p>
            <p>owner</p>
            <p>Date:2/2/2020</p>
            <p className="text-gray-600  mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              eius debitis!
            </p>
          </div>
        </div>
        <div className=" ">
          <div className="flex flex-col mr-10  mt-1">
            <span className="text-gray-500">Price: $100/night</span>
            <p className="text-gray-500">Place: City, Country</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomCard;
