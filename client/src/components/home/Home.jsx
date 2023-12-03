import React, { useEffect, useState } from "react";
import axios from 'axios';
import RoomCard from "../hotel/RoomCard";


function Home() {
  const [allRooms, setAllRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      axios.get("/place/fetchall")
      .then((response) => {
        setAllRooms(response.data);
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
      <div className="container mx-auto mt-8">
        <h1 className="flex justify-center text-3xl font-bold mb-4">To-Let For Your Rooms and Flat</h1>
        <div className="grid grid-cols-1 md:grid-cols- lg:grid-cols-1 gap-8 p-8 m-8">
          {allRooms.map((room, index) => (
            <RoomCard
              key={index}
              id={room._id}
              owner={room.owner}
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
  );
}

export default Home;
