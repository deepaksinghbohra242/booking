import React from 'react'

function RoomCard() {
  return (
    <>
    <div className="bg-white p-4 rounded shadow-md">
      <img
        src="https://via.placeholder.com/300"
        alt="Room"
        className="w-full h-40 object-cover mb-4 rounded"
      />

      <h2 className="text-lg font-semibold mb-2">Room Title</h2>
      <p className="text-gray-600 mb-4">Room details go here...</p>

      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Details
      </button>

      <div className="mt-4">
        <span className="text-gray-500">Price: $100/night</span>
        <p className="text-gray-500">Place: City, Country</p>
      </div>
    </div>
    </>
  )
}

export default RoomCard
