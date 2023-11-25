import React from 'react'
import RoomCard from './RoomCard'

function Room() {
  return (
    <>
    <div className="bg-gray-100 min-h-screen p-8">
      <div className='font-bold text-2xl mb-5 ml-5'>
        Search for Rooms 
      </div>
      <div className="max-w-3xl flex gap-6 mx-auto mb-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded-2xl"
        />
        <button className='bg-blue-500 p-4 rounded-2xl'>
            Search
        </button>
      </div>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />

      </div>
    </div>
    </>
  )
}

export default Room
