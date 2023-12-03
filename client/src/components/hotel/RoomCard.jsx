import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

function RoomCard({
  id,
  ownername,
  img_path,
  title,
  address,
  price,
  description,
  perks,
  checkIn,
  checkOut,
  maxGuests,
  isbooked,
  datecreated,
}) {
  const [isBooked, setIsBooked] = useState(isbooked || false);

  const perkIcons = ["Wifi", "Parking", "TV", "Radio", "Pets", "Entrance"];
  function renderPerks(perks) {
    return perkIcons
      .filter((perk, index) => perks[index])
      .map((perk, index) => (
        <span key={index} className="text-lg p-1">
          {perk}
        </span>
      ));
  }
  console.log(isBooked);
  const handleBookNow = async () => {
    try {
      const response = await axios.put("place/isbooked", {
        id,
        isBooked: !isBooked,
      });

      setIsBooked(response.isbooked);
      swal({
        title: "Success!",
        text: "Booked Successfully",
        icon: "success",
        button: "Ok!",
      });
    } catch (error) {
      swal({
        title: "Success!",
        text: "Failed Booking",
        icon: "success",
        button: "Ok!",
      });
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-between p-1 gap-5 bg-gradient-to-rp-3 rounded-2xl shadow-lg">
        <div className="flex gap-5 h-64 capitalize rounded-2xl">
          <div className="relative h-35">
            <img
              src={img_path}
              alt={`Room - ${title}`}
              className="object-cover mb-4 w-45 h-full rounded"
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded"></div>
          </div>
          <div className="">
            <h2 className="text-3xl font-extrabold mb-2 text-indigo-800">
              {title}
            </h2>
            <p className="text-lg">Perks: {renderPerks(perks)}</p>
            <p className="text-lg">
              Owner:{" "}
              <span className="font-semibold capitalize">{ownername}</span>
            </p>
            <p className="text-lg">
              Address:{" "}
              <span className="font-semibold capitalize">{address}</span>
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col mr-10 mt-3">
            <span className="text-gray-500">Price: ${price}/night</span>
            <button
              className={`bg-red-600 mt-2 text-white px-4 py-2 rounded hover:scale-105`}
              onClick={handleBookNow}
            >
              {isBooked ? "Booked" : "Book Now"}
            </button>

            <Link
              to={`/room/${id}`}
              className="bg-blue-500 mt-2 text-white px-4 py-2 rounded transform transition-transform hover:scale-105"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomCard;
