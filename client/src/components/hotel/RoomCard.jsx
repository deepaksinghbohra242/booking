import React from "react";

function RoomCard({
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
  isBooked,
  datecreated,
}) {
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
              Owner: <span className="font-semibold capitalize">{ownername}</span>
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
            <button className="bg-red-500 mt-2 text-white px-4 py-2 rounded transform transition-transform hover:scale-105" disabled={isBooked}>
              {isBooked ? "Booked" : "Book Now"}
            </button>
            <button className="bg-blue-500 mt-2 text-white px-4 py-2 rounded transform transition-transform hover:scale-105">
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomCard;
