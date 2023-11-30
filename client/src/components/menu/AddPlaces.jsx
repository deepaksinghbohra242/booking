import React, { useState } from "react";
import Perks from "./Perks";
import {Link, Navigate} from "react-router-dom"
import axios from "axios";
import swal from 'sweetalert'

function AddPlaces() {
  const [formData, setFormData] = useState({
    ownername: "",
    title: "",
    address: "",
    placeType: "",
    img_path: "",
    price: "",
    description: "",
    perks: [],
    extraInfo: "",
    checkIn: "",
    checkOut: "",
    maxGuests: 1,
  });

  const [redirect , setRedirect] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value !== undefined ? value : "",
    }));
  };

  const handlePerksChange = (selectedPerks) => {
    setFormData({ ...formData, perks: selectedPerks });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/place/registerplace", formData).then((data) => {
        setFormData(data);
      });
      console.log("Form data submitted:", formData);
      swal({
        title: "Success!",
        text: "Place Added Successfully",
        icon: "success",
        button: "Ok!",
      });
      setRedirect(true);
    } catch (error) {
      swal({
        title: "Try Again!",
        text: "failed",
        icon: "error",
        button: "Ok!",
      });
      console.log(error);
    }
  };

  if (redirect){
    return <Navigate to={'/profile/places'} />
  }
  return (
    <div className="container mx-auto mt-8 p-8 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add a New Place</h2>
      <form onSubmit={handleSubmit}>
        {/* Owner Name */}
        <div className="mb-4">
          <label
            htmlFor="ownerName"
            className="block text-sm font-medium text-gray-600"
          >
            Owner Name
          </label>
          <input
            type="text"
            id="ownername"
            name="ownername"
            value={formData.ownername}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter owner name"
          />
        </div>

        {/* Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-600"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter title"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-600"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter address"
          />
        </div>

        {/* Place Type */}
        <div className="mb-4">
          <label
            htmlFor="placeType"
            className="block text-sm font-medium text-gray-600"
          >
            Place Type
          </label>
          <input
            type="text"
            id="placeType"
            name="placeType"
            value={formData.placeType}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter place type"
          />
        </div>

        {/* Image Path */}
        <div className="mb-4">
          <label
            htmlFor="imgPath"
            className="block text-sm font-medium text-gray-600"
          >
            Image Path
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="img_path"
              name="img_path"
              value={formData.img_path}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter image path"
            />
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-600"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter price"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter description"
          />
        </div>

        {/* Perks */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Perks
          </label>
          <Perks selected={formData.perks} onChange={handlePerksChange} />
        </div>

        {/* Extra Info */}
        <div className="mb-4">
          <label
            htmlFor="extraInfo"
            className="block text-sm font-medium text-gray-600"
          >
            Extra Info
          </label>
          <textarea
            id="extraInfo"
            name="extraInfo"
            value={formData.extraInfo}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter extra info"
          />
        </div>

        {/* Check-In and Check-Out Time */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="checkIn"
              className="block text-sm font-medium text-gray-600"
            >
              Check-In Time
            </label>
            <input
              type="number"
              id="checkIn"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter check-in time"
            />
          </div>
          <div>
            <label
              htmlFor="checkOut"
              className="block text-sm font-medium text-gray-600"
            >
              Check-Out Time
            </label>
            <input
              type="number"
              id="checkOut"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter check-out time"
            />
          </div>
        </div>

        {/* Max Guests */}
        <div className="mb-4">
          <label
            htmlFor="maxGuests"
            className="block text-sm font-medium text-gray-600"
          >
            Max Guests
          </label>
          <input
            type="number"
            id="maxGuests"
            name="maxGuests"
            value={formData.maxGuests}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter max guests"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPlaces;
