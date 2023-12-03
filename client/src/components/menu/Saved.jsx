import React, { useEffect, useState } from 'react'
import RoomCard from '../hotel/RoomCard'
import axios from "axios";

function Saved() {
  const [bookedRoom, setBookedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    axios.get("/place/booked")
      .then((response) => {
        setBookedRooms(response.data);
        setLoading(false);
      }) 
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-4 ">
      <div className='font-bold  text-center text-2xl mb-5 ml-5'>
        BookedRooms
      </div>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols- lg:grid-cols-1 gap-8 p-8 m-8">
        {bookedRoom.map((room, index) => (
          <RoomCard
            key={index}
            ownername={room.ownername}
            id={room._id}
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
    </>
  )
}

export default Saved
