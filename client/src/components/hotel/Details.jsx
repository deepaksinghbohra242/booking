import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Details() {
  const { id } = useParams();
  const [roomDetails, setRoomDetails] = useState();

  useEffect(() => {
    axios.post('/place/details',{id})
      .then((response) => {
        setRoomDetails(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching room details:", error);
      });
  }, [id]);


  const perkIcons = ["Wifi", "Parking", "TV", "Radio", "Pets", "Entrance"];

  const renderPerks = () => {
    return perkIcons
      .filter((perk, index) => roomDetails && roomDetails.perks[index] === 'true')
      .map((perk, index) => (
        <span key={index} className="text-lg p-1">
          {perk}
        </span>
      ));
  };
  

  if (!roomDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className=" h-screen pt-8 min-3 flex items-center justify-center">
        <div className=" h-screen flex flex-col p-4 rounded-md">
          <div className="h-full w-full ">
            <img
              className="mx-auto w-full h-full rounded-2xl mb-4"
              src={roomDetails.img_path}
              alt="User Profile"
            />
          </div>
          <div className="flex justify-between  font-semibold">
            <div className="ml-10 mt-4">
              <h1 className="mt-4 text-2xl capitalize font-bold mb-2">
                {roomDetails.title}
              </h1>
              <p className="text-gray-600  text-xl capitalize mb-4">
              Ownername : <span className="font-semibold capitalize text-black">{roomDetails.ownername}</span>
              </p>
              <p className="text-gray-600 text-xl capitalize mb-4">Address :<span className="font-semibold capitalize text-black"> {roomDetails.address}</span></p>
              <p className="text-gray-600 text-xl capitalize mb-4">Perks :<span className="font-semibold capitalize text-black"> {renderPerks()}</span></p>
              <p className="text-gray-600 text-xl capitalize mb-4">price : <span className="font-semibold capitalize text-black">{roomDetails.price}</span></p>
              <p className="text-gray-600 text-xl capitalize mb-4">Description :<span className="font-semibold capitalize text-black"> {roomDetails.description}</span></p>
              <p className="text-gray-600 text-xl capitalize mb-4">MaxGuest :<span className="font-semibold capitalize text-black"> {roomDetails.maxGuests}</span></p>
              <p className="text-gray-600 text-xl capitalize mb-4">Check in  :<span className="font-semibold capitalize text-black"> {roomDetails.checkIn}</span></p>
              <p className="text-gray-600 text-xl capitalize mb-4">Check Out :<span className="font-semibold capitalize text-black"> {roomDetails.checkOut}</span></p>            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
