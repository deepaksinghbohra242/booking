import React, { useState, useEffect } from 'react';
import RoomCard from './RoomCard';
import axios from 'axios';

function Room() {
  const [roomDetails, setRoomDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [filteredRoomDetails, setFilteredRoomDetails] = useState([]);

  useEffect(() => {
    axios.get("/place/fetchrooms")
      .then((response) => {
        setRoomDetails(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Filter room details based on the address input
    const filteredRooms = roomDetails.filter(room =>
      room.address.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredRoomDetails(filteredRooms);
  }, [searchInput, roomDetails]);

  const handleSearch = () => {
    // Update the filtered room details based on the address input
    setFilteredRoomDetails(roomDetails.filter(room =>
      room.address.toLowerCase().includes(searchInput.toLowerCase())
    ));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4 ">
      <div className='font-bold text-center text-2xl mb-5 ml-5'>
        Search for Rooms
      </div>
      <div className="max-w-3xl flex gap-6 mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by Address..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-2xl"
        />
        <button className='bg-blue-500 p-3 w-36 rounded-2xl' onClick={handleSearch}>
          Search
        </button>
      </div>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols- lg:grid-cols-1 gap-8 p-8 m-8">
        {filteredRoomDetails.map((room, index) => (
          <RoomCard
            key={index}
            id={room._id}
            ownername={room.ownername}
            img_path={room.img_path}
            title={room.title}
            address={room.address}
            placetype={room.placetype}
            description={room.description}
            perks={room.perks}
            checkIn={room.checkIn}
            checkOut={room.checkOut}
            maxGuests={room.maxGuests}
            price={room.price}
            isbooked={room.isbooked}
            datecreated={room.datecreated}
          />
        ))}
      </div>
    </div>
  );
}

export default Room;
